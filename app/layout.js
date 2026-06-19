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
  title: {
    default: 'Kapoor Furnitures | Premium Furniture Store',
    template: '%s | Kapoor Furnitures',
  },
  description:
    'Discover handcrafted furniture that blends timeless elegance with modern comfort. Premium beds, almirahs, and sofa sets for your dream home.',
  keywords: [
    'furniture',
    'beds',
    'almirahs',
    'sofa sets',
    'premium furniture',
    'home decor',
    'furniture store',
  ],
  openGraph: {
    title: 'Kapoor Furnitures | Premium Furniture Store',
    description:
      'Discover handcrafted furniture that blends timeless elegance with modern comfort.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kapoor Furnitures',
  },
  robots: {
    index: true,
    follow: true,
  },
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
