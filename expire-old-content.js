const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// File paths
const componentPath = './src/pages/Domov.js'; // React component with images
const workflowPath = './.github/workflows/buildndeploy.yml'; // GitHub Actions workflow

// Get today's date for comparison
const today = new Date();

// Step 1: Parse and update the React component
function updateComponentFile() {
    const content = fs.readFileSync(componentPath, 'utf8');
    let hasChanges = false;
    let removedImages = new Set();

    // First pass: collect image names that should be removed
    content.replace(/<img [^>]*src=\{([^}]+)\}[^>]*valid-until="([^"]+)"[^>]*>/g, (match, imgVar, dateStr) => {
        const expirationDate = new Date(dateStr);
        if (expirationDate < today) {
            removedImages.add(imgVar.trim());
        }
    });

    // Second pass: remove expired image elements and their trailing whitespace
    let updatedContent = content.replace(/<img [^>]*valid-until="([^"]+)"[^>]*>(\s*(?=<|$))?/g, (match, dateStr) => {
        const expirationDate = new Date(dateStr);
        if (expirationDate < today) {
            hasChanges = true;
            return ''; // Remove expired image and its trailing whitespace
        }
        return match; // Keep unexpired image
    });

    // Third pass: remove imports for expired images
    if (removedImages.size > 0) {
        const importRegex = new RegExp(`import\\s+(${Array.from(removedImages).join('|')})\\s+from\\s+"([^"]+)";?[ \t]*\r?\n`, 'g');
        updatedContent = updatedContent.replace(importRegex, (match, importVar, importPath) => {
            // Convert relative path to absolute path
            const componentDir = path.dirname(path.resolve(componentPath));
            const fullImagePath = path.resolve(componentDir, importPath);

            try {
                if (fs.existsSync(fullImagePath)) {
                    fs.unlinkSync(fullImagePath);
                    console.log(`Deleted image file: ${fullImagePath}`);
                } else {
                    console.log(`Image file not found: ${fullImagePath}`);
                }
            } catch (error) {
                console.error(`Error deleting image file ${fullImagePath}:`, error);
            }
            return ''; // Remove the import statement and its newline
        });
        hasChanges = true;
    }

    // Final pass: clean up any double newlines created by our removals
    updatedContent = updatedContent.replace(/\n\n\n+/g, '\n\n');

    if (hasChanges) {
        fs.writeFileSync(componentPath, updatedContent, 'utf8');
        console.log('Expired images and imports removed from component file.');
    }
    return hasChanges;
}

// Step 2: Update the cron schedule in the workflow file
function updateCronSchedule() {
    const content = fs.readFileSync(componentPath, 'utf8');
    const cronDates = new Set();

    // Collect upcoming expiration dates for cron scheduling
    content.replace(/valid-until="([^"]+)"/g, (match, dateStr) => {
        const expirationDate = new Date(dateStr);
        if (expirationDate > today) {
            cronDates.add(dateStr);
        }
    });

    // Format dates to cron-compatible syntax
    const cronEntries = Array.from(cronDates).map(dateStr => {
        const date = new Date(dateStr);
        return `0 0 ${date.getDate()} ${date.getMonth() + 1} *`;
    });

    // Read the workflow file
    let workflowContent = fs.readFileSync(workflowPath, 'utf8');

    // Remove old cron schedules
    workflowContent = workflowContent.replace(/cron:\s*\[(.*?)\]/s, `cron: [${cronEntries.map(cron => `"${cron}"`).join(', ')}]`);
    
    fs.writeFileSync(workflowPath, workflowContent, 'utf8');
    console.log('Workflow cron schedule updated.');
}

// Step 3: Commit and push changes if any files were modified
function commitAndPushChanges(hasComponentChanges) {
    try {
        if (hasComponentChanges) {
            execSync(`git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"`);
            execSync(`git config --global user.name "Anti-Social Bot"`);
            execSync(`git add ${componentPath} ${workflowPath}`);
            execSync(`git commit -m "Remove expired images and update cron schedule"`);
            execSync('git push');
            console.log('Changes pushed to repository.');
        } else {
            console.log('No changes to commit.');
        }
    } catch (error) {
        console.error('Error during git commit/push:', error);
    }
}

// Run steps
const hasComponentChanges = updateComponentFile();
updateCronSchedule();
commitAndPushChanges(hasComponentChanges);