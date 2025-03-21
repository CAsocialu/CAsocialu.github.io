/* eslint-disable no-loop-func */
const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const cpus = require('os').cpus().length;

// Array to store original file paths
const originalFiles = [];
const convertedFiles = [];

function normalizePath(filePath) {
    return filePath.split(path.sep).join(path.posix.sep);
}

async function deleteOriginalFiles() {
    console.log('\nDeleting original files...');
    for (const conversion of convertedFiles) {
        if (conversion.status === 'converted') {
            try {
                await fs.rm(conversion.original, { force: true, maxRetries: 5, retryDelay: 1000 });
                console.log(`Deleted: ${conversion.original}`);
            } catch (error) {
                console.error(`Error deleting ${conversion.original}:`, error);
            }
        } else if (conversion.status === 'skipped' || conversion.status === 'error') {
            console.log(`${conversion.original} could not be deleted - ${conversion.status === 'skipped' ? `Conversion of ${conversion.original} has been skipped.` : `There has been an error converting ${conversion.original}: ${conversion.error}`}`);
        }
    }
    console.log('Original file deletion complete!');
}

async function replaceInFiles() {
    // Find all JS, JSX, TS, TSX, CSS, SCSS, HTML files, excluding webpify.js and pre-render.js
    const codeFiles = glob.sync('**/*.{js,jsx,ts,tsx,css,scss,html}', {
        ignore: [
            'node_modules/**',
            'build/**',
            'dist/**',
            'webpify.js',
            'pre-render.js',
            'webpify-node.js',
            'webpify-bun.js'
        ]
    });

    for (const filePath of codeFiles) {
        try {
            let content = await fs.readFile(filePath, 'utf8');
            let hasChanges = false;

            // Replace each image reference
            for (const conversion of convertedFiles) {
                if (conversion.status === 'skipped') continue;
                const { original, webp } = conversion;
                const fileName = path.basename(original);

                if (original.includes('public/')) {
                    // Create the absolute path version (starting with /)
                    const absolutePath = `/${original.split('public/')[1]}`;
                    const absoluteWebPPath = `/${webp.split('public/')[1]}`;

                    if (content.includes('%PUBLIC_URL%')) {
                        // Handle %PUBLIC_URL% placeholder
                        const publicUrlPath = `%PUBLIC_URL%${absolutePath}`;
                        const publicUrlWebPPath = `%PUBLIC_URL%${absoluteWebPPath}`;

                        // Replace %PUBLIC_URL% paths
                        if (content.includes(publicUrlPath)) {
                            content = content.replace(new RegExp(publicUrlPath, 'g'), publicUrlWebPPath);
                            hasChanges = true;
                            console.log(`Replaced %PUBLIC_URL% reference in ${filePath}: ${publicUrlPath} → ${publicUrlWebPPath}`);
                        }
                    } else {
                        // Replace absolute path references
                        if (content.includes(absolutePath)) {
                            content = content.replace(new RegExp(absolutePath, 'g'), absoluteWebPPath);
                            hasChanges = true;
                            console.log(`Replaced absolute path reference in ${filePath}: ${absolutePath} → ${absoluteWebPPath}`);
                        }
                    }
                }

                // Original relative path handling
                const absoluteOriginalPath = path.resolve(original);
                const regex = new RegExp(`(["'\\(])([^"']*${fileName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})\\1`, 'g');
                let match;
                while ((match = regex.exec(content)) !== null) {
                    const matchedPath = match[2];
                    const absoluteMatchedPath = path.resolve(path.dirname(filePath), matchedPath);

                    if (absoluteMatchedPath === absoluteOriginalPath) {
                        // Calculate the relative path from the source file to the webp file
                        const relativeWebPPath = path.relative(
                            path.dirname(filePath),
                            webp
                        ).split(path.sep).join(path.posix.sep); // Ensure forward slashes

                        // Preserve the original path style (with or without ./)
                        const leadingPath = matchedPath.startsWith('./') ? './' : '';
                        const newPath = leadingPath + relativeWebPPath;
                        
                        content = content.replace(matchedPath, newPath);
                        hasChanges = true;
                        console.log(`Replaced reference in ${filePath}: ${matchedPath} → ${newPath}`);
                    }
                }
            }

            // Only write to file if changes were made
            if (hasChanges) {
                await fs.writeFile(filePath, content, 'utf8');
            }
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
        }
    }
}

