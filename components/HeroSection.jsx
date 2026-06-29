'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Wooden Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: "url('/images/wood-bg.png')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a96e]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-[#0f3460]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#c9a96e]/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#16213e]/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-10 right-10 w-32 h-32 border border-[#c9a96e]/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/5 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '25s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
        >
          Elevate Your{' '}
          <span className="text-[#c9a96e]">Living Space</span>
        </h1>

        {/* Decorative gold divider */}
        <div
          className="flex items-center justify-center gap-4 my-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a96e]" />
          <div className="w-2 h-2 bg-[#c9a96e] rounded-full" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a96e]" />
        </div>

        {/* Subheading */}
        <p
          className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]"
        >
          Discover handcrafted furniture that blends timeless elegance with modern comfort. Transform every room into a masterpiece.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-4 mt-[72px] sm:mt-12 px-4 sm:px-0 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.1s_forwards]"
        >
          <Link
            href="/products"
            className="inline-block text-center w-auto bg-[#c9a96e] text-[#1a1a2e] font-semibold px-8 sm:px-16 py-2.5 sm:py-4 rounded text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#c9a96e]/25"
          >
            Explore Collection
          </Link>
          <Link
            href="/contact"
            className="inline-block text-center w-auto border-2 border-[#c9a96e] text-[#c9a96e] bg-transparent font-semibold px-8 sm:px-16 py-2.5 sm:py-4 rounded text-base sm:text-lg whitespace-nowrap hover:bg-[#c9a96e]/10 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button 
        onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group bg-transparent border-none outline-none"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest group-hover:text-[#c9a96e] transition-colors">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#c9a96e]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

    </section>
  );
}
