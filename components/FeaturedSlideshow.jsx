'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { products } from '../data/products';

const SLIDE_CATEGORIES = [
  { id: 'bedroom-beds', label: 'Beds', href: '/products?category=bedroom-beds' },
  { id: '3-1-1-sofas', label: '3-1-1 Sofas', href: '/products?category=3-1-1-sofas' },
  { id: '3-2-2-sofas', label: '3-2-2 Sofas', href: '/products?category=3-2-2-sofas' },
  { id: 'l-shape-sofas', label: 'L-Shape Sofas', href: '/products?category=l-shape-sofas' },
  { id: 'centre-tables', label: 'Centre Tables', href: '/products?category=centre-tables' },
  { id: 'dining', label: 'Dining', href: '/products?category=dining' },
  { id: 'marble-top', label: 'Marble Top Dining', href: '/products?category=marble-top' },
  { id: 'bedroom-chairs', label: 'Chairs', href: '/products?category=chairs' },
  { id: 'sofa-cum-bed', label: 'Sofa Cum Bed', href: '/products?category=sofa-cum-bed' },
  { id: 'deewan-cum-bed', label: 'Deewan Cum Bed', href: '/products?category=deewan-cum-bed' },
  { id: 'piyestra-bedroom-beds', label: 'Piyestra Bedroom', href: '/products?category=piyestra-bedroom-beds' },
  { id: 'piyestra-office', label: 'Piyestra Office', href: '/products?category=piyestra-office' },
  { id: 'piyestra-study', label: 'Study', href: '/products?category=piyestra-study' },
];

function pickProduct(catId) {
  return (
    products.find((p) => p.category === catId && p.isFeatured) ||
    products.find((p) => p.category === catId) ||
    null
  );
}

export default function FeaturedSlideshow() {
  const slides = SLIDE_CATEGORIES.map((c) => {
    const p = pickProduct(c.id);
    return p ? { ...c, product: p } : null;
  }).filter(Boolean);

  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  if (slides.length === 0) return null;

  return (
    <section className="bg-transparent">
      <div className="container-custom text-center pt-16 md:pt-20 pb-8 md:pb-12">
        <h2 className="section-heading">Featured Collection</h2>
        <div className="gold-line" />
        <p className="section-subheading">Handpicked pieces that define luxury and comfort</p>
      </div>

      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden bg-black">
        {slides.map((s, i) => (
          <Link
            key={s.id}
            href={s.href}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={i !== idx}
            tabIndex={i === idx ? 0 : -1}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.product.image || '/images/placeholder.svg'}
              alt={s.product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading={i === idx ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 sm:px-12 pb-20 md:pb-24 text-center">
              <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3">
                {s.label}
              </p>
              <h3 className="text-white font-serif text-3xl sm:text-5xl md:text-6xl drop-shadow-lg">
                {s.product.name}
              </h3>
            </div>
          </Link>
        ))}

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black shadow-md transition-colors"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black shadow-md transition-colors"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? 'w-8 bg-[#c9a96e]' : 'w-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-[72px] md:mt-20 mb-16">
        <Link
          href="/products"
          className="inline-block px-16 py-4 bg-black text-white font-semibold rounded hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
