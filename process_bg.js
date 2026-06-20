const { removeBackground } = require('@imgly/background-removal-node');
const { Jimp } = require('jimp');

async function processImage(inputPath, bgPath, outputPath) {
    try {
        console.log(`Processing ${inputPath}...`);
        
        // Convert paths to file URIs for imgly
        const inputUri = 'file:///' + inputPath.replace(/\\/g, '/');
        
        // 1. Remove background
        const blob = await removeBackground(inputUri);
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // 2. Load background and foreground with Jimp
        const bg = await Jimp.read(bgPath);
        const fg = await Jimp.read(buffer);
        
        // 3. Calculate scale and position to fit the sofa nicely into the living room
        const targetWidth = Math.floor(bg.bitmap.width * 0.85);
        const scale = targetWidth / fg.bitmap.width;
        const targetHeight = Math.floor(fg.bitmap.height * scale);
        
        fg.resize({ w: targetWidth, h: targetHeight });
        
        // Position it centered horizontally, and aligned to the bottom (with some padding)
        const left = Math.floor((bg.bitmap.width - targetWidth) / 2);
        const top = Math.floor(bg.bitmap.height - targetHeight - (bg.bitmap.height * 0.05));
        
        // 4. Composite
        bg.composite(fg, left, top);
        await bg.write(outputPath);
        
        console.log(`Saved composite to ${outputPath}`);
    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error);
    }
}

async function main() {
    const input = 'd:\\summer project\\websites\\kapoor-furnitures\\public\\images\\sofas_raw\\img_p0_1.png';
    const bg = 'C:\\Users\\SHIKHAR\\.gemini\\antigravity\\brain\\4d3bbb1a-b19d-4ae0-9995-159e0ed6c2e3\\living_room_bg_warm_1781959987877.png';
    const output = 'd:\\summer project\\websites\\kapoor-furnitures\\public\\images\\sofas_raw\\img_p0_1_test.png';
    
    await processImage(input, bg, output);
}

main();
