'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MahadevSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#030202] overflow-hidden flex items-center">
      
      {/* =========================================
          BACKGROUND & VISUAL DEPTH
          ========================================= */}
      
      {/* 
        Background Transition:
        Blends from the previous section's charcoal (#0d0a0a) 
        down into a deeper, spiritual black (#030202).
      */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d0a0a] to-transparent pointer-events-none z-10"></div>
      
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full"
        >
          {/* Authentic Project Media */}
          <img 
            src="/mahadev-bg.jpg" 
            alt="Mahadev Ritual / Dhuni"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale-[20%]"
          />
        </motion.div>
        
        {/* Cinematic Overlays: Vignette & Reading Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030202] via-transparent to-[#030202] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030202] via-[#030202]/80 to-transparent w-full lg:w-[60%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030202_100%)] opacity-80 pointer-events-none"></div>

        {/* Subtle Dhuni Fire Glow */}
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-[#d95c14]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />
        {/* Subtle Dark Maroon Glow */}
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-[#5e1212]/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        />
      </div>

      {/* =========================================
          CONTENT & TYPOGRAPHY
          ========================================= */}
      
      <div className="container mx-auto px-6 md:px-12 relative z-20 py-24 md:py-32 flex flex-col justify-center">
        
        <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col items-start">
          
          {/* Archival Label */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col mb-10 opacity-70"
          >
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 02</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">আরাধনা · ০২</span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-8 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="font-bengali text-5xl md:text-6xl lg:text-[72px] text-[#e6dfd5]/90 font-light leading-none tracking-tight mb-2 drop-shadow-lg"
            >
              দেবাদিদেব
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-bengali text-6xl md:text-7xl lg:text-[90px] text-[#e6dfd5] font-bold leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              মহাদেব
            </motion.h2>
          </div>

          {/* Secondary Heading */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#d95c14]/60"></span>
            <h3 className="font-bengali text-[#d95c14] text-[15px] md:text-[17px] tracking-widest font-medium">
              রুদ্র আরাধনার অন্তরালে
            </h3>
          </motion.div>

          {/* Literary Paragraph (Sadhu Bengali) */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="font-bengali text-[#e6dfd5]/70 text-lg md:text-xl font-light leading-relaxed mb-12 drop-shadow-md"
          >
            যুগ যুগ ধরিয়া এই পুণ্যভূমির অন্তরে প্রবাহিত হইতেছে এক অমোঘ ভক্তিধারা। মহাকালের আরাধনায় যখন ধুনির পবিত্র অগ্নি জ্বলিয়া ওঠে, তখন ভক্তের আত্মোৎসর্গ ও দেবাদিদেবের রুদ্র উপস্থিতি এক অলৌকিক সংযোগ স্থাপন করে। চড়কচক্রের প্রতিটি আবর্তন যেন সেই চিরন্তন সাধনারই প্রতিরূপ।
          </motion.p>

          {/* Elegant CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          >
            <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
              <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[16px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
                মহাদেবের আরাধনার ইতিবৃত্ত অবগত হউন
              </span>
              <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 font-serif">
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* =========================================
          MICRO METADATA (ARCHIVAL DETAILS)
          ========================================= */}
      
      {/* Subtle Vertical Archival Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute top-1/2 right-10 hidden lg:flex items-center z-20 pointer-events-none origin-right -rotate-90"
      >
        <span className="font-bengali text-[10px] tracking-[0.4em] text-[#a65d37]/40 uppercase whitespace-nowrap">
          রুদ্র · আরাধনা · পরম্পরা
        </span>
        <div className="w-16 h-px bg-[#a65d37]/20 ml-4"></div>
      </motion.div>

      {/* Bottom Metadata */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 2 }}
        className="absolute bottom-10 right-6 md:right-12 z-20 pointer-events-none opacity-40"
      >
        <span className="font-serif text-[9px] tracking-[0.3em] text-[#e6dfd5] uppercase">
          BONTHOR · CHATMOHAR · PABNA
        </span>
      </motion.div>

    </section>
  );
}
