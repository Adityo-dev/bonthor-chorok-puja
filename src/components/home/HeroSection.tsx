'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// -------------------------------------------------------------
// Sub-components for clean architecture as requested
// -------------------------------------------------------------

function HeroVideo() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5, ease: "easeOut" }}
      className="absolute inset-0 z-[1]"
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/hero-poster.jpg"
        className="w-full h-[100vh] object-cover object-center"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* 
        Subtle Cinematic Treatment:
        - We do NOT cover the video entirely with black.
        - We use a left-sided gradient to naturally create a dark reading area for the asymmetric text.
        - A very subtle vignette around the edges.
        - A slight warm firelight glow from the bottom.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent w-full md:w-[65%]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.6)_100%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      
      {/* Very subtle warm firelight hint in the reading area */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[10%] w-[40vw] h-[40vw] bg-[#d95c14]/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />
    </motion.div>
  );
}

function HeroMetadata() {
  return (
    <>
      {/* Top Right Archive Details */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute top-32 right-8 md:right-12 hidden lg:flex flex-col items-end gap-2 z-20 pointer-events-none"
      >
        <span className="font-serif text-[10px] tracking-[0.3em] text-[#e6dfd5]/40 uppercase">Archive / 01</span>
        <span className="font-serif text-[10px] tracking-[0.3em] text-[#e6dfd5]/40 uppercase">Charak Puja</span>
        <div className="w-px h-8 bg-[#a65d37]/40 mt-1"></div>
      </motion.div>

      {/* Vertical Living Heritage Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 2 }}
        className="absolute top-1/2 right-12 hidden lg:flex items-center z-20 pointer-events-none origin-right -rotate-90"
      >
        <div className="w-16 h-px bg-[#a65d37]/40 mr-4"></div>
        <span className="font-serif text-[9px] tracking-[0.4em] text-[#e6dfd5]/30 uppercase whitespace-nowrap">
          The Living Heritage of Bonthor
        </span>
      </motion.div>
    </>
  );
}

function HeroActions() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 4, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 mt-12"
    >
      {/* Primary Action - Elegant editorial link */}
      <Link href="#" className="group relative flex items-center gap-4 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
        <span className="font-bengali text-[#e6dfd5] text-[16px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
          ইতিহাস অবগত হউন
        </span>
        <span className="text-[#a65d37] group-hover:translate-x-1.5 transition-transform duration-700 font-serif text-sm">→</span>
      </Link>

      {/* Secondary Action - Understated */}
      <Link href="#" className="group relative flex items-center gap-3">
        <span className="font-bengali text-[#e6dfd5]/50 text-[14px] tracking-widest transition-colors duration-500 group-hover:text-[#e6dfd5]">
          আচার-পদ্ধতি দর্শন করুন
        </span>
        <div className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#e6dfd5]/30 group-hover:w-full transition-all duration-700 ease-out"></div>
      </Link>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5, duration: 2 }}
      className="absolute bottom-8 left-6 md:left-12 lg:left-[calc(5%+1.5rem)] z-30 flex flex-col items-start gap-4 pointer-events-none"
    >
      <span className="font-bengali text-[11px] tracking-widest text-[#a65d37]/80 uppercase">
        আরও অবগত হউন
      </span>
      <div className="w-[1px] h-12 bg-[#e6dfd5]/10 overflow-hidden relative ml-[40px]">
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-[50%] bg-[#a65d37]/80 absolute top-0 left-0"
        />
      </div>
    </motion.div>
  );
}

function HeroContent() {
  return (
    <div className="relative z-30 container mx-auto px-6 md:px-12 w-full pt-32 pb-24 min-h-screen flex flex-col justify-center pointer-events-none">
      <div className="flex flex-col items-start w-full md:w-[70%] lg:w-[60%] pointer-events-auto">
        
        {/* Eyebrow (SMALL) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
          <span className="font-bengali text-[#e6dfd5]/70 text-[12px] md:text-[13px] tracking-widest font-medium">
            শতাব্দী প্রাচীন আধ্যাত্মিক ঐতিহ্য
          </span>
        </motion.div>

        {/* Titles (VERY LARGE) */}
        <div className="mb-8 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
            className="font-bengali text-4xl md:text-5xl lg:text-6xl text-[#e6dfd5]/90 font-light leading-[1.1] tracking-tight mb-2"
          >
            বোঁথড়ের
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-bengali text-6xl md:text-7xl lg:text-[110px] text-[#e6dfd5] font-bold leading-[1] tracking-tighter drop-shadow-2xl"
          >
            চড়ক পূজা
          </motion.h1>
        </div>

        {/* Poetic Description (MEDIUM) */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
          className="font-bengali text-[#e6dfd5]/80 text-lg md:text-[22px] font-light leading-relaxed max-w-xl mb-8 drop-shadow-md"
        >
          চৈত্রের অন্তিম প্রহরে, রুদ্র আরাধনা ও চড়কচক্রের আবর্তনে জাগ্রত এক প্রাচীন পরম্পরা।
        </motion.p>

        {/* Location (SMALL) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
        >
           <p className="font-bengali text-[12px] md:text-[13px] tracking-[0.2em] text-[#a65d37] uppercase">
            বোঁথড় · চাটমোহর · পাবনা · বাংলাদেশ
          </p>
        </motion.div>

        <HeroActions />

      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Main Hero Section Component
// -------------------------------------------------------------

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] min-h-[750px] bg-[#050505] overflow-hidden">
      
      {/* Deep Black Base */}
      <div className="absolute inset-0 bg-[#050505] z-0"></div>

      {/* 1. BACKGROUND LAYER */}
      <HeroVideo />

      {/* 2. MIDDLE LAYER: TYPOGRAPHY & COMPOSITION */}
      <HeroContent />
      <HeroMetadata />
      <ScrollIndicator />

    </section>
  );
}
