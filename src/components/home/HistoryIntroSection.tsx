'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HistoryIntroSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-[#0d0a0a] overflow-hidden text-[#e6dfd5]">
      
      {/* 
        Background Transition:
        Gradually blending from the deep black (#050505) of the Hero 
        into a slightly warmer, aged charcoal/paper tone (#0d0a0a).
      */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0"></div>
      
      {/* Subtle aged paper / museum texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* =========================================
              LEFT: EDITORIAL TYPOGRAPHY
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            {/* Archival Label */}
            <div className="flex flex-col mb-12 opacity-60">
              <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 01</span>
              <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">ইতিবৃত্ত · ০১</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
              <span className="font-bengali text-[#a65d37] text-[13px] tracking-widest font-medium">
                এক জীবন্ত ঐতিহ্যের ইতিবৃত্ত
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-bengali text-4xl md:text-5xl lg:text-[56px] text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
              কালপরম্পরায়<br />
              <span className="font-bold text-[#e6dfd5]">বোঁথড়ের চড়ক</span>
            </h2>

            {/* Literary Paragraph (Sadhu Bengali) */}
            <p className="font-bengali text-[#e6dfd5]/70 text-lg md:text-xl font-light leading-relaxed mb-12">
              কালের গহ্বরে যখন বহু স্মৃতি বিলীন হইয়া যায়, বোঁথড় তখনো জাগিয়া থাকে তাহার আপন মহিমায়। শ্রুতি ও প্রামাণ্য ইতিহাস সাক্ষ্য দেয়, এই পুণ্যভূমিতে চড়ক আরাধনার সূচনা ঘটিয়াছিল বহু শতক পূর্বে। প্রজন্ম হইতে প্রজন্মান্তরে, পিতাপুত্রের হাত ধরিয়া এই রুদ্র উপাসনা আজও অমলিন—ইহা কেবল একটি প্রথা নহে, ইহা এক বহমান ভক্তির নদী।
            </p>

            {/* Subtle Metadata Badges */}
            <div className="flex flex-wrap gap-4 mb-16">
              {['পরম্পরা', 'বংশানুক্রম', 'চৈত্র', 'চড়কচক্র'].map((tag, i) => (
                <span key={i} className="font-bengali text-[11px] tracking-widest text-[#e6dfd5]/40 uppercase border border-[#e6dfd5]/10 px-3 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Elegant CTA */}
            <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
              <span className="font-bengali text-[#e6dfd5] text-[16px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
                সম্পূর্ণ ইতিবৃত্ত অবগত হউন
              </span>
              <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 font-serif">
                →
              </span>
            </Link>
          </motion.div>


          {/* =========================================
              RIGHT: ARCHIVAL IMAGE
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-7/12 relative mt-12 lg:mt-0"
          >
            {/* The Image Container */}
            <div className="relative aspect-[4/3] md:aspect-[3/2] w-full group overflow-hidden bg-[#050505]">
              {/* Thin Copper Frame */}
              <div className="absolute inset-0 border border-[#a65d37]/20 z-20 pointer-events-none"></div>
              
              {/* Subtle inner shadow/vignette for archival depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(5,5,5,0.8)] z-10 pointer-events-none"></div>

              {/* The Image (Slight scale effect on reveal) */}
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeOut" }}
                src="/history-1.jpg" 
                alt="Historical Bonthor Charak Puja"
                className="w-full h-full object-cover opacity-75 mix-blend-luminosity grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </div>

            {/* Archival Image Metadata */}
            <div className="absolute -bottom-8 right-0 md:-right-6 md:bottom-auto md:top-12 flex flex-col items-end md:items-start opacity-70">
              <span className="font-bengali text-[11px] tracking-widest text-[#a65d37] mb-1">সংরক্ষিত চিত্র · বোঁথড়</span>
              <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]/50">আনুমানিক কাল: —</span>
            </div>
            
            <div className="absolute top-4 left-4 z-20 mix-blend-difference opacity-50">
               <span className="font-serif text-[10px] tracking-[0.4em] text-white uppercase">Historical Record</span>
            </div>

          </motion.div>

        </div>

        {/* =========================================
            BOTTOM: TIMELINE PREVIEW
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-32 pt-12 border-t border-[#e6dfd5]/10 flex flex-col items-center"
        >
          <div className="flex items-center gap-6 font-bengali text-[12px] tracking-widest text-[#e6dfd5]/50">
            <span className="hover:text-[#a65d37] transition-colors cursor-pointer">অতীত</span>
            <span className="text-[#a65d37]/50 font-serif">→</span>
            <span className="text-[#e6dfd5] font-medium drop-shadow-md">পরম্পরা</span>
            <span className="text-[#a65d37]/50 font-serif">→</span>
            <span className="hover:text-[#a65d37] transition-colors cursor-pointer">বর্তমান</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
