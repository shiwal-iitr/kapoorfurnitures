'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ product }) {
  // Use gallery if available and has multiple images, otherwise fallback to main image
  const images = (product.gallery && product.gallery.length > 0) 
    ? product.gallery 
    : [product.image];
    
  const [activeIndex, setActiveIndex] = useState(0);
  
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center relative border border-gray-100">
        {images[activeIndex] && images[activeIndex] !== '/images/placeholder.svg' ? (
          <Image
            src={images[activeIndex]}
            alt={`${product.name} view ${activeIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <>
            <span className="text-[12rem] font-serif text-gray-200 select-none leading-none">
              {product.name.charAt(0)}
            </span>
            <div className="absolute bottom-8 right-8 text-6xl opacity-20">
              {product.category === 'beds' ? '🛏️' : product.category === 'almirahs' ? '🚪' : '🛋️'}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Thumbnails Gallery */}
      {images.length > 1 && (
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                activeIndex === idx 
                  ? 'border-[#c9a96e] scale-105' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${product.name} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
