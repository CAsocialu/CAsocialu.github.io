const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// File paths
const componentPath = "./src/pages/Domov/Domov.js"; // React component with images
const workflowPath = "./.github/workflows/buildndeploy.yml"; // GitHub Actions workflow

// Get today's date for comparison
const today = new Date();

// Step 1a: Parse and update the React component - handle expired content
function updateOldComponents() {
    let content;
    try {
        content = fs.readFileSync(componentPath, "utf8");
    } catch (error) {
        console.error(`Error reading component file ${componentPath}:`, error);
        return false;
    }
    let hasChanges = false;
    let removedImages = new Set();

    // First pass: collect expired image names that should be removed
    content.replace(/<img [^>]*src=\{([^}]+)\}[^>]*valid-until="([^"]+)"[^>]*>/g, (match, imgVar, dateStr) => {
        const expirationDate = new Date(dateStr);
        if (Number.isNaN(expirationDate.getTime())) {
            console.log(`WARNING! Invalid date format - ${dateStr}`);
            return match;
        }
        if (expirationDate < today) {
            removedImages.add(imgVar.trim());
        }
    });

    // Second pass: remove expired image elements
    let updatedContent = content.replace(/<img [^>]*valid-until="([^"]+)"[^>]*>(\s*(?=<|$))?/g, (match, dateStr) => {
        const expirationDate = new Date(dateStr);
        if (isNaN(expirationDate.getTime())) {
            console.log(`WARNING! Invalid date format - ${dateStr}`);
            return match;
        }
        if (expirationDate < today) {
            hasChanges = true;
            return ""; // Remove expired image and trailing whitespace
        }
        return match;
    });

    // Handle imports and file deletion for expired images
    if (removedImages.size > 0) {
        const importRegex = new RegExp(
            `import\\s+(${Array.from(removedImages)
                .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                .join("|")})\\s+from\\s+["']([^"']+)["'];?[ \\t]*\\r?\\n`,
            "g"
        );
        updatedContent = updatedContent.replace(importRegex, (match, importVar, importPath) => {
            const componentDir = path.dirname(path.resolve(componentPath));
            const fullImagePath = path.resolve(componentDir, importPath);

            try {
                if (fs.existsSync(fullImagePath)) {
                    fs.unlinkSync(fullImagePath);
                    console.log(`Deleted expired image file: ${fullImagePath}`);
                }
            } catch (error) {
                console.error(`Error deleting image file ${fullImagePath}:`, error);
            }
            return "";
        });
        hasChanges = true;
    }

    updatedContent = updatedContent.replace(/\n\n\n+/g, "\n\n");

    if (hasChanges) {
        fs.writeFileSync(componentPath, updatedContent, "utf8");
        console.log("Expired images and imports removed.");
    }
    return hasChanges;
}

// Step 1b: Handle future content (don't commit these changes)
function updateUpcomingComponents() {
    let content;
    try {
        content = fs.readFileSync(componentPath, "utf8");
    } catch (error) {
        console.error(`Error reading component file ${componentPath}:`, error);
        return;
    }
    let removedImages = new Set();

    // Collect future images that should be temporarily removed
    content.replace(/<img [^>]*src=\{([^}]+)\}[^>]*valid-from="([^"]+)"[^>]*>/g, (match, imgVar, dateStr) => {
        const startDate = new Date(dateStr);
        if (!isNaN(startDate.getTime()) && startDate > today) {
            removedImages.add(imgVar.trim());
        }
    });

    // Remove future image elements
    let updatedContent = content.replace(/<img [^>]*valid-from="([^"]+)"[^>]*>(\s*(?=<|$))?/g, (match, dateStr) => {
        const startDate = new Date(dateStr);
        if (!isNaN(startDate.getTime()) && startDate > today) {
            return ""; // Remove future image and trailing whitespace
        }
        return match;
    });

    // Handle imports and file deletion for future images
    if (removedImages.size > 0) {
        const importRegex = new RegExp(
            `import\\s+(${Array.from(removedImages)
                .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                .join("|")})\\s+from\\s+["']([^"']+)["'];?[ \\t]*\\r?\\n`,
            "g"
        );
        updatedContent = updatedContent.replace(importRegex, (match, importVar, importPath) => {
            const componentDir = path.dirname(path.resolve(componentPath));
            const fullImagePath = path.resolve(componentDir, importPath);

            try {
                if (fs.existsSync(fullImagePath)) {
                    fs.unlinkSync(fullImagePath);
                    console.log(`Temporarily removed future image file: ${fullImagePath}`);
                }
            } catch (error) {
                console.error(`Error handling future image file ${fullImagePath}:`, error);
            }
            return "";
        });
    }

    updatedContent = updatedContent.replace(/\n\n\n+/g, "\n\n");
    fs.writeFileSync(componentPath, updatedContent, "utf8");
}

