const fs = require('fs');
const path = require('path');
const { exportImages } = require('pdf-export-images');

async function extract() {
  try {
    const bedsPdfPath = path.resolve('Beds.pdf');
    const bedsOutputDir = path.resolve('public', 'images', 'beds_raw');
    
    if (!fs.existsSync(bedsOutputDir)) fs.mkdirSync(bedsOutputDir, { recursive: true });

    console.log('Extracting from Beds.pdf...');
    const bedsImages = await exportImages(bedsPdfPath, bedsOutputDir);
    console.log(`Extracted ${bedsImages.length} images from beds pdf.`);

  } catch (err) {
    console.error('Error extracting images:', err);
  }
}

extract();
