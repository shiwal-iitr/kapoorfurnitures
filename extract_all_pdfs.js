const fs = require('fs');
const path = require('path');
const { exportImages } = require('pdf-export-images');

async function extract() {
  const pdfs = [
    { name: 'beds extra.pdf', out: 'beds_extra_raw' },
    { name: 'bedroom chairs.pdf', out: 'bedroom_chairs_raw' },
    { name: 'marble top dining.pdf', out: 'marble_top_dining_raw' },
    { name: 'L shape sofa extra.pdf', out: 'l_shape_sofa_extra_raw' },
    { name: '3-1-1 SOFAS.pdf', out: '3_1_1_sofas_raw' }
  ];

  for (const pdf of pdfs) {
    try {
      const pdfPath = path.resolve(pdf.name);
      if (!fs.existsSync(pdfPath)) {
        console.log(`Skipping ${pdf.name}, not found.`);
        continue;
      }
      const outputDir = path.resolve('public', 'images', pdf.out);
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

      console.log(`Extracting from ${pdf.name} to ${pdf.out}...`);
      const images = await exportImages(pdfPath, outputDir);
      console.log(`Extracted ${images.length} images from ${pdf.name}.`);
    } catch (err) {
      console.error(`Error extracting images from ${pdf.name}:`, err);
    }
  }
}

extract();
