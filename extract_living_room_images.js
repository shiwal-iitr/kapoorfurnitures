const fs = require('fs');
const path = require('path');
const { exportImages } = require('pdf-export-images');

async function extract() {
  try {
    const sofasPdfPath = path.resolve('sofas.pdf');
    const centreTablesPdfPath = path.resolve('centre tables.pdf');
    
    const sofasOutputDir = path.resolve('public', 'images', 'sofas_raw');
    const centreTablesOutputDir = path.resolve('public', 'images', 'centre_tables_raw');
    
    if (!fs.existsSync(sofasOutputDir)) fs.mkdirSync(sofasOutputDir, { recursive: true });
    if (!fs.existsSync(centreTablesOutputDir)) fs.mkdirSync(centreTablesOutputDir, { recursive: true });

    console.log('Extracting from sofas.pdf...');
    const sofasImages = await exportImages(sofasPdfPath, sofasOutputDir);
    console.log(`Extracted ${sofasImages.length} images from sofas pdf.`);

    console.log('Extracting from centre tables.pdf...');
    const centreTablesImages = await exportImages(centreTablesPdfPath, centreTablesOutputDir);
    console.log(`Extracted ${centreTablesImages.length} images from centre tables pdf.`);

  } catch (err) {
    console.error('Error extracting images:', err);
  }
}

extract();
