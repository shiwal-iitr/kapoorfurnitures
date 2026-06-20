const fs = require('fs');

// Sofa sets from the PDF - mapping user's 1-based page numbers to 0-based filenames
// [1-3] -> p0,p1,p2 | [5-8] -> p4,p5,p6,p7 | [9-10] -> p8,p9 | 11 -> p10 |
// [12-14] -> p11,p12,p13 | 15 -> p14 | 16 -> p15 | 17 -> p16 | 18 -> p17 |
// [19-20] -> p18,p19 | [21-22] -> p20,p21 | [23-24] -> p22,p23 | [25-27] -> p24,p25,p26 | [28-29] -> p27,p28

const sofaSets = [
  {
    id: 8100,
    name: "Sofa Set 1",
    slug: "sofa-set-1",
    category: "sofa-sets",
    description: "A premium sofa set crafted for comfort and elegance. Perfect centerpiece for your living room with superior cushioning and durable fabric.",
    features: ["Premium Upholstery", "High-Density Foam Cushions", "Solid Wood Frame", "Stain-Resistant Fabric"],
    dimensions: "3+1+1 Configuration",
    material: "Fabric / Solid Wood",
    image: "/images/sofas_raw/img_p0_1.png",
    gallery: [
      "/images/sofas_raw/img_p0_1.png",
      "/images/sofas_raw/img_p1_1.png",
      "/images/sofas_raw/img_p2_1.png"
    ],
    isFeatured: true,
    isNew: false,
    rating: 4.7,
    reviews: 24
  },
  {
    id: 8101,
    name: "Sofa Set 2",
    slug: "sofa-set-2",
    category: "sofa-sets",
    description: "A luxurious multi-piece sofa set designed for large living spaces. Combines comfort with classic design elements for a sophisticated look.",
    features: ["Premium Upholstery", "Multi-Seater Configuration", "Solid Wood Frame", "Deep Seat Cushions"],
    dimensions: "L-Shape / Sectional",
    material: "Fabric / Solid Wood",
    image: "/images/sofas_raw/img_p4_1.png",
    gallery: [
      "/images/sofas_raw/img_p4_1.png",
      "/images/sofas_raw/img_p5_1.png",
      "/images/sofas_raw/img_p6_1.png",
      "/images/sofas_raw/img_p7_1.png"
    ],
    isFeatured: true,
    isNew: false,
    rating: 4.6,
    reviews: 18
  },
  {
    id: 8102,
    name: "Sofa Set 3",
    slug: "sofa-set-3",
    category: "sofa-sets",
    description: "An elegant sofa set with a contemporary design. Features premium fabric upholstery and a sturdy wooden frame for long-lasting comfort.",
    features: ["Contemporary Design", "Premium Fabric", "Wooden Frame", "Comfortable Armrests"],
    dimensions: "3-Seater + 2-Seater",
    material: "Fabric / Solid Wood",
    image: "/images/sofas_raw/img_p8_1.png",
    gallery: [
      "/images/sofas_raw/img_p8_1.png",
      "/images/sofas_raw/img_p9_1.png"
    ],
    isFeatured: false,
    isNew: false,
    rating: 4.5,
    reviews: 15
  },
  {
    id: 8103,
    name: "Sofa Set 4",
    slug: "sofa-set-4",
    category: "sofa-sets",
    description: "A beautifully crafted sofa set that blends traditional and modern aesthetics. Offers exceptional comfort and durability for everyday use.",
    features: ["Traditional-Modern Design", "High-Quality Foam", "Durable Frame", "Easy Maintenance"],
    dimensions: "Standard 3+1+1",
    material: "Fabric / Wood",
    image: "/images/sofas_raw/img_p10_1.png",
    gallery: ["/images/sofas_raw/img_p10_1.png"],
    isFeatured: false,
    isNew: false,
    rating: 4.4,
    reviews: 12
  },
  {
    id: 8104,
    name: "Sofa Set 5",
    slug: "sofa-set-5",
    category: "sofa-sets",
    description: "A stylish and spacious sofa set ideal for families. Features plush cushioning and a rich fabric finish that adds warmth to your living room.",
    features: ["Plush Cushioning", "Rich Fabric Finish", "Family-Sized", "Sturdy Construction"],
    dimensions: "7-Seater Configuration",
    material: "Fabric / Teak Wood",
    image: "/images/sofas_raw/img_p11_1.png",
    gallery: [
      "/images/sofas_raw/img_p11_1.png",
      "/images/sofas_raw/img_p12_1.png",
      "/images/sofas_raw/img_p13_1.png"
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 32
  },
  {
    id: 8105,
    name: "Sofa Set 6",
    slug: "sofa-set-6",
    category: "sofa-sets",
    description: "A compact yet comfortable sofa set perfect for apartments and smaller living spaces. Elegant design with premium upholstery.",
    features: ["Compact Design", "Premium Upholstery", "Space-Saving", "Modern Aesthetics"],
    dimensions: "3-Seater Compact",
    material: "Velvet / Wood",
    image: "/images/sofas_raw/img_p14_1.png",
    gallery: ["/images/sofas_raw/img_p14_1.png"],
    isFeatured: false,
    isNew: false,
    rating: 4.5,
    reviews: 20
  },
  {
    id: 8106,
    name: "Sofa Set 7",
    slug: "sofa-set-7",
    category: "sofa-sets",
    description: "A premium sectional sofa with a contemporary design. Ideal for modern living rooms offering abundant seating with style.",
    features: ["Sectional Design", "Contemporary Look", "Premium Foam Filling", "Easy Assembly"],
    dimensions: "L-Shape Sectional",
    material: "Leatherette / Wood",
    image: "/images/sofas_raw/img_p15_1.png",
    gallery: ["/images/sofas_raw/img_p15_1.png"],
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 16
  },
  {
    id: 8107,
    name: "Sofa Set 8",
    slug: "sofa-set-8",
    category: "sofa-sets",
    description: "An exquisite sofa set featuring hand-crafted details and superior comfort. A statement piece for your living room.",
    features: ["Hand-Crafted Details", "Superior Comfort", "Statement Design", "Premium Materials"],
    dimensions: "5-Seater",
    material: "Fabric / Sheesham Wood",
    image: "/images/sofas_raw/img_p16_1.png",
    gallery: ["/images/sofas_raw/img_p16_1.png"],
    isFeatured: false,
    isNew: false,
    rating: 4.7,
    reviews: 28
  },
  {
    id: 8108,
    name: "Sofa Set 9",
    slug: "sofa-set-9",
    category: "sofa-sets",
    description: "A royal and majestic sofa set with intricate carvings and plush upholstery. Brings a touch of grandeur to your home.",
    features: ["Intricate Carvings", "Plush Upholstery", "Majestic Design", "Durable Frame"],
    dimensions: "7-Seater Royal",
    material: "Silk Fabric / Teak Wood",
    image: "/images/sofas_raw/img_p17_1.png",
    gallery: ["/images/sofas_raw/img_p17_1.png"],
    isFeatured: true,
    isNew: false,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 8109,
    name: "Sofa Set 10",
    slug: "sofa-set-10",
    category: "sofa-sets",
    description: "A modern and sleek sofa set with clean lines and minimalist design. Perfect for contemporary interiors.",
    features: ["Minimalist Design", "Clean Lines", "Modern Aesthetic", "Quality Fabric"],
    dimensions: "3+2 Configuration",
    material: "Fabric / Metal Frame",
    image: "/images/sofas_raw/img_p18_1.png",
    gallery: [
      "/images/sofas_raw/img_p18_1.png",
      "/images/sofas_raw/img_p19_1.png"
    ],
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 19
  },
  {
    id: 8110,
    name: "Sofa Set 11",
    slug: "sofa-set-11",
    category: "sofa-sets",
    description: "A versatile sofa set suitable for both formal and casual settings. Features high-density foam and premium fabric for lasting comfort.",
    features: ["Versatile Design", "High-Density Foam", "Premium Fabric", "Formal & Casual"],
    dimensions: "5-Seater",
    material: "Fabric / Solid Wood",
    image: "/images/sofas_raw/img_p20_1.png",
    gallery: [
      "/images/sofas_raw/img_p20_1.png",
      "/images/sofas_raw/img_p21_1.png"
    ],
    isFeatured: false,
    isNew: false,
    rating: 4.6,
    reviews: 22
  },
  {
    id: 8111,
    name: "Sofa Set 12",
    slug: "sofa-set-12",
    category: "sofa-sets",
    description: "A chic and stylish sofa set with distinctive design elements. The perfect blend of comfort and contemporary style.",
    features: ["Distinctive Design", "Contemporary Style", "Comfortable Seating", "Quality Construction"],
    dimensions: "3+1+1",
    material: "Velvet / Wood",
    image: "/images/sofas_raw/img_p22_1.png",
    gallery: [
      "/images/sofas_raw/img_p22_1.png",
      "/images/sofas_raw/img_p23_1.png"
    ],
    isFeatured: false,
    isNew: false,
    rating: 4.7,
    reviews: 17
  },
  {
    id: 8112,
    name: "Sofa Set 13",
    slug: "sofa-set-13",
    category: "sofa-sets",
    description: "A grand and luxurious sofa set that commands attention. Superior craftsmanship with premium materials for an unforgettable living room.",
    features: ["Grand Design", "Superior Craftsmanship", "Premium Materials", "Long-Lasting"],
    dimensions: "7-Seater Grand",
    material: "Premium Fabric / Teak",
    image: "/images/sofas_raw/img_p24_1.png",
    gallery: [
      "/images/sofas_raw/img_p24_1.png",
      "/images/sofas_raw/img_p25_1.png",
      "/images/sofas_raw/img_p26_1.png"
    ],
    isFeatured: true,
    isNew: false,
    rating: 4.8,
    reviews: 38
  },
  {
    id: 8113,
    name: "Sofa Set 14",
    slug: "sofa-set-14",
    category: "sofa-sets",
    description: "A sophisticated sofa set featuring elegant detailing and superior comfort. Ideal for those who appreciate fine craftsmanship.",
    features: ["Elegant Detailing", "Fine Craftsmanship", "Superior Comfort", "Timeless Design"],
    dimensions: "5-Seater",
    material: "Fabric / Sheesham Wood",
    image: "/images/sofas_raw/img_p27_1.png",
    gallery: [
      "/images/sofas_raw/img_p27_1.png",
      "/images/sofas_raw/img_p28_1.png"
    ],
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 21
  }
];

// Read the current products file
const dataFile = 'data/products.js';
let content = fs.readFileSync(dataFile, 'utf8');

// Use node to get the current products (non-sofa-sets)
const { products } = require('./data/products.js');
const nonSofaProducts = products.filter(p => p.category !== 'sofa-sets');
const allProducts = [...nonSofaProducts, ...sofaSets];

// Rebuild products array as a JSON string
const productsStr = JSON.stringify(allProducts, null, 2);

// Find and replace the products array in the file
const startMarker = 'export const products = [';
const endMarker = '];\n\n// ========================';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newContent = content.slice(0, startIdx) +
    'export const products = ' + productsStr + ';\n\n// ========================' +
    content.slice(endIdx + endMarker.length);
  fs.writeFileSync(dataFile, newContent);
  console.log('Successfully updated sofa sets:', sofaSets.length, 'sofa sets');
  console.log('Total products:', allProducts.length);
} else {
  console.error('Could not find markers in products.js');
}
