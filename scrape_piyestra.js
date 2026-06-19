const fs = require('fs');
const https = require('https');

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
};

const extractProducts = (html, categoryName) => {
  const products = [];
  
  // The products start after '<div class="product-grid-item'
  const blocks = html.split('<div class="product-grid-item');
  
  // Skip the first split since it's before the first product
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    
    // Extract title
    const titleMatch = block.match(/<h3 class="product-title"><a href="[^"]+">(.*?)<\/a><\/h3>/);
    if (!titleMatch) continue;
    let name = titleMatch[1].trim();
    
    // Extract image
    const imgMatch = block.match(/<img[^>]*src="([^"]+)"[^>]*>/);
    let image = imgMatch ? imgMatch[1] : '';
    
    // Extract price
    let price = 15000;
    const priceMatch = block.match(/<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">[^<]+<\/span>&nbsp;([\d,]+)<\/bdi><\/span>/);
    if (priceMatch) {
       price = parseInt(priceMatch[1].replace(/,/g, ''), 10);
    }
    
    if (name && image) {
      products.push({
        id: Math.floor(Math.random() * 1000000),
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        category: categoryName,
        price: price,
        originalPrice: Math.floor(price * 1.2),
        description: `Premium ${name} from Piyestra Collection, offering modern design and durability.`,
        features: ['Premium Quality', 'Modern Design', 'Durable Construction'],
        dimensions: 'Standard',
        material: 'Engineered Wood',
        image: image,
        isFeatured: false,
        isNew: true,
        rating: 4.5,
        reviews: Math.floor(Math.random() * 50) + 10,
      });
    }
  }
  return products;
};

async function scrape() {
  const categories = [
    { name: 'piyestra-bedroom', url: 'https://piyestraindia.com/product-category/bedroom/' },
    { name: 'piyestra-office', url: 'https://piyestraindia.com/product-category/office/office-tables/' },
    { name: 'piyestra-study', url: 'https://piyestraindia.com/product-category/study/' },
    { name: 'piyestra-entertainment', url: 'https://piyestraindia.com/product-category/entertainment/tv-unit/' }
  ];
  
  let allProducts = [];
  
  for (const cat of categories) {
    console.log(`Fetching ${cat.url}...`);
    try {
      const html = await fetchHtml(cat.url);
      const products = extractProducts(html, cat.name);
      console.log(`Found ${products.length} products for ${cat.name}`);
      allProducts = allProducts.concat(products);
    } catch (e) {
      console.error(`Error fetching ${cat.url}:`, e.message);
    }
  }
  
  fs.writeFileSync('d:/summer project/websites/kapoor-furnitures/data/scraped_products.json', JSON.stringify(allProducts, null, 2));
  console.log('Saved to scraped_products.json');
}

scrape();
