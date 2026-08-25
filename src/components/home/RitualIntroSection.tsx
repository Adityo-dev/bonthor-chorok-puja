'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RitualIntroSection() {
  const rituals = [
    {
      number: '০১',
      title: 'গঙ্গাস্নান',
      desc: 'পবিত্র গঙ্গা যাত্রার মাধ্যমে উৎসবের পুণ্য সূচনা।',
    },
    {
      number: '০২',
      title: 'সংকল্প পূজা',
      desc: 'ব্রতী ও সন্ন্যাসীদের আত্মশুদ্ধি ও বিশেষ সংকল্প।',
    },
    {
      number: '০৩',
      title: 'নীল পূজা',
      desc: 'প্রদীপ প্রজ্বলন ও দেবাদিদেবের বিশেষ আরাধনা।',
    },
    {
      number: '০৪',
      title: 'মিলন মেলা',
      desc: 'উৎসবের সমাপনী লগ্নে ঐতিহ্যবাহী সমাগম।',
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-40 bg-[#0a0a0a] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from Mahadev section (#030202 to #0a0a0a) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030202] to-transparent pointer-events-none z-0"></div>

      {/* Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none z-0"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }}
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
          className="mb-16 md:mb-24"
        >
          {/* Archival Label */}
          <div className="flex flex-col mb-10 opacity-70">
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 04</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">আচার · ০৪</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            চড়ক পূজার<br />
            <span className="font-bold">আচার-পদ্ধতি</span>
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              পরম্পরায় সংরক্ষিত পূজা, সাধনা ও পবিত্র আচারের ধারাবাহিকতা
            </p>
          </div>
          
          <p className="font-bengali text-[#e6dfd5]/70 text-lg font-light leading-relaxed max-w-2xl">
            ভক্তি ও তপস্যার এক জীবন্ত রূপ এই চড়ক আরাধনা। সন্ন্যাসীদের উপবাস, পূজার পবিত্রতা এবং প্রতিটি শাস্ত্রীয় বিধান যুগ যুগ ধরিয়া অপরিবর্তিত রহিয়াছে। ধূপের ধোঁয়া আর অগ্নির উত্তাপে আবর্তিত হয় পরম্পরার এই দৃশ্যমান দলিল।
          </p>
        </motion.div>

        {/* =========================================
            EDITORIAL LAYOUT: MEDIA + TIMELINE
            ========================================= */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Authentic Media */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] w-full group overflow-hidden bg-[#050505]">
              {/* Thin Copper Frame */}
              <div className="absolute inset-0 border border-[#a65d37]/20 z-20 pointer-events-none"></div>
              
              {/* Image with subtle hover reveal */}
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 4, ease: "easeOut" }}
                src="/ritual-1.jpg" 
                alt="Bonthor Charak Puja Ritual"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[15%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.9)] z-10 pointer-events-none"></div>
            </div>

            {/* Image Metadata */}
            <div className="absolute -bottom-8 right-0 flex flex-col items-end opacity-70">
              <span className="font-bengali text-[11px] tracking-widest text-[#a65d37] mb-1">চিত্র · চড়ক প্রাঙ্গণ</span>
              <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]/50">বোঁথড় · চাটমোহর</span>
            </div>
          </motion.div>

          {/* RIGHT: Ritual Timeline Sequence */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center relative mt-8 lg:mt-0">
            {/* The Vertical Line of Tradition */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-[19px] w-px bg-gradient-to-b from-transparent via-[#a65d37]/40 to-transparent"></div>
            
            <div className="flex flex-col gap-12 py-8">
              {rituals.map((ritual, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.3 + (idx * 0.2), ease: "easeOut" }}
                  className="flex gap-8 relative z-10 group"
                >
                  {/* Number */}
                  <div className="flex-shrink-0 bg-[#0a0a0a] py-2 relative">
                    <span className="font-serif text-[#a65d37] text-[18px] md:text-[22px] tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                      {ritual.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col pt-1">
                    <h3 className="font-bengali text-xl md:text-2xl text-[#e6dfd5] font-medium mb-3 group-hover:text-[#a65d37] transition-colors duration-500">
                      {ritual.title}
                    </h3>
                    <p className="font-bengali text-[#e6dfd5]/60 text-sm md:text-base font-light leading-relaxed">
                      {ritual.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
          className="mt-32 pt-12 border-t border-[#e6dfd5]/10 flex justify-start lg:justify-center"
        >
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              চড়ক পূজার আচার-পদ্ধতি বিস্তারিত অবগত হউন
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
