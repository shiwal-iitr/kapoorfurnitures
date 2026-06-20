export const categories = [
  { id: 'dining', name: 'Dining', description: 'Elegant and durable dining tables for your home', image: '/images/dining_raw/main/img_p1_1.png' },
  { id: 'beds', name: 'Beds', description: 'Elegant beds for restful nights', image: '/images/products/royal-teak-king-bed.jpg' },
  
  { 
    id: 'living-room', 
    name: 'Living Room', 
    description: 'Living room furniture', 
    image: '/images/sofas_raw/img_p0_1.png',
    subcategories: [
      { id: 'sofa-sets', name: 'Sofa Sets', description: 'Luxurious seating comfort', image: '/images/sofas_raw/img_p0_1.png' },
      { id: 'centre-tables', name: 'Centre Tables', description: 'Elegant centre tables', image: '/images/centre_tables_raw/img_p0_1.png' }
    ]
  },
  { 
    id: 'piyestra', 
    name: 'Piyestra', 
    description: 'Exclusive Piyestra Furniture Collection', 
    image: '/images/placeholder.svg',
    subcategories: [
      { id: 'piyestra-bedroom',
        name: 'Bedroom',
        description: 'Piyestra Bedroom Collection',
        image: 'https://piyestraindia.com/wp-content/uploads/2024/12/01-3-600x600.jpg',
        subcategories: [
          { id: 'piyestra-bedroom-beds', name: 'Beds', image: 'https://piyestraindia.com/wp-content/uploads/2024/12/01-1-600x492.jpg' },
          { id: 'piyestra-bedroom-wardrobes', name: 'Wardrobes', image: 'https://piyestraindia.com/wp-content/uploads/2024/12/01-2-600x600.jpg' }
        ] },
      { id: 'piyestra-office', name: 'Office Tables', description: 'Piyestra Office Collection', image: 'https://piyestraindia.com/wp-content/uploads/2022/08/01-600x559.jpg' },
      { id: 'piyestra-study', name: 'Study', description: 'Piyestra Study Collection', image: 'https://piyestraindia.com/wp-content/uploads/2023/05/C-1-1-600x600.jpg' },
      { id: 'piyestra-entertainment', name: 'Entertainment', description: 'Piyestra Entertainment Collection', image: 'https://piyestraindia.com/wp-content/uploads/2023/06/A-1-600x600.jpg' },
    ]
  }
];

