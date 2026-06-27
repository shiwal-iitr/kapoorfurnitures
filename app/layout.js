import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.kapoorfurnitures.com'),
  title: {
    default: 'Kapoor Furnitures | Premium Furniture Store in Kanpur',
    template: '%s | Kapoor Furnitures',
  },
  description:
    'Kapoor Furnitures, Kanpur — handcrafted beds, sofa sets, dining tables, wardrobes and bedroom furniture that blends timeless elegance with modern comfort. Free delivery & assembly.',
  keywords: [
    'furniture store Kanpur',
    'furniture Kanpur',
    'beds Kanpur',
    'sofa sets Kanpur',
    'dining tables',
    'wardrobes',
    'almirahs',
    'bedroom furniture',
    'premium furniture',
    'Kapoor Furnitures',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kapoor Furnitures | Premium Furniture Store in Kanpur',
    description:
      'Handcrafted beds, sofa sets, dining tables and wardrobes that blend timeless elegance with modern comfort.',
    url: 'https://www.kapoorfurnitures.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kapoor Furnitures',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kapoor Furnitures — Premium Handcrafted Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kapoor Furnitures | Premium Furniture Store in Kanpur',
    description:
      'Handcrafted beds, sofa sets, dining tables and wardrobes that blend timeless elegance with modern comfort.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '5IaqsUU9fEOsjk3vIzrxfI45zNuaBtQoLzu0z9MqdVk',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1a2e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
