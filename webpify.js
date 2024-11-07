const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

// Array to store original file paths
const originalFiles = [];
const convertedFiles = [];

async function deleteOriginalFiles() {
    console.log('\nDeleting original files...');
    for (const conversion of convertedFiles) {
        if (conversion.status === 'converted' || conversion.status === 'skipped') {
            try {
                await fs.unlink(conversion.original);
                console.log(`Deleted: ${conversion.original}`);
            } catch (error) {
                console.error(`Error deleting ${conversion.original}:`, error);
            }
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
            'pre-render.js'
        ]
    });

    for (const filePath of codeFiles) {
        try {
            let content = await fs.readFile(filePath, 'utf8');
            let hasChanges = false;

            // Replace each image reference
            for (const conversion of convertedFiles) {
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
                        const relativeWebPPath = path.posix.relative(path.posix.dirname(filePath), webp);
                        const leadingPath = matchedPath.startsWith('./') ? './' : matchedPath.startsWith('/') ? '/' : '';
                        content = content.replace(matchedPath, leadingPath + relativeWebPPath);
                        hasChanges = true;
                        console.log(`Replaced reference in ${filePath}: ${matchedPath} → ${leadingPath + relativeWebPPath}`);
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

async function convertToWebP() {
    try {
        // Find all jpg and png files in the project
        const images = glob.sync('**/*.{jpg,jpeg,png}', {
            ignore: [
                'node_modules/**',
                'build/**',
                'dist/**',
                'public/favicon.png',
                'public/assets/banner.png'
            ]
        });

        console.log(`Found ${String(images.length).padStart(images.length.toString().length, '0')} images to convert.\n`, ...(images.map((image, i) => `Conversion Queue [${String(i + 1).padStart(images.length.toString().length, '0')}/${images.length}]: ${image} \n`)));

        for (const imagePath of images) {
            // Store original file path
            originalFiles.push(imagePath);

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
                continue;
            } catch {
                // File doesn't exist, proceed with conversion
            }

            try {
                await sharp(imagePath)
                    .webp({ quality: 100 })
                    .toFile(outputPath);

                convertedFiles.push({
                    original: imagePath,
                    webp: outputPath,
                    status: 'converted'
                });
                console.log(`Converted [${String(convertedFiles.length).padStart(images.length.toString().length, '0')}/${images.length}]: ${imagePath} → ${outputPath}`);
            } catch (error) {
                console.error(`Error converting ${imagePath}:`, error);
                convertedFiles.push({
                    original: imagePath,
                    webp: outputPath,
                    status: 'error',
                    error: error.message
                });
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