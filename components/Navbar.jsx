'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white/90 backdrop-blur-xl border-b border-gray-100 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 ml-[20px] md:ml-0 flex items-center gap-3">
              <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#D4AF37]/40 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                <img 
                  src="/images/logo.png" 
                  alt="Kapoor Furnitures Logo" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-3xl font-serif tracking-wide leading-none pb-1" style={{
                  background: 'linear-gradient(to bottom right, #F8E5A3, #D4AF37, #AA7C11)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600
                }}>
                  Kapoor Furnitures
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-medium text-[#c9a96e]">
                    Premium Living Since 2000
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm uppercase tracking-widest transition-colors duration-300 pb-1 ${
                      isActive
                        ? 'text-black border-b-2 border-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] z-[110]"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[95] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl uppercase tracking-widest transition-colors duration-300 ${
                  isActive
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer to offset fixed navbar */}
      <div className="h-20" />
    </>
  );
}
