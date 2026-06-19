const https = require('https');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseProducts(html, category) {
  const products = [];
  // The structure is usually <li class="...product...">...<img src="...">...<h2 class="woocommerce-loop-product__title">Name</h2>...<span class="price">...</span>
  // We'll use regex to extract them
  const regex = /<li\s+class="[^"]*product[^"]*".*?>[\s\S]*?<img\s+width="[^"]*"\s+height="[^"]*"\s+src="([^"]+)"[\s\S]*?<h2\s+class="woocommerce-loop-product__title">([^<]+)<\/h2>[\s\S]*?<span\s+class="price">([\s\S]*?)<\/span>/g;
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    const image = match[1];
    const name = match[2].trim();
    const priceHtml = match[3];
    
    // Extract price
    let price = 0;
    const priceMatch = priceHtml.match(/<bdi>.*?;([\d,]+)/);
    if (priceMatch) {
      price = parseInt(priceMatch[1].replace(/,/g, ''), 10);
    }
    
    products.push({
      name,
      image,
      price,
      category
    });
  }
  return products;
}

async function run() {
  console.log("Fetching beds...");
  const bedsHtml = await fetchHTML('https://piyestraindia.com/product-category/bedroom/beds/');
  const beds = parseProducts(bedsHtml, 'piyestra-bedroom-beds');
  
  console.log("Fetching wardrobes...");
  const wardrobesHtml = await fetchHTML('https://piyestraindia.com/product-category/bedroom/wardrobes/');
  const wardrobes = parseProducts(wardrobesHtml, 'piyestra-bedroom-wardrobes');
  
  console.log(JSON.stringify({ beds: beds.length, wardrobes: wardrobes.length }, null, 2));
  fs.writeFileSync('scraped_products.json', JSON.stringify([...beds, ...wardrobes], null, 2));
}

const fs = require('fs');
run();
