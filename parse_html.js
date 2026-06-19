const fs = require('fs');

const html = fs.readFileSync('beds.html', 'utf8');

// Find all matches for class="product-title"
const regex = /class="product-title"[^>]*>\s*<a[^>]*>(.*?)<\/a>/g;
let match;
while ((match = regex.exec(html))) {
  console.log(match[1]);
}

// Find images
const imgRegex = /<div class="product-element-top[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/g;
while ((match = imgRegex.exec(html))) {
  console.log("Image: ", match[1]);
}
