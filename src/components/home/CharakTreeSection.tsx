'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CharakTreeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extremely subtle parallax effect for the image to create a documentary feel
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] min-h-[800px] bg-[#0a0a0a] overflow-hidden flex items-center">
      
      {/* =========================================
          BACKGROUND / PARALLAX IMAGE
          ========================================= */}
      <div className="absolute inset-0 w-full h-[130vh] -top-[15vh] z-0 overflow-hidden">
        <motion.img 
          style={{ y }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 4, ease: "easeOut" }}
          src="/charak-tree.jpg" 
          alt="Bonthor Charak Tree and Ritual Grounds"
          className="w-full h-full object-cover object-center opacity-50 mix-blend-luminosity grayscale-[20%]"
        />
        
        {/* Cinematic Vignette & Text Shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-full md:w-[75%] lg:w-[60%] pointer-events-none"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(10,10,10,1)] pointer-events-none"></div>
      </div>

      {/* =========================================
          CONTENT & TYPOGRAPHY
          ========================================= */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full">
        
        <div className="w-full md:w-[65%] lg:w-[50%] flex flex-col items-start mt-20">
          
          {/* Archival Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col mb-10 opacity-70"
          >
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 05</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">চড়ক · ০৫</span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-8 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="font-bengali text-5xl md:text-6xl lg:text-[70px] text-[#e6dfd5]/90 font-light leading-none tracking-tight mb-2 drop-shadow-lg"
            >
              চড়কগাছ
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-bengali text-5xl md:text-6xl lg:text-[80px] text-[#e6dfd5] font-bold leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              ও চড়কচক্র
            </motion.h2>
          </div>

          {/* Supporting Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#a65d37]/80"></span>
            <h3 className="font-bengali text-[#a65d37] text-[15px] md:text-[17px] tracking-widest font-medium">
              চড়ক প্রাঙ্গণের দৃশ্যমান ঐতিহ্য
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
            সব আয়োজনের মধ্যেও একটি চড়কগাছ নীরবে দাঁড়াইয়া থাকে—যেন বহু প্রজন্মের সাক্ষী। লোকশ্রুতি ও বংশপরম্পরায় প্রাপ্ত স্মৃতি অনুযায়ী, এই পবিত্র বৃক্ষটি কেবল একটি কাষ্ঠখণ্ড নহে, ইহা স্বর্গ ও মর্ত্যের এক অলৌকিক সেতুবন্ধন। যাহার শিখরে ঘূর্ণায়মান চড়কচক্র কালের নিরবচ্ছিন্ন গতির কথা স্মরণ করাইয়া দেয়।
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
                চড়কগাছের পরম্পরা অবগত হউন
              </span>
              <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 font-serif text-lg">
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* =========================================
          MICRO METADATA (ARCHIVAL DETAILS)
          ========================================= */}
      
      {/* Bottom Right Metadata Group */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 right-6 md:right-12 z-20 flex flex-col items-end gap-2 opacity-50 pointer-events-none"
      >
        <div className="flex items-center gap-4 mb-1">
          <span className="w-8 h-px bg-[#a65d37]/40"></span>
          <span className="font-bengali text-[12px] tracking-widest text-[#a65d37] uppercase">নিদর্শন · ০৫</span>
        </div>
        <span className="font-bengali text-[11px] tracking-widest text-[#e6dfd5]">চড়ক প্রাঙ্গণ</span>
        <span className="font-serif text-[9px] tracking-[0.3em] text-[#e6dfd5]/50 uppercase mt-1">
          BONTHOR · CHATMOHAR · PABNA
        </span>
      </motion.div>

      {/* Vertical subtle indicator line */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "15vh" }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-0 left-[5%] md:left-[10%] w-[1px] bg-gradient-to-t from-[#a65d37]/30 to-transparent z-10 pointer-events-none"
      ></motion.div>

    </section>
  );
}
