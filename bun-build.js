import Bun from 'bun';
import { rmSync, mkdirSync, cpSync, readFileSync, writeFileSync } from "fs";

const PUBLIC_URL = '/'; // Change this to the desired public URL

rmSync('build', { recursive: true, force: true });
mkdirSync('build', { recursive: true });
cpSync('public', 'build', { recursive: true });

// Modify build/index.html
const indexPath = 'build/index.html';
try {
    let indexContent = readFileSync(indexPath, 'utf-8');
    
    // Replace %PUBLIC_URL%
    const finalPublicUrl = PUBLIC_URL === '/' ? '' : PUBLIC_URL;
    indexContent = indexContent.replace(/%PUBLIC_URL%/g, finalPublicUrl);

    // Find the last indented line before </head> and copy its indentation
    const headMatch = indexContent.match(/(.*)(<\/head>)/);
    if (headMatch) {
        const indent = headMatch[1].match(/^\s*/)?.[0] || '';
        const scriptTag = `${indent}<script defer="defer" src="${finalPublicUrl}/index.js"></script>\n`;
        indexContent = indexContent.replace(/<\/head>/, scriptTag + '</head>');
    }

    writeFileSync(indexPath, indexContent, 'utf-8');
} catch (err) {
    console.warn('Warning: index.html not found or could not be modified.');
}

const result = await Bun.build({
    publicPath: PUBLIC_URL,
    entrypoints: ['src/index.js'],
    outdir: 'build',
    minify: true,
    sourcemap: "linked",
    format: 'iife',
    define: {
        'process.env.NODE_ENV': '"production"',
        'process.env.PUBLIC_URL': PUBLIC_URL
    }
});

if (!result.success) {
    console.error('Build failed:', result.logs);
    process.exit(1);
}
