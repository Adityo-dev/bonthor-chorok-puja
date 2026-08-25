'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PeopleSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-[#120d0a] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from Charak Tree (#0a0a0a to #120d0a) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-0"></div>

      {/* Subtle Warm Texture (Aged Parchment feel in dark mode) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* =========================================
              LEFT: EDITORIAL TYPOGRAPHY & STORY
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            {/* Archival Label */}
            <div className="flex flex-col mb-10 opacity-70">
              <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 06</span>
              <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">পরম্পরা · ০৬</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
              বংশপরম্পরায়<br />
              <span className="font-bold">অর্পিত উত্তরদায়িত্ব</span>
            </h2>
            
            {/* Supporting Line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#a65d37]/80"></span>
              <p className="font-bengali text-[#a65d37] text-[13px] md:text-[15px] tracking-widest font-medium leading-relaxed">
                মানুষের স্মৃতি, সাধনা ও নিবেদনের মধ্য দিয়ে বহমান এক জীবন্ত ঐতিহ্য
              </p>
            </div>
            
            {/* Literary Paragraph (Sadhu Bengali) */}
            <p className="font-bengali text-[#e6dfd5]/70 text-lg font-light leading-relaxed mb-12">
              একটি ঐতিহ্য কেবল আচার ও স্থাপনার মাধ্যমে বাঁচিয়া থাকে না; মানুষের বংশপরম্পরা, দায়িত্ব, স্মৃতি ও নিবেদনের মধ্য দিয়েই তাহা প্রজন্ম হইতে প্রজন্মে বহমান থাকে। লোকস্মৃতি ও সংরক্ষিত তথ্য অনুযায়ী, বোঁথড়ের এই চড়ক আরাধনায় ১৩ জন মূল সন্ন্যাসী ও রাজ সন্ন্যাসীর পবিত্র উত্তরদায়িত্ব একটি অবিচ্ছিন্ন কালপরম্পরা রচনা করিয়াছে।
            </p>

            {/* Subtle Lineage Indicator */}
            <div className="flex flex-col gap-3 mb-16 opacity-60">
              <span className="font-bengali text-[12px] tracking-widest text-[#a65d37]">প্রাচীন প্রজন্ম</span>
              <span className="font-serif text-[10px] text-[#e6dfd5]/40 ml-4">↓</span>
              <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">পরবর্তী প্রজন্ম</span>
              <span className="font-serif text-[10px] text-[#e6dfd5]/40 ml-4">↓</span>
              <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">বর্তমান প্রজন্ম</span>
            </div>

            {/* Elegant CTA */}
            <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
              <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
                পরম্পরার সঙ্গে যুক্ত ব্যক্তিবর্গ অবগত হউন
              </span>
              <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 font-serif text-lg">
                →
              </span>
            </Link>
          </motion.div>


          {/* =========================================
              RIGHT: ARCHIVAL PHOTOGRAPHY
              ========================================= */}
          <div className="w-full lg:w-7/12 relative flex flex-col md:flex-row items-end gap-6 mt-12 lg:mt-0">
            
            {/* Main Large Photograph */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="relative w-full md:w-2/3 aspect-[4/5] bg-[#050505] overflow-hidden group"
            >
              <div className="absolute inset-0 border border-[#a65d37]/30 z-20 pointer-events-none"></div>
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 4, ease: "easeOut" }}
                src="/people-1.jpg" 
                alt="Bonthor Charak Puja Family Heritage"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 sepia-[15%]"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(10,5,0,0.7)] z-10 pointer-events-none"></div>
              
              {/* Internal Label */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col">
                <span className="font-bengali text-[11px] tracking-widest text-[#a65d37] mb-1">সংরক্ষিত পারিবারিক চিত্র</span>
                <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]/60">বংশপরম্পরায় প্রাপ্ত তথ্য</span>
              </div>
            </motion.div>

            {/* Secondary Archival Photograph */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="relative w-[70%] md:w-1/3 aspect-square md:aspect-[3/4] bg-[#050505] overflow-hidden group self-start md:self-end md:mb-12"
            >
              <div className="absolute inset-0 border border-[#a65d37]/20 z-20 pointer-events-none"></div>
              <img 
                src="/people-2.jpg" 
                alt="Historical Archive"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 sepia-[20%]"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="font-serif text-[9px] tracking-[0.3em] text-[#e6dfd5]/70 uppercase">Archive</span>
              </div>
            </motion.div>

            {/* External Archival Metadata */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -top-6 right-0 flex flex-col items-end opacity-50 pointer-events-none"
            >
              <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]">স্মৃতিচারণ · বোঁথড়</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