// Update updateCronSchedule to handle both valid-from and valid-until dates
function updateCronSchedule() {
    let content;
    try {
        content = fs.readFileSync(componentPath, "utf8");
    } catch (error) {
        console.error(`Error reading component file ${componentPath}:`, error);
        return false;
    }
    const cronDates = new Set();

    // Collect both start and end dates
    content.replace(/valid-(from|until)="([^"]+)"/g, (match, type, dateStr) => {
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
            cronDates.add(dateStr);
        }
    });

    // Format dates for cron
    const cronEntries = Array.from(cronDates)
        .map((dateStr) => {
            const date = new Date(dateStr);
            if (Number.isNaN(date.getTime())) {
                console.log(`WARNING! Invalid date format - ${dateStr} - Skipping cron entry.`);
                return null;
            }
            const day = date.getDate();
            const month = date.getMonth() + 1;
            if (day < 1 || day > 31 || month < 1 || month > 12) {
                console.log(`WARNING! Invalid date values - ${dateStr} - Skipping cron entry.`);
                return null;
            }
            return `    - cron: "0 0 ${date.getDate()} ${date.getMonth() + 1} *"`;
        })
        .filter(Boolean)
        .join("\n");

    // Read and update the workflow file
    try {
        let workflowContent = fs.readFileSync(workflowPath, "utf8");
        const oldWorkflowContent = workflowContent;

        if (cronDates.size === 0) {
            // No dates to schedule - comment out the schedule section
            if (workflowContent.includes("  schedule:")) {
                workflowContent = workflowContent.replace(/(\s*schedule:[\s\S]*?(?=\n\s*[a-z]))/m, "\n  # schedule:");
            }
        } else {
            // Has dates to schedule
            if (workflowContent.includes("  # schedule:")) {
                // Uncomment and update the schedule section
                workflowContent = workflowContent.replace(/\s*# schedule:[\s\S]*?(?=\n\s*[a-z])/m, `\n  schedule:\n${cronEntries}`);
            } else if (workflowContent.includes("  schedule:")) {
                // Update existing schedule section
                workflowContent = workflowContent.replace(/\s*schedule:[\s\S]*?(?=\n\s*[a-z])/m, `\n  schedule:\n${cronEntries}`);
            } else {
                // Add new schedule section after 'on:'
                workflowContent = workflowContent.replace(/(on:.*?\n)/s, `$1  schedule:\n${cronEntries}\n`);
            }
        }

        fs.writeFileSync(workflowPath, workflowContent, "utf8");
        console.log("Workflow cron schedule updated.");
        return workflowContent !== oldWorkflowContent;
    } catch (error) {
        console.error(`Error updating workflow file ${workflowPath}:`, error);
        return false;
    }
}

// Step 3: Commit and push changes if any files were modified
function commitAndPushChanges(hasChanges) {
    if (process.env.TARGET_BRANCH === undefined) {
        console.error("TARGET_BRANCH is not set. Not committing or pushing changes.");
        return;
    }
    try {
        if (hasChanges) {
            execSync(`git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"`);
            execSync(`git config --global user.name "Anti-Social Bot"`);
            execSync(`git add ${path.resolve(componentPath)} ${path.resolve(workflowPath)}`);
            execSync(`git commit -m "Remove expired images and update cron schedule"`);
            execSync(`git push origin HEAD:${process.env.TARGET_BRANCH}`);
            console.log("Changes pushed to repository. Stopping further build process execution in favour of the new commit.");
            process.exit(1);
        } else {
            console.log("No changes to commit.");
        }
    } catch (error) {
        console.error("Error during git commit/push:", error);
    }
}

// Run steps in the correct order
const hasOldComponentChanges = updateOldComponents();
const hasWorkflowChanges = updateCronSchedule();
commitAndPushChanges(hasOldComponentChanges || hasWorkflowChanges);
updateUpcomingComponents(); // Run after commit, changes won't be committed
