'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ product }) {
  // Use gallery if available and has multiple images, otherwise fallback to main image
  const images = (product.gallery && product.gallery.length > 0) 
    ? product.gallery 
    : [product.image];
    
  const [activeIndex, setActiveIndex] = useState(0);
  


  const isBed = product.category === 'beds' || product.category === 'dining';

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
        {images[activeIndex] && images[activeIndex] !== '/images/placeholder.svg' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[activeIndex].includes('piyestraindia.com') ? `${images[activeIndex]}?v=1` : images[activeIndex]}
            alt={`${product.name} view ${activeIndex + 1}`}
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="aspect-[4/3] flex items-center justify-center">
            <span className="text-[8rem] font-serif text-gray-200 select-none leading-none">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              NEW
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc.includes('piyestraindia.com') ? `${imgSrc}?v=1` : imgSrc}
                alt={`${product.name} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
