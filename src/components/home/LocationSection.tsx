'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-[#0a0807] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from Timeline (#0c0908 to #0a0807) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0c0908] to-transparent pointer-events-none z-0"></div>

      {/* Subtle Earthy Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* =========================================
            HEADER AREA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          {/* Archival Label */}
          <div className="flex flex-col items-center mb-8 opacity-70">
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 11</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">স্থান · ১১</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-[64px] text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            যে মাটিতে<br />
            <span className="font-bold">চড়ক আজও জীবন্ত</span>
          </h2>
          
          <div className="flex items-center gap-4 mb-10">
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              বোঁথড়ের মাটি, মানুষ ও প্রাঙ্গণের সঙ্গে অঙ্গাঙ্গিভাবে জড়িয়ে আছে এই ঐতিহ্য
            </p>
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
          </div>
          
          <p className="font-bengali text-[#e6dfd5]/70 text-lg font-light leading-relaxed max-w-3xl text-center">
            একটি ঐতিহ্য কেবল মানুষের স্মৃতি ও আচারেই বাঁচিয়া থাকে না; তাহার সহিত জড়াইয়া থাকে একটি নির্দিষ্ট মাটি, একটি পবিত্র প্রাঙ্গণ এবং একটি সম্পূর্ণ জনপদ। এই দীর্ঘ কালপরম্পরা বোঁথড় গ্রামের মাটির রন্ধ্রে রন্ধ্রে সুরক্ষিত।
          </p>

          <div className="mt-8 flex gap-4 font-serif text-[9px] md:text-[11px] tracking-[0.3em] text-[#e6dfd5]/50 uppercase">
            <span>Bonthor</span>
            <span className="text-[#a65d37]">•</span>
            <span>Chatmohar</span>
            <span className="text-[#a65d37]">•</span>
            <span>Pabna</span>
          </div>
        </motion.div>

        {/* =========================================
            PANORAMIC EDITORIAL LAYOUT
            ========================================= */}
        <div className="relative w-full flex flex-col">
          
          {/* Large Panoramic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#050505] overflow-hidden group mb-12 md:mb-0"
          >
            <div className="absolute inset-0 border border-[#a65d37]/20 z-20 pointer-events-none"></div>
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 5, ease: "easeOut" }}
              src="/location-1.jpg" 
              alt="Bonthor Charak Puja Location"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            
            {/* Soft dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/90 via-[#0a0807]/20 to-transparent z-10 pointer-events-none"></div>
            
            {/* Natural Negative Space Text */}
            <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 flex flex-col z-20">
              <span className="font-bengali text-3xl md:text-5xl font-light text-[#e6dfd5] tracking-wide mb-2 opacity-90 drop-shadow-lg">
                স্থানই স্মৃতির প্রথম সাক্ষী
              </span>
              <span className="font-bengali text-sm md:text-base text-[#a65d37] tracking-widest">
                ঐতিহ্যবাহী বোঁথড় জনপদ
              </span>
            </div>
          </motion.div>

          {/* Asymmetric Secondary Visual (Overlapping on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="relative w-full md:w-1/3 lg:w-1/4 aspect-square bg-[#050505] overflow-hidden md:absolute md:-bottom-16 md:right-12 lg:right-24 border-4 border-[#0a0807] group"
          >
            <div className="absolute inset-0 border border-[#a65d37]/10 z-20 pointer-events-none"></div>
            <img 
              src="/location-2.jpg" 
              alt="Bonthor Village Atmosphere"
              className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 sepia-[10%]"
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="font-serif text-[8px] tracking-[0.2em] text-[#e6dfd5]/70 uppercase">
                Environment
              </span>
            </div>
          </motion.div>

        </div>

        {/* =========================================
            BOTTOM: CTA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-24 md:mt-40 pt-12 border-t border-[#e6dfd5]/10 flex justify-center"
        >
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              বোঁথড়ের প্রাঙ্গণ সম্পর্কে অবগত হউন
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
