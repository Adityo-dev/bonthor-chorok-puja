'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-40 bg-[#060505] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from Location (#0a0807 to #060505) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0807] to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* =========================================
            HEADER AREA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-24 md:mb-32"
        >
          {/* Archival Label */}
          <div className="flex flex-col items-center mb-8 opacity-70">
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 12</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">দৃশ্যস্মৃতি · ১২</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-[64px] text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            চড়কের<br />
            <span className="font-bold">দৃশ্যস্মৃতি</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              আলোকচিত্র ও চলমান দৃশ্যে সংরক্ষিত বোঁথড়ের চড়ক পূজার কিছু স্মরণীয় মুহূর্ত
            </p>
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
          </div>
        </motion.div>

        {/* =========================================
            PHOTO ESSAY LAYOUT
            ========================================= */}
        <div className="flex flex-col gap-24 md:gap-40 w-full">
          
          {/* 1. FEATURED VISUAL (VIDEO) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full flex flex-col group relative"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-[#030202] overflow-hidden border border-[#a65d37]/10">
              <video 
                src="/gallery-vid.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[10%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(3,2,2,0.8)] z-10 pointer-events-none"></div>
            </div>
            
            {/* Metadata below image */}
            <div className="flex justify-between items-start mt-4 opacity-60 px-2">
              <div className="flex flex-col">
                <span className="font-bengali text-[12px] text-[#e6dfd5] tracking-widest mb-1">চড়ক প্রাঙ্গণ</span>
                <span className="font-serif text-[9px] text-[#a65d37] tracking-[0.2em] uppercase">দৃশ্য · ০১</span>
              </div>
              <span className="font-bengali text-[10px] text-[#e6dfd5]/50 tracking-widest text-right">বোঁথড় · চাটমোহর · পাবনা</span>
            </div>
          </motion.div>

          {/* EDITORIAL PAUSE */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <span className="font-bengali text-2xl md:text-3xl font-light text-[#e6dfd5]/40 italic tracking-widest">একটি মুহূর্ত</span>
          </motion.div>

          {/* 2. ASYMMETRIC DUAL LAYOUT */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 w-full px-0 lg:px-24">
            
            {/* Left Image (Portrait) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full md:w-5/12 flex flex-col group relative"
            >
              <div className="relative w-full aspect-[3/4] bg-[#030202] overflow-hidden border border-[#a65d37]/10">
                <img 
                  src="/charak-tree.jpg" 
                  alt="Charak Tree"
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 sepia-[15%]"
                />
              </div>
              <div className="flex justify-between items-start mt-4 opacity-60 px-2">
                <div className="flex flex-col">
                  <span className="font-bengali text-[12px] text-[#e6dfd5] tracking-widest mb-1">চড়কগাছ</span>
                  <span className="font-serif text-[9px] text-[#a65d37] tracking-[0.2em] uppercase">দৃশ্য · ০২</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image (Square, Offset) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="w-[80%] md:w-4/12 flex flex-col group relative md:-mt-32 self-end md:self-auto"
            >
              <div className="relative w-full aspect-square bg-[#030202] overflow-hidden border border-[#a65d37]/10">
                <img 
                  src="/gallery-1.jpg" 
                  alt="Ritual Moments"
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 sepia-[10%]"
                />
              </div>
              <div className="flex justify-between items-start mt-4 opacity-60 px-2">
                <div className="flex flex-col">
                  <span className="font-bengali text-[12px] text-[#e6dfd5] tracking-widest mb-1">আরাধনার মুহূর্ত</span>
                  <span className="font-serif text-[9px] text-[#a65d37] tracking-[0.2em] uppercase">দৃশ্য · ০৩</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EDITORIAL PAUSE */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <span className="font-bengali text-2xl md:text-3xl font-light text-[#e6dfd5]/40 italic tracking-widest">একটি স্মৃতি</span>
          </motion.div>

          {/* 3. WIDE CINEMATIC SHOT */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[90%] md:w-[75%] mx-auto flex flex-col group relative"
          >
            <div className="relative w-full aspect-[16/9] bg-[#030202] overflow-hidden border border-[#a65d37]/10">
              <img 
                src="/mela-1.jpg" 
                alt="Festival Crowd"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(3,2,2,0.8)] z-10 pointer-events-none"></div>
            </div>
            
            <div className="flex justify-between items-start mt-4 opacity-60 px-2">
              <div className="flex flex-col">
                <span className="font-bengali text-[12px] text-[#e6dfd5] tracking-widest mb-1">ভক্তসমাগম</span>
                <span className="font-serif text-[9px] text-[#a65d37] tracking-[0.2em] uppercase">দৃশ্য · ০৪</span>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* =========================================
            BOTTOM: CTA & ARCHIVE INDEX
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-32 pt-12 border-t border-[#e6dfd5]/10 flex flex-col items-center justify-center gap-8"
        >
          <span className="font-serif text-[10px] tracking-[0.4em] text-[#a65d37]/60 uppercase">
            Archive / 12
          </span>
          
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              সম্পূর্ণ দৃশ্যস্মৃতি দর্শন করুন
            </span>
            <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 font-serif text-lg">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