// Worker thread code
if (!isMainThread) {
    const { imagePath, outputPath, quality } = workerData;
    
    async function convertImage() {
        try {
            await sharp(imagePath)
                .webp({ quality: quality || 80 })
                .toFile(outputPath);
            
            return {
                original: imagePath,
                webp: outputPath,
                status: 'converted'
            };
        } catch (error) {
            return {
                original: imagePath,
                webp: outputPath,
                status: 'error',
                error: error.message
            };
        }
    }
    
    convertImage().then(result => {
        parentPort.postMessage(result);
    });
} else {
    // Main thread code
    async function convertToWebP() {
        try {
            // Find all jpg and png files in the project
            const images = glob.sync('**/*.{jpg,jpeg,png}', {
                ignore: [
                    'node_modules/**',
                    'build/**',
                    'dist/**',
                    'public/favicon.png',
                    'public/assets/banner.png',
                    'public/assets/bannerDEJTENÁMVAŠEVŠECHNYPRACHY.png'
                ]
            }).map(normalizePath);
            
            // Store all original file paths
            originalFiles.push(...images);
            
            // Calculate number of threads
            const maxThreads = Math.min(images.length, cpus);
            const numThreads = Math.max(1, maxThreads); // At least 1 thread
            
            console.log(`Found ${String(images.length).padStart(images.length.toString().length, '0')} images to convert.`);
            console.log(`Using ${numThreads} threads for parallel conversion.\n`);
            
            console.log(...(images.map((image, i) => `Conversion Queue [${String(i + 1).padStart(images.length.toString().length, '0')}/${images.length}]: ${image} \n`)));
            
            // Filter out images that already have WebP versions
            const imagesToProcess = [];
            for (const imagePath of images) {
                const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                
                // Check if WebP version already exists
                try {
                    await fs.access(outputPath);
                    console.log(`Skipping ${imagePath} - WebP version already exists`);
                    convertedFiles.push({
                        original: imagePath,
                        webp: outputPath,
                        status: 'skipped'
                    });
                } catch {
                    // File doesn't exist, add to processing queue
                    imagesToProcess.push({ imagePath, outputPath });
                }
            }
            
            // Process images in batches with worker threads
            if (imagesToProcess.length > 0) {
                let completedCount = 0;
                const totalToProcess = imagesToProcess.length;
                
                // Process images in chunks according to the number of threads
                for (let i = 0; i < imagesToProcess.length; i += numThreads) {
                    const chunk = imagesToProcess.slice(i, i + numThreads);
                    const workerPromises = chunk.map(({ imagePath, outputPath }) => {
                        return new Promise((resolve) => {
                            const worker = new Worker(__filename, {
                                workerData: { imagePath, outputPath, quality: 80 }
                            });
                            
                            worker.on('message', (result) => {
                                completedCount++;
                                console.log(`Converted [${String(completedCount).padStart(totalToProcess.toString().length, '0')}/${totalToProcess}]: ${result.original} → ${result.webp}`);
                                convertedFiles.push(result);
                                resolve();
                            });
                            
                            worker.on('error', (error) => {
                                completedCount++;
                                console.error(`Error in worker for ${imagePath}:`, error);
                                convertedFiles.push({
                                    original: imagePath,
                                    webp: outputPath,
                                    status: 'error',
                                    error: error.message
                                });
                                resolve();
                            });
                            
                            worker.on('exit', (code) => {
                                if (code !== 0) {
                                    console.error(`Worker for ${imagePath} stopped with exit code ${code}`);
                                }
                            });
                        });
                    });
                    
                    // Wait for the current batch to complete
                    await Promise.all(workerPromises);
                }
            }
            
            // Save the results to a JSON file
            await fs.writeFile(
                'webp-conversion-results.json',
                JSON.stringify({
                    originalFiles,
                    conversions: convertedFiles
                }, null, 2)
            );
            
            console.log('Conversion complete! Results saved to webp-conversion-results.json');
            
            // Replace references in code files
            console.log('\nReplacing image references in code files...');
            await replaceInFiles();
            console.log('Reference replacement complete!');
            
            // Delete original files
            await deleteOriginalFiles();
            
        } catch (error) {
            console.error('Conversion failed:', error);
        }
    }
    
    // Run the conversion
    convertToWebP();
}