import Bun from 'bun';
import { rmSync, mkdirSync, cpSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Buffer } from "buffer";

const PUBLIC_URL = '/', // Change this to the desired public URL
      BUILD_PATH = 'build';

rmSync(BUILD_PATH, { recursive: true, force: true });
mkdirSync(BUILD_PATH, { recursive: true });
cpSync('public', BUILD_PATH, { recursive: true });


let finalPublicUrl;

// Modify build/index.html
const indexPath = join(BUILD_PATH, 'index.html');
try {
    let indexContent = readFileSync(indexPath, 'utf-8');

    // Replace %PUBLIC_URL%
    finalPublicUrl = PUBLIC_URL.replace(/\/*$/, '');
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

/* fuck my stupid faggot life </3
// Process CSS files for base64 fonts
const cssPath = join(BUILD_PATH, 'index.css'); // Adjust if needed
const fontFormats = {
    "otc": "collection",
    "ttc": "collection",
    "eot": "embedded-opentype",
    "otf": "opentype",
    "ttf": "truetype",
    "svg": "svg",
    "woff": "woff",
    "woff2": "woff2"
}
try {
    let cssContent = readFileSync(cssPath, 'utf-8');
    const fontFaceRegex = /@font-face\s*{([^}]+)}/g;
    let matches = cssContent.match(fontFaceRegex);
    let fontCount = 0;

    for (let match of matches) {
        const fontFaceBlock = match;

        // Extract font-family, font-weight, font-style
        const fontFamily = fontFaceBlock.match(/font-family:\s*['"]?([^;'"]+)['"]?;/)?.[1] || `Font${fontCount}`;
        const fontWeight = fontFaceBlock.match(/font-weight:\s*(\d+);/)?.[1] || 'Regular';
        const fontStyle = fontFaceBlock.match(/font-style:\s*(\w+);/)?.[1] || 'normal';

        // Extract base64 font
        const fontMatch = fontFaceBlock.match(/url\((data:font\/.*?)\);/);
        if (!fontMatch) continue;

        const base64Data = fontMatch[1]; // Extract base64 string
        const mimeMatch = base64Data.match(/^data:(font\/[a-z0-9-]+);base64,/);
        if (!mimeMatch) continue;

        const mimeType = mimeMatch[1]; // Extract mime type (e.g., font/woff2)
        const extension = mimeType.split('/')[1]; // Get extension (woff2, ttf, etc.)
        const sanitizedFontName = fontFamily.replace(/\s+/g, '-'); // Replace spaces with dashes

        // Create font filename in the new format
        const fontFileName = `${sanitizedFontName}-${fontWeight}-${fontStyle}-fromBase64.${extension}`;
        const fontFilePath = join(BUILD_PATH, fontFileName);
        const fontUrl = `${finalPublicUrl}/${fontFileName}`;

        // Decode base64 and write font file
        const base64String = base64Data.replace(/^data:.*;base64,/, '');
        const fontBuffer = Buffer.from(base64String, 'base64');
        let fontBufferSanitized = fontBuffer;

        if (mimeType === 'font/woff2') {
            // Check for the trailing 8-byte sequence
            // because for SOME REASON Bun.build appends 7E 8A E6 6A DC 28 7D FD at the end of SOME WOFF2 fonts and it BREAKS EVERYTHING
            const trailingBytes = Buffer.from([0x7E, 0x8A, 0xE6, 0x6A, 0xDC, 0x28, 0x7D, 0xFD]);

            if (fontBufferSanitized.length >= 8) {
                const last8Bytes = fontBufferSanitized.subarray(fontBufferSanitized.length - 8);

                if (last8Bytes.equals(trailingBytes)) {
                    fontBufferSanitized = fontBufferSanitized.subarray(0, fontBufferSanitized.length - 8);
                }
            }
        }

        writeFileSync(fontFilePath, Bun.gzipSync(fontBufferSanitized), 'binary');;

        // Replace base64 reference in CSS with the new file path
        cssContent = cssContent.replace(base64Data, fontUrl);
        cssContent = cssContent.replace(`url(${fontUrl})`, `url(${fontUrl}) format("${fontFormats[mimeType.split("/")[1]]}")`);
        fontCount++;
    }

    writeFileSync(cssPath, cssContent, 'utf-8');
    console.log(`✅ Extracted ${fontCount} base64 fonts into separate files.`);
} catch (err) {
    console.warn('Warning: CSS file not found or could not be modified.');
}*/