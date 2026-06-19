const fs = require('fs');
const path = require('path');
const { exportImages } = require('pdf-export-images');

async function extract() {
  try {
    const mainPdfPath = path.resolve('Dining table.pdf');
    const extraPdfPath = path.resolve('dining tables extra.pdf');
    
    const mainOutputDir = path.resolve('public', 'images', 'dining_raw', 'main');
    const extraOutputDir = path.resolve('public', 'images', 'dining_raw', 'extra');
    
    if (!fs.existsSync(mainOutputDir)) fs.mkdirSync(mainOutputDir, { recursive: true });
    if (!fs.existsSync(extraOutputDir)) fs.mkdirSync(extraOutputDir, { recursive: true });

    console.log('Extracting from Dining table.pdf...');
    const mainImages = await exportImages(mainPdfPath, mainOutputDir);
    console.log(`Extracted ${mainImages.length} images from main pdf.`);

    console.log('Extracting from dining tables extra.pdf...');
    const extraImages = await exportImages(extraPdfPath, extraOutputDir);
    console.log(`Extracted ${extraImages.length} images from extra pdf.`);

  } catch (err) {
    console.error('Error extracting images:', err);
  }
}

extract();
