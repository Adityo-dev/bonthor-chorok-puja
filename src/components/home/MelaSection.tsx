'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MelaSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-[#0d0b0a] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from PeopleSection (#120d0a to #0d0b0a) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#120d0a] to-transparent pointer-events-none z-0"></div>

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
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 07</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">মহোৎসব · ০৭</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-[64px] text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            চড়ক প্রাঙ্গণের<br />
            <span className="font-bold">বার্ষিক মহোৎসব</span>
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              আরাধনা, জনসমাগম ও লোকঐতিহ্যের মিলনে মুখরিত এক পবিত্র প্রাঙ্গণ
            </p>
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
          </div>
          
          <p className="font-bengali text-[#e6dfd5]/70 text-lg font-light leading-relaxed max-w-3xl text-center">
            চৈত্রের অন্তিম লগ্নে বোঁথড়ের এই পবিত্র প্রাঙ্গণ কেবল আরাধনার মধ্যে সীমাবদ্ধ থাকে না; বরং এটি অগণিত ভক্ত ও সাধারণ মানুষের এক মহাসম্মেলনে পরিণত হয়। লোকজ সংস্কৃতির এই মিলনমেলায় উৎসবের আবহে একত্রিত হয় আপামর জনসাধারণ।
          </p>
        </motion.div>

        {/* =========================================
            EDITORIAL PHOTOGRAPHY LAYOUT
            ========================================= */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Main Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full lg:w-[85%] aspect-[16/9] md:aspect-[21/9] bg-[#050505] overflow-hidden group mb-8 md:mb-16"
          >
            <div className="absolute inset-0 border border-[#a65d37]/20 z-20 pointer-events-none"></div>
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 5, ease: "easeOut" }}
              src="/mela-2.jpg" 
              alt="Bonthor Charak Mela Main View"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[10%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.8)] z-10 pointer-events-none"></div>
            
            {/* Subtle Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
              <span className="font-bengali text-4xl md:text-7xl font-black tracking-widest text-white drop-shadow-2xl">
                এক রাত্রি অসংখ্য স্মৃতি
              </span>
            </div>

            {/* Main Image Metadata */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-col opacity-70">
              <span className="font-bengali text-[11px] tracking-widest text-[#a65d37] mb-1">চিত্র · চড়ক প্রাঙ্গণ</span>
              <span className="font-serif text-[9px] tracking-[0.2em] text-[#e6dfd5]/70 uppercase">Wide Capture</span>
            </div>
          </motion.div>

          {/* Secondary Editorial Images (Asymmetric) */}
          <div className="w-full lg:w-[85%] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16">
            
            {/* Left Small Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="relative w-full md:w-[45%] aspect-[4/3] bg-[#050505] overflow-hidden group"
            >
              <div className="absolute inset-0 border border-[#a65d37]/10 z-20 pointer-events-none"></div>
              <img 
                src="/mela-1.jpg" 
                alt="Festival Crowd"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute top-4 right-4 z-20 opacity-50">
                 <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]">জনসমাগম</span>
              </div>
            </motion.div>

            {/* Right Small Image (Slightly Offset) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="relative w-full md:w-[35%] aspect-square bg-[#050505] overflow-hidden group md:-mt-24"
            >
              <div className="absolute inset-0 border border-[#a65d37]/10 z-20 pointer-events-none"></div>
              <img 
                src="/mela-3.jpg" 
                alt="Village Atmosphere"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute bottom-4 left-4 z-20 opacity-50">
                 <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]">চৈত্র · বোঁথড়</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================
            BOTTOM: CTA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-[#e6dfd5]/10 flex justify-center"
        >
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              মহোৎসবের সম্পূর্ণ চিত্রশালা দর্শন করুন
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
