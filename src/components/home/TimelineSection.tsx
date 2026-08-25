'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const milestones = [
    {
      id: '01',
      title: 'প্রাচীন লোকস্মৃতি',
      desc: 'শতবর্ষ পূর্বে এক অলৌকিক স্বপ্নাদেশ প্রাপ্ত হইয়া এই চড়ক ও শিবতলার গোড়াপত্তন করা হয়। লোকশ্রুতি অনুযায়ী ইহা বহু শতাব্দীর পরম্পরা।',
      tag: 'লোকস্মৃতি',
      date: 'অজ্ঞাত কাল',
      image: null,
      align: 'top' 
    },
    {
      id: '02',
      title: 'সংরক্ষিত পাণ্ডুলিপি',
      desc: 'আমাদের নিকট অদ্যাবধি সংরক্ষিত রহিয়াছে সেই হস্তলিখিত প্রাচীন বিধি-বিধানের পাণ্ডুলিপি, যাহা ঐতিহ্যের অকাট্য প্রমাণ।',
      tag: 'প্রামাণ্য দলিল',
      date: 'শতবর্ষ প্রাচীন',
      image: '/history-1.jpg',
      align: 'bottom'
    },
    {
      id: '03',
      title: 'বংশপরম্পরার স্মৃতি',
      desc: 'বোঁথড় গ্রামের তৎকালীন জমিদার ও ভক্তপ্রাণ সাধারণ মানুষের সম্মিলিত নিবেদন ও প্রচেষ্টায় গড়াইয়া উঠিয়াছে এই পুণ্য প্রাঙ্গণ।',
      tag: 'পারিবারিক স্মৃতি',
      date: 'স্মৃতির পাতা',
      image: null,
      align: 'top'
    },
    {
      id: '04',
      title: 'বর্তমান পরম্পরা',
      desc: 'সেই প্রাচীন প্রাঙ্গণ আজও দণ্ডায়মান রহিয়াছে, যাহা আমাদের পূর্বপুরুষগণের সাধনা ও ত্যাগের এক নীরব সাক্ষী।',
      tag: 'সংরক্ষিত আলোকচিত্র',
      date: 'বর্তমান',
      image: '/timeline-1.jpg',
      align: 'bottom'
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-40 bg-[#0c0908] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from Oral History (#14100e to #0c0908) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#14100e] to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* =========================================
            HEADER AREA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-start mb-24 md:mb-32"
        >
          {/* Archival Label */}
          <div className="flex flex-col mb-8 opacity-70">
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 10</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">কালপরম্পরা · ১০</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            কালপরম্পরায়<br />
            <span className="font-bold">চড়কের পথচলা</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              স্মৃতি, নথি ও প্রজন্মের ধারায় বহমান এক জীবন্ত ঐতিহ্যের পথরেখা
            </p>
          </div>
        </motion.div>

        {/* =========================================
            DESKTOP HORIZONTAL TIMELINE
            ========================================= */}
        <div className="hidden lg:block relative w-full h-[600px] mb-24">
          
          {/* The Archival Timeline Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a65d37]/40 to-transparent origin-left z-0"
          ></motion.div>

          <div className="relative w-full h-full flex justify-between items-center z-10 px-8">
            {milestones.map((ms, idx) => (
              <motion.div 
                key={ms.id}
                initial={{ opacity: 0, y: ms.align === 'top' ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + (idx * 0.3), ease: "easeOut" }}
                className={`relative flex flex-col w-[22%] group ${ms.align === 'top' ? 'justify-end pb-12' : 'justify-start pt-12 mt-auto'}`}
                style={{ height: '50%', top: ms.align === 'top' ? 0 : '50%' }}
              >
                {/* Node Dot */}
                <div className={`absolute ${ms.align === 'top' ? 'bottom-[-4px]' : 'top-[-4px]'} left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#14100e] border border-[#a65d37]/60 group-hover:bg-[#a65d37] transition-colors duration-500`}></div>
                
                {/* Connector Line */}
                <div className={`absolute ${ms.align === 'top' ? 'bottom-0' : 'top-0'} left-1/2 -translate-x-1/2 w-px h-8 bg-[#a65d37]/20`}></div>

                <div className="flex flex-col text-center items-center">
                  <span className="font-serif text-[#a65d37] text-sm tracking-widest mb-2 opacity-80">{ms.date}</span>
                  <h4 className="font-bengali text-2xl text-[#e6dfd5] font-medium mb-3">{ms.title}</h4>
                  <p className="font-bengali text-[#e6dfd5]/50 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                    {ms.desc}
                  </p>
                  <span className="font-bengali text-[10px] tracking-widest text-[#a65d37]/70 border border-[#a65d37]/20 px-3 py-1 uppercase">
                    {ms.tag}
                  </span>

                  {/* Optional Archival Image revealing on Hover */}
                  {ms.image && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 aspect-[3/4] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-700 z-20 mix-blend-luminosity">
                      <div className="absolute inset-0 border border-[#a65d37]/40 z-10"></div>
                      <img src={ms.image} alt={ms.title} className="w-full h-full object-cover sepia-[30%] grayscale-[20%]" />
                      <div className="absolute inset-0 bg-[#0c0908]/40 z-0"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE / TABLET VERTICAL TIMELINE
            ========================================= */}
        <div className="block lg:hidden relative w-full mb-16 pl-6">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-transparent via-[#a65d37]/30 to-transparent z-0"></div>
          
          <div className="flex flex-col gap-16 relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div 
                key={ms.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col relative group"
              >
                {/* Node */}
                <div className="absolute left-[-23px] top-[6px] w-2 h-2 rounded-full bg-[#14100e] border border-[#a65d37]/60"></div>
                
                <div className="pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif text-[#a65d37] text-xs tracking-widest opacity-80">{ms.date}</span>
                    <span className="font-bengali text-[9px] tracking-widest text-[#a65d37]/70 border border-[#a65d37]/20 px-2 py-0.5 uppercase">
                      {ms.tag}
                    </span>
                  </div>
                  
                  <h4 className="font-bengali text-2xl text-[#e6dfd5] font-medium mb-3">{ms.title}</h4>
                  <p className="font-bengali text-[#e6dfd5]/60 text-base font-light leading-relaxed mb-4">
                    {ms.desc}
                  </p>
                  
                  {ms.image && (
                    <div className="w-full max-w-[200px] aspect-[4/3] relative mt-4">
                      <div className="absolute inset-0 border border-[#a65d37]/20 z-10 pointer-events-none"></div>
                      <img src={ms.image} alt={ms.title} className="w-full h-full object-cover mix-blend-luminosity grayscale-[20%] sepia-[20%]" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
          className="mt-16 pt-12 border-t border-[#e6dfd5]/10 flex justify-center"
        >
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              সম্পূর্ণ কালপরম্পরা অবগত হউন
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
