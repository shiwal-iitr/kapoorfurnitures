import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import google from 'googlethis';
import axios from 'axios';
import { products } from '../data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/products.js');
const imagesDir = path.join(__dirname, '../public/images/products');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

let productsContent = fs.readFileSync(productsPath, 'utf8');

async function main() {
  console.log(`Starting image download for ${products.length} products...`);
  
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const imagePath = `/images/products/${p.slug}.jpg`;
    const absoluteImagePath = path.join(__dirname, `../public${imagePath}`);
    
    // Skip downloading if image already exists, but still update the code
    if (fs.existsSync(absoluteImagePath)) {
      console.log(`[${i+1}/${products.length}] Skipping ${p.name}, image already exists.`);
      updateProductContent(p, imagePath);
      continue;
    }

    console.log(`[${i+1}/${products.length}] Searching image for: ${p.name}`);
    
    try {
      // Use specific keywords to get better furniture pictures
      const query = `${p.name} furniture studio shot high quality`;
      const images = await google.image(query, { safe: false });
      
      if (images && images.length > 0) {
        let downloaded = false;
        // Try up to 3 images to bypass broken links
        for (let j = 0; j < Math.min(3, images.length); j++) {
          try {
             console.log(`  -> Downloading from: ${images[j].url.substring(0, 50)}...`);
             await downloadImage(images[j].url, absoluteImagePath);
             downloaded = true;
             console.log(`  -> Success!`);
             break;
          } catch(e) {
             console.log(`  -> Failed: ${e.message.substring(0, 40)}... trying next...`);
          }
        }
        
        if (downloaded) {
          updateProductContent(p, imagePath);
        } else {
          console.log(`  -> Failed to download any images for ${p.name}`);
        }
      } else {
        console.log(`  -> No images found for ${p.name}`);
      }
    } catch (e) {
      console.error(`  -> Search error: ${e.message}`);
    }
    
    // Wait a bit to avoid getting rate-limited
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Update products.js
  console.log('Writing updated paths to data/products.js...');
  fs.writeFileSync(productsPath, productsContent);
  console.log('Done!');
}

function updateProductContent(p, newImagePath) {
  const regex = new RegExp(`(id:\\s*'${p.id}'[\\s\\S]*?image:\\s*['"])([^'"]+)(['"])`);
  productsContent = productsContent.replace(regex, `$1${newImagePath}$3`);
}

async function downloadImage(url, filepath) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    },
    timeout: 8000
  });
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

main().catch(console.error);
