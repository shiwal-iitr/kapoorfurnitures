export default function manifest() {
  return {
    name: 'Kapoor Furnitures | Premium Furniture Store',
    short_name: 'Kapoor Furnitures',
    description:
      'Premium handcrafted furniture in Kanpur — beds, sofas, dining sets, wardrobes and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a2e',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
