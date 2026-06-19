const fs = require('fs');

const filePath = 'data/products.js';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find all product objects
// We will parse the array using eval to safely modify and serialize back, 
// but since it's a JS file with exports, it's safer to use regex to replace descriptions.

const categoriesMap = {
  'piyestra-bedroom': { room: 'bedroom', item: 'bedroom design' },
  'sofa-sets': { room: 'living room', item: 'sofa design' },
  'piyestra-office': { room: 'office', item: 'office furniture design' },
  'piyestra-study': { room: 'study area', item: 'study desk design' },
  'piyestra-entertainment': { room: 'entertainment space', item: 'TV unit design' }
};

// We will do a regex replacement on description: "...", features: [...], etc.
// But it's tricky to do regex on nested objects.
// Let's use a simpler regex that matches the whole object block for a Piyestra product.

let newContent = content.replace(/(\{\s*id:\s*\d+,\s*name:\s*"[^"]+",\s*slug:\s*"[^"]+",\s*category:\s*'([^']+)'[\s\S]*?\})/g, (match, p1, category) => {
  if (categoriesMap[category]) {
    const { room, item } = categoriesMap[category];
    
    // Create new description
    const newDesc = `Introduce a charming attraction to your ${room} with a neatly tailored ${item}. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.`;
    
    // Replace old description
    let updated = p1.replace(/description:\s*"[^"]*",?/, `description: "${newDesc}",`);
    
    // Replace old features
    updated = updated.replace(/features:\s*\[[^\]]*\],?/, `features: ["Premium Material Construction", "Minimalistic & Elegant Design", "Durable & Long-lasting", "Easy to Maintain"],`);
    
    // Replace old material
    updated = updated.replace(/material:\s*'[^']+',?/, `material: 'Premium Quality Wood & Fabric',`);
    
    // Replace old dimensions
    updated = updated.replace(/dimensions:\s*'[^']+',?/, `dimensions: 'Standard Fits',`);

    return updated;
  }
  return match;
});

fs.writeFileSync(filePath, newContent);
console.log('Descriptions updated successfully.');