export const products = [
  {
    id: 9200,
    name: "Elegant Centre Table 1",
    slug: "elegant-centre-table-1",
    category: "centre-tables",
    price: 8000,
    originalPrice: 10000,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p0_1.png",
    isFeatured: true,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9201,
    name: "Elegant Centre Table 2",
    slug: "elegant-centre-table-2",
    category: "centre-tables",
    price: 8500,
    originalPrice: 10500,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p1_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9204,
    name: "Elegant Centre Table 5",
    slug: "elegant-centre-table-5",
    category: "centre-tables",
    price: 10000,
    originalPrice: 12000,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p4_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9205,
    name: "Elegant Centre Table 6",
    slug: "elegant-centre-table-6",
    category: "centre-tables",
    price: 10500,
    originalPrice: 12500,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p5_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9206,
    name: "Elegant Centre Table 7",
    slug: "elegant-centre-table-7",
    category: "centre-tables",
    price: 11000,
    originalPrice: 13000,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p6_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9207,
    name: "Elegant Centre Table 8",
    slug: "elegant-centre-table-8",
    category: "centre-tables",
    price: 11500,
    originalPrice: 13500,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p7_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9209,
    name: "Elegant Centre Table 10",
    slug: "elegant-centre-table-10",
    category: "centre-tables",
    price: 12500,
    originalPrice: 14500,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p9_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9210,
    name: "Elegant Centre Table 11",
    slug: "elegant-centre-table-11",
    category: "centre-tables",
    price: 13000,
    originalPrice: 15000,
    description: "A beautiful centre table to perfectly complement your living room seating. Features a sturdy design with a premium finish.",
    features: [
      "Sturdy Construction",
      "Premium Finish",
      "Modern Design"
    ],
    dimensions: "Standard Centre Table Size",
    material: "Premium Wood / Glass",
    image: "/images/centre_tables_raw/img_p10_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 9000,
    name: "Classic Dining Table 1",
    slug: "classic-dining-table-1",
    category: "dining",
    price: 15000,
    originalPrice: 18000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p1_1.png",
    isFeatured: true,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9001,
    name: "Classic Dining Table 2",
    slug: "classic-dining-table-2",
    category: "dining",
    price: 16000,
    originalPrice: 19000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p2_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9002,
    name: "Classic Dining Table 3",
    slug: "classic-dining-table-3",
    category: "dining",
    price: 17000,
    originalPrice: 20000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p3_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9003,
    name: "Classic Dining Table 4",
    slug: "classic-dining-table-4",
    category: "dining",
    price: 18000,
    originalPrice: 21000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p4_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9004,
    name: "Classic Dining Table 5",
    slug: "classic-dining-table-5",
    category: "dining",
    price: 19000,
    originalPrice: 22000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p5_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9005,
    name: "Classic Dining Table 6",
    slug: "classic-dining-table-6",
    category: "dining",
    price: 20000,
    originalPrice: 23000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p6_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9006,
    name: "Classic Dining Table 7",
    slug: "classic-dining-table-7",
    category: "dining",
    price: 21000,
    originalPrice: 24000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p7_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9007,
    name: "Classic Dining Table 8",
    slug: "classic-dining-table-8",
    category: "dining",
    price: 22000,
    originalPrice: 25000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p8_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9008,
    name: "Classic Dining Table 9",
    slug: "classic-dining-table-9",
    category: "dining",
    price: 23000,
    originalPrice: 26000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p10_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9009,
    name: "Classic Dining Table 10",
    slug: "classic-dining-table-10",
    category: "dining",
    price: 24000,
    originalPrice: 27000,
    description: "A beautifully crafted dining table, perfect for your family meals. Designed with elegance and durability in mind.",
    features: [
      "Solid Wood Construction",
      "Spacious Tabletop",
      "Elegant Finish"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood",
    image: "/images/dining_raw/main/img_p12_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 9100,
    name: "Premium Dining Table Collection A",
    slug: "premium-dining-table-a",
    category: "dining",
    price: 25000,
    originalPrice: 30000,
    description: "A premium multi-view dining table setting that elevates any dining space. See multiple angles to appreciate its fine craftsmanship.",
    features: [
      "Premium Wood Construction",
      "Multi-angle Views Available",
      "Modern Design"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood & Glass",
    image: "/images/dining_raw/extra/img_p0_1.png",
    gallery: [
      "/images/dining_raw/extra/img_p0_1.png"
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 9101,
    name: "Premium Dining Table Collection B",
    slug: "premium-dining-table-b",
    category: "dining",
    price: 25000,
    originalPrice: 30000,
    description: "A premium multi-view dining table setting that elevates any dining space. See multiple angles to appreciate its fine craftsmanship.",
    features: [
      "Premium Wood Construction",
      "Multi-angle Views Available",
      "Modern Design"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood & Glass",
    image: "/images/dining_raw/extra/img_p1_1.png",
    gallery: [
      "/images/dining_raw/extra/img_p1_1.png"
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 9102,
    name: "Premium Dining Table Collection C",
    slug: "premium-dining-table-c",
    category: "dining",
    price: 25000,
    originalPrice: 30000,
    description: "A premium multi-view dining table setting that elevates any dining space. See multiple angles to appreciate its fine craftsmanship.",
    features: [
      "Premium Wood Construction",
      "Multi-angle Views Available",
      "Modern Design"
    ],
    dimensions: "Standard Dining Size",
    material: "Premium Wood & Glass",
    image: "/images/dining_raw/extra/img_p2_1.png",
    gallery: [
      "/images/dining_raw/extra/img_p2_1.png"
    ],
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 1,
    name: "Royal Teak King Bed",
    slug: "royal-teak-king-bed",
    category: "beds",
    price: 45999,
    originalPrice: 59999,
    description: "Crafted from premium solid teak wood, this king-sized bed exudes timeless elegance. The hand-carved headboard and sturdy slat support system ensure a luxurious and restful sleep experience every night.",
    features: [
      "Hand-carved headboard",
      "Solid teak wood construction",
      "Anti-rust hardware",
      "Built-in slat support"
    ],
    dimensions: "L 210 x W 185 x H 120 cm",
    material: "Solid Teak Wood",
    image: "/images/beds_raw/img_p0_1.png",
    isFeatured: true,
    isNew: false,
    rating: 4.7,
    reviews: 124
  },
  {
    id: 2,
    name: "Sheesham Maharaja Double Bed",
    slug: "sheesham-maharaja-double-bed",
    category: "beds",
    price: 38499,
    originalPrice: 49999,
    description: "The Maharaja Double Bed is a statement piece made from natural Sheesham wood with a rich honey finish. Its regal design and robust build make it the perfect centrepiece for your master bedroom.",
    features: [
      "Natural Sheesham wood",
      "Honey finish",
      "High weight capacity",
      "Easy assembly"
    ],
    dimensions: "L 200 x W 160 x H 110 cm",
    material: "Sheesham Wood",
    image: "/images/beds_raw/img_p1_1.png",
    isFeatured: true,
    isNew: false,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 3,
    name: "Milano Upholstered Queen Bed",
    slug: "milano-upholstered-queen-bed",
    category: "beds",
    price: 29999,
    originalPrice: 39999,
    description: "Sink into comfort with the Milano Upholstered Queen Bed featuring a plush fabric headboard and solid engineered wood frame. The contemporary design pairs beautifully with modern and minimalist interiors.",
    features: [
      "Upholstered fabric headboard",
      "Engineered wood frame",
      "Noise-free construction",
      "Modern minimalist design"
    ],
    dimensions: "L 205 x W 155 x H 105 cm",
    material: "Engineered Wood & Fabric",
    image: "/images/beds_raw/img_p2_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.3,
    reviews: 56
  },
  {
    id: 4,
    name: "Jaipur Carved Poster Bed",
    slug: "jaipur-carved-poster-bed",
    category: "beds",
    price: 72999,
    originalPrice: 84999,
    description: "Inspired by Rajasthani artistry, the Jaipur Poster Bed features intricately carved posts and a canopy frame. Hand-finished by master craftsmen, it transforms your bedroom into a royal retreat.",
    features: [
      "Four-poster canopy frame",
      "Hand-carved detailing",
      "Premium mango wood",
      "Antique walnut finish"
    ],
    dimensions: "L 215 x W 190 x H 200 cm",
    material: "Mango Wood",
    image: "/images/beds_raw/img_p3_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.8,
    reviews: 37
  },
  {
    id: 5,
    name: "Urban Storage King Bed",
    slug: "urban-storage-king-bed",
    category: "beds",
    price: 34999,
    originalPrice: 44999,
    description: "Maximise your bedroom space with the Urban Storage King Bed. Featuring hydraulic lift storage and side drawers, this bed combines practicality with contemporary style for modern Indian homes.",
    features: [
      "Hydraulic lift storage",
      "Two side drawers",
      "Laminated finish",
      "Heavy-duty gas lifts"
    ],
    dimensions: "L 210 x W 185 x H 95 cm",
    material: "Engineered Wood",
    image: "/images/beds_raw/img_p4_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.4,
    reviews: 203
  },
  {
    id: 6,
    name: "Neem Wood Single Bed",
    slug: "neem-wood-single-bed",
    category: "beds",
    price: 15499,
    originalPrice: 19999,
    description: "A sturdy and affordable single bed made from kiln-dried neem wood. Its compact form and clean lines make it ideal for children's rooms, guest rooms, or smaller living spaces.",
    features: [
      "Kiln-dried neem wood",
      "Compact design",
      "Natural wood grain",
      "Low-maintenance finish"
    ],
    dimensions: "L 195 x W 95 x H 90 cm",
    material: "Neem Wood",
    image: "/images/beds_raw/img_p5_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.1,
    reviews: 78
  },
  {
    id: 7,
    name: "Aria Metal Frame Queen Bed",
    slug: "aria-metal-frame-queen-bed",
    category: "beds",
    price: 18999,
    originalPrice: 24999,
    description: "Sleek and industrial, the Aria Metal Frame Bed is built from powder-coated iron with a matte black finish. Its minimalist profile suits loft apartments and contemporary bedroom setups perfectly.",
    features: [
      "Powder-coated iron frame",
      "Matte black finish",
      "Anti-sway support legs",
      "Minimal assembly required"
    ],
    dimensions: "L 200 x W 150 x H 100 cm",
    material: "Metal",
    image: "/images/beds_raw/img_p6_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.2,
    reviews: 134
  },
  {
    id: 8,
    name: "Walnut Finish Platform Bed",
    slug: "walnut-finish-platform-bed",
    category: "beds",
    price: 27999,
    originalPrice: 35999,
    description: "The Walnut Finish Platform Bed offers a low-profile Japanese-inspired design with a floating appearance. Built on solid engineered wood, it provides excellent mattress support without a box spring.",
    features: [
      "Low-profile platform design",
      "Floating base illusion",
      "Walnut laminate finish",
      "No box spring needed"
    ],
    dimensions: "L 200 x W 160 x H 40 cm",
    material: "Engineered Wood",
    image: "/images/beds_raw/img_p7_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 9,
    name: "Kashmiri Walnut Carved Bed",
    slug: "kashmiri-walnut-carved-bed",
    category: "beds",
    price: 84999,
    originalPrice: 99999,
    description: "A masterpiece of Kashmiri craftsmanship, this bed showcases intricate hand-carved floral motifs on premium walnut wood. Each piece is unique, making it a treasured heirloom for generations.",
    features: [
      "Hand-carved floral motifs",
      "Premium walnut wood",
      "Heirloom quality",
      "Natural lacquer finish"
    ],
    dimensions: "L 210 x W 185 x H 130 cm",
    material: "Walnut Wood",
    image: "/images/beds_raw/img_p8_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.9,
    reviews: 28
  },
  {
    id: 10,
    name: "Classic Mango Wood Double Bed",
    slug: "classic-mango-wood-double-bed",
    category: "beds",
    price: 25999,
    originalPrice: 32999,
    description: "Embrace warmth and character with this classic double bed made from sustainably sourced mango wood. The natural grain patterns give each bed a distinct personality that grows richer with age.",
    features: [
      "Sustainably sourced mango wood",
      "Natural grain patterns",
      "Teak oil finish",
      "Reinforced corner joints"
    ],
    dimensions: "L 200 x W 155 x H 105 cm",
    material: "Mango Wood",
    image: "/images/beds_raw/img_p9_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.3,
    reviews: 167
  },
  {
    id: 11,
    name: "Trundle Guest Bed",
    slug: "trundle-guest-bed",
    category: "beds",
    price: 22999,
    originalPrice: 28999,
    description: "The perfect solution for hosting guests, this trundle bed features a pull-out secondary bed that tucks neatly underneath. Finished in a warm oak tone, it blends seamlessly into any room decor.",
    features: [
      "Pull-out trundle bed",
      "Warm oak finish",
      "Sturdy caster wheels",
      "Dual-purpose design"
    ],
    dimensions: "L 200 x W 100 x H 85 cm",
    material: "Engineered Wood & Solid Wood",
    image: "/images/beds_raw/img_p10_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4,
    reviews: 91
  },
  {
    id: 12,
    name: "Rosewood Heritage Bed",
    slug: "rosewood-heritage-bed",
    category: "beds",
    price: 67999,
    originalPrice: 79999,
    description: "Handcrafted from Indian rosewood with a deep maroon polish, this heritage bed is inspired by colonial-era furniture. Its robust mortise-and-tenon joints ensure it stands the test of time.",
    features: [
      "Indian rosewood construction",
      "Mortise-and-tenon joints",
      "Deep maroon polish",
      "Colonial-era inspired design"
    ],
    dimensions: "L 210 x W 180 x H 125 cm",
    material: "Rosewood",
    image: "/images/beds_raw/img_p11_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.7,
    reviews: 52
  },
  {
    id: 13,
    name: "Bunk Bed with Ladder",
    slug: "bunk-bed-with-ladder",
    category: "beds",
    price: 24999,
    originalPrice: 31999,
    description: "A space-saving bunk bed ideal for kids and shared rooms. The upper bunk has full-length safety rails and a sturdy ladder. Built from solid rubber wood for durability and peace of mind.",
    features: [
      "Full-length safety rails",
      "Sturdy climbing ladder",
      "Rubber wood construction",
      "Can be split into two beds"
    ],
    dimensions: "L 200 x W 100 x H 160 cm",
    material: "Rubber Wood",
    image: "/images/beds_raw/img_p12_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.4,
    reviews: 113
  },
  {
    id: 14,
    name: "Diwan Cum Bed with Storage",
    slug: "diwan-cum-bed-with-storage",
    category: "beds",
    price: 19999,
    originalPrice: 25999,
    description: "This versatile diwan-cum-bed serves as a sofa by day and a comfortable single bed by night. Three spacious drawers underneath provide ample storage for linen, pillows, and seasonal items.",
    features: [
      "Day bed & night bed dual use",
      "Three storage drawers",
      "Backrest cushion included",
      "Sheesham wood frame"
    ],
    dimensions: "L 190 x W 90 x H 80 cm",
    material: "Sheesham Wood",
    image: "/images/beds_raw/img_p13_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.2,
    reviews: 176
  },
  {
    id: 15,
    name: "Rattan Cane King Bed",
    slug: "rattan-cane-king-bed",
    category: "beds",
    price: 52999,
    originalPrice: 64999,
    description: "Bring tropical elegance to your bedroom with this stunning rattan cane king bed. The woven cane headboard adds texture and warmth, while the teak frame provides unmatched structural integrity.",
    features: [
      "Woven rattan cane headboard",
      "Teak wood frame",
      "Tropical resort aesthetic",
      "Breathable natural materials"
    ],
    dimensions: "L 210 x W 185 x H 115 cm",
    material: "Teak Wood & Rattan Cane",
    image: "/images/beds_raw/img_p14_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.5,
    reviews: 34
  },
  {
    id: 16,
    name: "Leatherette Cushioned Bed",
    slug: "leatherette-cushioned-bed",
    category: "beds",
    price: 33499,
    originalPrice: 42999,
    description: "Wrapped in premium leatherette with diamond tufting, this cushioned bed adds a touch of sophistication to any bedroom. The padded frame edges protect against bumps, making it family-friendly too.",
    features: [
      "Premium leatherette upholstery",
      "Diamond-tufted headboard",
      "Padded frame edges",
      "Stain-resistant surface"
    ],
    dimensions: "L 205 x W 165 x H 100 cm",
    material: "Engineered Wood & Leatherette",
    image: "/images/beds_raw/img_p15_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 17,
    name: "Compact Folding Single Bed",
    slug: "compact-folding-single-bed",
    category: "beds",
    price: 14999,
    originalPrice: 18999,
    description: "Ideal for PG accommodations and studio apartments, this folding single bed can be stored away when not in use. The powder-coated metal frame is rust-proof and supports up to 120 kg comfortably.",
    features: [
      "Foldable space-saving design",
      "Powder-coated metal frame",
      "120 kg weight capacity",
      "Locking mechanism for safety"
    ],
    dimensions: "L 190 x W 90 x H 45 cm",
    material: "Metal",
    image: "/images/beds_raw/img_p16_1.png",
    isFeatured: false,
    isNew: false,
    rating: 3.9,
    reviews: 245
  },
  {
    id: 18,
    name: "Velvet Wingback King Bed",
    slug: "velvet-wingback-king-bed",
    category: "beds",
    price: 56999,
    originalPrice: 69999,
    description: "Make a bold statement with the Velvet Wingback King Bed. The tall, sculpted wingback headboard in rich emerald velvet creates a dramatic focal point, while the solid wood base ensures lasting durability.",
    features: [
      "Tall wingback headboard",
      "Rich emerald velvet upholstery",
      "Solid wood base",
      "Channel tufting detail"
    ],
    dimensions: "L 215 x W 190 x H 140 cm",
    material: "Solid Wood & Velvet Fabric",
    image: "/images/beds_raw/img_p17_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.6,
    reviews: 41
  },
  {
    id: 37,
    name: "Maharaja 7-Seater Sofa Set",
    slug: "maharaja-7-seater-sofa-set",
    category: "sofa-sets",
    price: 89999,
    originalPrice: 119999,
    description: "Command attention with the Maharaja 7-Seater Sofa Set, featuring a 3+2+1+1 configuration in rich maroon fabric. Hand-carved Sheesham wood arms and tufted cushions deliver unrivalled grandeur to your drawing room.",
    features: [
      "3+2+1+1 configuration",
      "Hand-carved Sheesham arms",
      "High-resilience foam",
      "Maroon premium fabric"
    ],
    dimensions: "3-seater: L 210 x W 85 x H 90 cm",
    material: "Sheesham Wood & Fabric",
    image: "/images/sofas_raw/img_p0_1.png",
    isFeatured: true,
    isNew: false,
    rating: 4.7,
    reviews: 76
  },
  {
    id: 38,
    name: "L-Shape Sectional Sofa",
    slug: "l-shape-sectional-sofa",
    category: "sofa-sets",
    price: 64999,
    originalPrice: 84999,
    description: "Designed for spacious living rooms, this L-shape sectional sofa seats up to six people comfortably. The modular sections can be rearranged, and the neutral grey fabric suits any décor palette.",
    features: [
      "Modular rearrangeable sections",
      "Seats up to 6",
      "Stain-resistant grey fabric",
      "Reversible chaise lounge"
    ],
    dimensions: "L 280 x W 180 x H 85 cm",
    material: "Engineered Wood & Fabric",
    image: "/images/sofas_raw/img_p1_1.png",
    isFeatured: true,
    isNew: false,
    rating: 4.5,
    reviews: 143
  },
  {
    id: 39,
    name: "Chesterfield 3-Seater Sofa",
    slug: "chesterfield-3-seater-sofa",
    category: "sofa-sets",
    price: 54999,
    originalPrice: 69999,
    description: "A quintessential Chesterfield sofa with deep button tufting, rolled arms, and premium leatherette upholstery in classic brown. This timeless piece adds old-world sophistication to any living space.",
    features: [
      "Deep button tufting",
      "Rolled arms design",
      "Premium brown leatherette",
      "Solid sal wood frame"
    ],
    dimensions: "L 215 x W 90 x H 80 cm",
    material: "Sal Wood & Leatherette",
    image: "/images/sofas_raw/img_p2_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: 40,
    name: "Compact 2-Seater Loveseat",
    slug: "compact-2-seater-loveseat",
    category: "sofa-sets",
    price: 20999,
    originalPrice: 27999,
    description: "Perfect for apartments and cosy reading nooks, this compact loveseat delivers maximum comfort in a small footprint. The soft teal fabric and tapered wooden legs lend it a mid-century modern vibe.",
    features: [
      "Space-saving compact design",
      "Soft teal upholstery",
      "Tapered wooden legs",
      "Removable washable covers"
    ],
    dimensions: "L 130 x W 75 x H 80 cm",
    material: "Engineered Wood & Fabric",
    image: "/images/sofas_raw/img_p3_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.2,
    reviews: 187
  },
  {
    id: 41,
    name: "Recliner Sofa Set 3+1+1",
    slug: "recliner-sofa-set-3-1-1",
    category: "sofa-sets",
    price: 94999,
    originalPrice: 119999,
    description: "Sink into pure relaxation with this 3+1+1 recliner sofa set. Each seat features an independent manual recliner mechanism with adjustable footrests. The air leather upholstery is soft, durable, and easy to clean.",
    features: [
      "Manual recliner all seats",
      "Adjustable footrests",
      "Air leather upholstery",
      "Steel recliner mechanism"
    ],
    dimensions: "3-seater: L 200 x W 95 x H 100 cm",
    material: "Metal Frame & Air Leather",
    image: "/images/sofas_raw/img_p4_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 68
  },
  {
    id: 42,
    name: "Wooden Sofa Set with Cushions",
    slug: "wooden-sofa-set-with-cushions",
    category: "sofa-sets",
    price: 35999,
    originalPrice: 45999,
    description: "A classic Indian drawing room sofa set featuring a solid mango wood frame with lattice-pattern armrests. The included cotton cushions in a cream and blue Rajasthani print add vibrant character.",
    features: [
      "Solid mango wood frame",
      "Lattice-pattern armrests",
      "Rajasthani print cushions",
      "3+1+1 configuration"
    ],
    dimensions: "3-seater: L 180 x W 70 x H 85 cm",
    material: "Mango Wood & Cotton Fabric",
    image: "/images/sofas_raw/img_p5_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 43,
    name: "Convertible Sofa Cum Bed",
    slug: "convertible-sofa-cum-bed",
    category: "sofa-sets",
    price: 27999,
    originalPrice: 36999,
    description: "The ultimate multi-functional furniture piece for small apartments. This sofa converts into a full double bed in seconds with a simple fold-down mechanism. Includes built-in storage for bedding.",
    features: [
      "Sofa to bed conversion",
      "Built-in bedding storage",
      "One-pull mechanism",
      "High-density foam mattress"
    ],
    dimensions: "Sofa: L 180 x W 85 x H 80 cm | Bed: L 180 x W 120 cm",
    material: "Engineered Wood & Fabric",
    image: "/images/sofas_raw/img_p6_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.1,
    reviews: 321
  },
  {
    id: 44,
    name: "Velvet Chaise Lounge",
    slug: "velvet-chaise-lounge",
    category: "sofa-sets",
    price: 32999,
    originalPrice: 41999,
    description: "Drape yourself in luxury on this elegant velvet chaise lounge. The gently curved silhouette, bolster pillow, and gold-finished legs create a glamorous statement perfect for bedrooms and reading corners.",
    features: [
      "Curved ergonomic silhouette",
      "Velvet upholstery",
      "Gold-finished metal legs",
      "Matching bolster pillow"
    ],
    dimensions: "L 170 x W 70 x H 85 cm",
    material: "Metal Frame & Velvet Fabric",
    image: "/images/sofas_raw/img_p7_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.4,
    reviews: 54
  },
  {
    id: 45,
    name: "Outdoor Rattan Sofa Set",
    slug: "outdoor-rattan-sofa-set",
    category: "sofa-sets",
    price: 48999,
    originalPrice: 62999,
    description: "Elevate your balcony or patio with this weather-resistant rattan sofa set. The UV-protected synthetic rattan and quick-dry cushions ensure this set looks stunning season after season, rain or shine.",
    features: [
      "Weather-resistant synthetic rattan",
      "UV-protected weave",
      "Quick-dry cushions",
      "Powder-coated aluminium frame"
    ],
    dimensions: "Set includes: 2-seater, 2 chairs, 1 coffee table",
    material: "Synthetic Rattan & Aluminium",
    image: "/images/sofas_raw/img_p8_1.png",
    isFeatured: false,
    isNew: true,
    rating: 4.3,
    reviews: 39
  },
  {
    id: 46,
    name: "Scandinavian 3-Seater Sofa",
    slug: "scandinavian-3-seater-sofa",
    category: "sofa-sets",
    price: 38999,
    originalPrice: 49999,
    description: "Clean lines, natural oak legs, and a soft linen-blend fabric define this Scandinavian-inspired sofa. The pocket-spring seat cushions provide superior support while maintaining the effortlessly modern look.",
    features: [
      "Natural oak wood legs",
      "Pocket-spring cushions",
      "Linen-blend fabric",
      "Detachable armrests"
    ],
    dimensions: "L 200 x W 85 x H 82 cm",
    material: "Oak Wood & Linen Blend",
    image: "/images/sofas_raw/img_p9_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.5,
    reviews: 116
  },
  {
    id: 47,
    name: "Traditional Diwan Sofa",
    slug: "traditional-diwan-sofa",
    category: "sofa-sets",
    price: 24999,
    originalPrice: 31999,
    description: "A beautifully crafted traditional Indian diwan with a Sheesham wood frame and hand-tied jute webbing. The thick cotton mattress and matching bolsters make it perfect for festive gatherings and daily lounging.",
    features: [
      "Sheesham wood frame",
      "Hand-tied jute webbing",
      "Cotton mattress included",
      "Two matching bolsters"
    ],
    dimensions: "L 185 x W 80 x H 65 cm",
    material: "Sheesham Wood & Cotton",
    image: "/images/sofas_raw/img_p10_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.2,
    reviews: 189
  },
  {
    id: 48,
    name: "Luxury Italian Leather Sofa Set",
    slug: "luxury-italian-leather-sofa-set",
    category: "sofa-sets",
    price: 119999,
    originalPrice: 149999,
    description: "Indulge in the finest Italian top-grain leather with this premium 3+2 sofa set. The chrome-plated steel base, power-adjustable headrests, and memory foam cushions redefine what luxury seating means.",
    features: [
      "Italian top-grain leather",
      "Power-adjustable headrests",
      "Memory foam cushions",
      "Chrome-plated steel base"
    ],
    dimensions: "3-seater: L 220 x W 95 x H 90 cm",
    material: "Italian Leather & Steel",
    image: "/images/sofas_raw/img_p11_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.9,
    reviews: 22
  },
  {
    id: 49,
    name: "Futon Sofa with Armrests",
    slug: "futon-sofa-with-armrests",
    category: "sofa-sets",
    price: 21999,
    originalPrice: 27999,
    description: "A versatile futon sofa with three adjustable positions: upright, reclined, and fully flat. The sturdy metal frame and thick padded seat make it equally comfortable as a sofa or an impromptu guest bed.",
    features: [
      "Three adjustable positions",
      "Sturdy metal frame",
      "Thick padded seat",
      "Faux linen upholstery"
    ],
    dimensions: "L 175 x W 80 x H 82 cm",
    material: "Metal & Faux Linen",
    image: "/images/sofas_raw/img_p12_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4,
    reviews: 256
  },
  {
    id: 50,
    name: "Teak Sofa Set with Storage",
    slug: "teak-sofa-set-with-storage",
    category: "sofa-sets",
    price: 56999,
    originalPrice: 72999,
    description: "This elegant teak sofa set features lift-up seat cushions revealing spacious storage compartments beneath. The 3+1+1 set comes with plush, removable cushion covers in a sophisticated beige linen.",
    features: [
      "Under-seat storage",
      "Lift-up cushion mechanism",
      "Solid teak wood frame",
      "Removable cushion covers"
    ],
    dimensions: "3-seater: L 195 x W 80 x H 85 cm",
    material: "Solid Teak Wood & Linen",
    image: "/images/sofas_raw/img_p13_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.6,
    reviews: 83
  },
  {
    id: 51,
    name: "Kids' Mini Sofa Set",
    slug: "kids-mini-sofa-set",
    category: "sofa-sets",
    price: 12999,
    originalPrice: 16999,
    description: "Designed just for little ones, this adorable mini sofa set features child-safe rounded corners, easy-clean leatherette, and a lightweight frame that kids can move themselves. Available in fun candy colours.",
    features: [
      "Child-safe rounded corners",
      "Easy-clean leatherette",
      "Lightweight frame",
      "Fun candy colour options"
    ],
    dimensions: "2-seater: L 80 x W 45 x H 50 cm",
    material: "Pine Wood & Leatherette",
    image: "/images/sofas_raw/img_p14_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.3,
    reviews: 145
  },
  {
    id: 52,
    name: "Modular Floor Seating Set",
    slug: "modular-floor-seating-set",
    category: "sofa-sets",
    price: 28999,
    originalPrice: 37999,
    description: "Embrace the Indian tradition of floor seating with this modular set of six cushioned sections. Arrange them in any configuration for a casual, bohemian living room that encourages conversation and togetherness.",
    features: [
      "Six modular floor sections",
      "High-density foam filling",
      "Washable cotton covers",
      "Bohemian embroidered design"
    ],
    dimensions: "Each section: L 60 x W 60 x H 30 cm",
    material: "Cotton Fabric & Foam",
    image: "/images/sofas_raw/img_p15_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.4,
    reviews: 97
  },
  {
    id: 53,
    name: "Office Reception Sofa",
    slug: "office-reception-sofa",
    category: "sofa-sets",
    price: 34999,
    originalPrice: 44999,
    description: "Make a lasting first impression with this sleek office reception sofa. The clean geometric lines, black leatherette finish, and chrome legs project professionalism and comfort for visiting clients.",
    features: [
      "Professional geometric design",
      "Black leatherette finish",
      "Chrome-plated legs",
      "High-density moulded foam"
    ],
    dimensions: "L 180 x W 75 x H 78 cm",
    material: "Leatherette & Chrome Metal",
    image: "/images/sofas_raw/img_p16_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.1,
    reviews: 72
  },
  {
    id: 54,
    name: "Luxe Curved Boucle Sofa",
    slug: "luxe-curved-boucle-sofa",
    category: "sofa-sets",
    price: 74999,
    originalPrice: 94999,
    description: "A contemporary showstopper, the Luxe Curved Boucle Sofa features a dramatic crescent silhouette wrapped in plush ivory boucle fabric. Its sculptural form makes it the ultimate centrepiece for modern homes.",
    features: [
      "Dramatic crescent shape",
      "Plush ivory boucle fabric",
      "Sculptural centrepiece design",
      "Kiln-dried hardwood frame"
    ],
    dimensions: "L 240 x W 100 x H 78 cm",
    material: "Hardwood & Boucle Fabric",
    image: "/images/sofas_raw/img_p17_1.png",
    isFeatured: false,
    isNew: false,
    rating: 4.7,
    reviews: 31
  },
  {
    id: 450059,
    name: "EXECUTIVE TABLE",
    slug: "executive-table-450059",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/01-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 34
  },
  {
    id: 441995,
    name: "EXECUTIVE TABLE",
    slug: "executive-table-441995",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/03-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 41
  },
  {
    id: 339270,
    name: "OFFICE TABLE",
    slug: "office-table-339270",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/02-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 19
  },
  {
    id: 360532,
    name: "OFFICE TABLE",
    slug: "office-table-360532",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/05-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 40
  },
  {
    id: 479214,
    name: "OFFICE TABLE",
    slug: "office-table-479214",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/01-3-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 45
  },
  {
    id: 170464,
    name: "OFFICE TABLE",
    slug: "office-table-170464",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/WT-01-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 54
  },
  {
    id: 752073,
    name: "OFFICE TABLE",
    slug: "office-table-752073",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/7-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 46
  },
  {
    id: 428762,
    name: "OFFICE TABLE",
    slug: "office-table-428762",
    category: "piyestra-office",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your office with a neatly tailored office furniture design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/WT-07-600x559.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 18
  },
  {
    id: 986353,
    name: "COMPUTER TABLE",
    slug: "computer-table-986353",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/C-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 30
  },
  {
    id: 413325,
    name: "COMPUTER TABLE",
    slug: "computer-table-413325",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/B-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 57
  },
  {
    id: 144820,
    name: "COMPUTER TABLE",
    slug: "computer-table-144820",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/A-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 58
  },
  {
    id: 144852,
    name: "STUDY DESK",
    slug: "study-desk-144852",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/F-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 31
  },
  {
    id: 803299,
    name: "STUDY DESK",
    slug: "study-desk-803299",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/D-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 29
  },
  {
    id: 18700,
    name: "STUDY DESK",
    slug: "study-desk-18700",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/09/01-3-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 47
  },
  {
    id: 971394,
    name: "STUDY DESK",
    slug: "study-desk-971394",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/09/01-5-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 37
  },
  {
    id: 915727,
    name: "STUDY DESK",
    slug: "study-desk-915727",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/09/01-6-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 56
  },
  {
    id: 375500,
    name: "TYPIST CHAIR",
    slug: "typist-chair-375500",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/PRD86-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 50
  },
  {
    id: 829054,
    name: "TYPIST CHAIR",
    slug: "typist-chair-829054",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/PRD151-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 49
  },
  {
    id: 107234,
    name: "STUDY DESK",
    slug: "study-desk-107234",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/G-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 14
  },
  {
    id: 523105,
    name: "STUDY DESK",
    slug: "study-desk-523105",
    category: "piyestra-study",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your study area with a neatly tailored study desk design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/E-1-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 38
  },
  {
    id: 517482,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-517482",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/A-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 20
  },
  {
    id: 433159,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-433159",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/B-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 34
  },
  {
    id: 198414,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-198414",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/C-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 20
  },
  {
    id: 248286,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-248286",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/F-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 40
  },
  {
    id: 196446,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-196446",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/E-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 56
  },
  {
    id: 499891,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-499891",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2023/06/H-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 23
  },
  {
    id: 576022,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-576022",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-6-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 26
  },
  {
    id: 280358,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-280358",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-7-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 53
  },
  {
    id: 920435,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-920435",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-8-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 11
  },
  {
    id: 45322,
    name: "AUDIO/VIDEO RACK",
    slug: "audio-video-rack-45322",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-9-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 304146,
    name: "AUDIO/VIDEO RACK (Copy)",
    slug: "audio-video-rack-copy-304146",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2024/09/01-13-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 49
  },
  {
    id: 46722,
    name: "AVA WALL UNIT",
    slug: "ava-wall-unit-46722",
    category: "piyestra-entertainment",
    price: 50,
    originalPrice: 60,
    description: "Introduce a charming attraction to your entertainment space with a neatly tailored TV unit design. The minimalistic creation developed using the finest materials and contrastive colors will bring a fascinating presentation to your living space.",
    features: [
      "Premium Material Construction",
      "Minimalistic & Elegant Design",
      "Durable & Long-lasting",
      "Easy to Maintain"
    ],
    dimensions: "Standard Fits",
    material: "Premium Quality Wood & Fabric",
    image: "https://piyestraindia.com/wp-content/uploads/2022/08/B-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 36
  },
  {
    id: 400000,
    name: "ATHENA HYDRAULIC KING BED",
    slug: "athena-hydraulic-king-bed-400001",
    category: "piyestra-bedroom-beds",
    price: 22448,
    originalPrice: 27448,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/12/01-1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 6
  },
  {
    id: 400001,
    name: "ATHENA HYDRAULIC QUEEN BED",
    slug: "athena-hydraulic-queen-bed-400002",
    category: "piyestra-bedroom-beds",
    price: 21417,
    originalPrice: 26417,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/12/01-1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 38
  },
  {
    id: 400002,
    name: "AUSTIN HYDRAULIC KING BED",
    slug: "austin-hydraulic-king-bed-400003",
    category: "piyestra-bedroom-beds",
    price: 32369,
    originalPrice: 37369,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/1-2-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 6
  },
  {
    id: 400003,
    name: "AUSTIN HYDRAULIC KING BED",
    slug: "austin-hydraulic-king-bed-400004",
    category: "piyestra-bedroom-beds",
    price: 32749,
    originalPrice: 37749,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-19-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 20
  },
  {
    id: 400004,
    name: "AUSTIN HYDRAULIC QUEEN BED",
    slug: "austin-hydraulic-queen-bed-400005",
    category: "piyestra-bedroom-beds",
    price: 33869,
    originalPrice: 38869,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/1-2-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 29
  },
  {
    id: 400005,
    name: "AUSTIN HYDRAULIC QUEEN BED",
    slug: "austin-hydraulic-queen-bed-400006",
    category: "piyestra-bedroom-beds",
    price: 28627,
    originalPrice: 33627,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-19-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 36
  },
  {
    id: 400006,
    name: "AUSTIN KING BED",
    slug: "austin-king-bed-400007",
    category: "piyestra-bedroom-beds",
    price: 29070,
    originalPrice: 34070,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 49
  },
  {
    id: 400007,
    name: "AUSTIN KING BED",
    slug: "austin-king-bed-400008",
    category: "piyestra-bedroom-beds",
    price: 31824,
    originalPrice: 36824,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 42
  },
  {
    id: 400008,
    name: "AUSTIN QUEEN BED",
    slug: "austin-queen-bed-400009",
    category: "piyestra-bedroom-beds",
    price: 20442,
    originalPrice: 25442,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 29
  },
  {
    id: 400009,
    name: "AUSTIN QUEEN BED",
    slug: "austin-queen-bed-400010",
    category: "piyestra-bedroom-beds",
    price: 16840,
    originalPrice: 21840,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 25
  },
  {
    id: 400010,
    name: "AVON HYDRAULIC KING BED",
    slug: "avon-hydraulic-king-bed-400011",
    category: "piyestra-bedroom-beds",
    price: 24200,
    originalPrice: 29200,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2022/11/PKBAV-007-1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 8
  },
  {
    id: 400011,
    name: "AVON HYDRAULIC QUEEN BED",
    slug: "avon-hydraulic-queen-bed-400012",
    category: "piyestra-bedroom-beds",
    price: 18851,
    originalPrice: 23851,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2022/11/PKBAV-007-1-600x492.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 53
  },
  {
    id: 400012,
    name: "ATHENA 2 DOOR SLIDING WARDROBE",
    slug: "athena-2-door-sliding-wardrobe-400013",
    category: "piyestra-bedroom-wardrobes",
    price: 32477,
    originalPrice: 37477,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/12/01-2-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 43
  },
  {
    id: 400013,
    name: "AUSTIN 2 DOOR WARDROBE",
    slug: "austin-2-door-wardrobe-400014",
    category: "piyestra-bedroom-wardrobes",
    price: 23511,
    originalPrice: 28511,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/2D-A-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 48
  },
  {
    id: 400014,
    name: "AUSTIN 2 DOOR WARDROBE",
    slug: "austin-2-door-wardrobe-400015",
    category: "piyestra-bedroom-wardrobes",
    price: 26865,
    originalPrice: 31865,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-3-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 47
  },
  {
    id: 400015,
    name: "AUSTIN 3 DOOR WARDROBE",
    slug: "austin-3-door-wardrobe-400016",
    category: "piyestra-bedroom-wardrobes",
    price: 26621,
    originalPrice: 31621,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/3d-A-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 24
  },
  {
    id: 400016,
    name: "AUSTIN 3 DOOR WARDROBE",
    slug: "austin-3-door-wardrobe-400017",
    category: "piyestra-bedroom-wardrobes",
    price: 19615,
    originalPrice: 24615,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-4-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 42
  },
  {
    id: 400017,
    name: "AVON 4 DOOR WARDROBE",
    slug: "avon-4-door-wardrobe-400018",
    category: "piyestra-bedroom-wardrobes",
    price: 23764,
    originalPrice: 28764,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/12/PKWAV-004-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 54
  },
  {
    id: 400018,
    name: "CAIRO 3 DOOR WARDROBE",
    slug: "cairo-3-door-wardrobe-400019",
    category: "piyestra-bedroom-wardrobes",
    price: 16153,
    originalPrice: 21153,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/01/1.1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 400019,
    name: "GEORGIA 3 DOOR WARDROBE",
    slug: "georgia-3-door-wardrobe-400020",
    category: "piyestra-bedroom-wardrobes",
    price: 17464,
    originalPrice: 22464,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2025/01/01-2-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 25
  },
  {
    id: 400020,
    name: "LIBERTY 4 DOOR WARDROBE",
    slug: "liberty-4-door-wardrobe-400021",
    category: "piyestra-bedroom-wardrobes",
    price: 34943,
    originalPrice: 39943,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/10/01-6-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 34
  },
  {
    id: 400021,
    name: "MONZA 3 DOOR WARDROBE",
    slug: "monza-3-door-wardrobe-400022",
    category: "piyestra-bedroom-wardrobes",
    price: 19086,
    originalPrice: 24086,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2025/08/01-1-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 29
  },
  {
    id: 400022,
    name: "NIPPY 3 DOOR WARDROBE",
    slug: "nippy-3-door-wardrobe-400023",
    category: "piyestra-bedroom-wardrobes",
    price: 16844,
    originalPrice: 21844,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2024/02/01-15-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 23
  },
  {
    id: 400023,
    name: "NIPPY 4 DOOR WARDROBE",
    slug: "nippy-4-door-wardrobe-400024",
    category: "piyestra-bedroom-wardrobes",
    price: 19838,
    originalPrice: 24838,
    description: "Enhance your bedroom with this exquisitely designed Piyestra furniture piece, blending functionality with premium aesthetics.",
    features: [
      "Premium Build Quality",
      "Modern Design",
      "Durable Materials"
    ],
    dimensions: "Standard Size",
    material: "Premium Engineered Wood",
    image: "https://piyestraindia.com/wp-content/uploads/2023/05/PKWNI-004-2-600x600.jpg",
    isFeatured: false,
    isNew: true,
    rating: 4.5,
    reviews: 26
  }
];

// ========================
//  HELPER FUNCTIONS
// ========================

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) || null;
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getRelatedProducts(productId, limit = 4) {
  const currentProduct = products.find((product) => product.id === productId);
  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== productId
    )
    .slice(0, limit);
}
