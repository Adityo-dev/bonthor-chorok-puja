'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OralHistorySection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-[#14100e] overflow-hidden text-[#e6dfd5]">
      
      {/* Background Transition from MelaSection (#0d0b0a to #14100e) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d0b0a] to-transparent pointer-events-none z-0"></div>

      {/* Subtle Warm Texture (Aged Parchment feel in dark mode) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none z-0"
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
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          {/* Archival Label */}
          <div className="flex flex-col items-center mb-8 opacity-70">
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#a65d37] uppercase mb-1">Section / 08</span>
            <span className="font-bengali text-[12px] tracking-widest text-[#e6dfd5]">লোকস্মৃতি · ০৮</span>
          </div>

          <h2 className="font-bengali text-4xl md:text-5xl lg:text-[64px] text-[#e6dfd5] font-light leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
            মানুষের মুখে<br />
            <span className="font-bold">চড়কের কথা</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
            <p className="font-bengali text-[#a65d37] text-[14px] md:text-[16px] tracking-widest font-medium">
              স্মৃতির পাতা পেরিয়ে প্রজন্ম থেকে প্রজন্মে বহমান এক জীবন্ত কাহিনি
            </p>
            <span className="w-8 h-[1px] bg-[#a65d37]/80"></span>
          </div>
        </motion.div>

        {/* =========================================
            ORAL HISTORY ARCHIVE LAYOUT
            ========================================= */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Large Portrait / Historical Photograph */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative group"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-[#050505] overflow-hidden">
              <div className="absolute inset-0 border border-[#a65d37]/30 z-20 pointer-events-none"></div>
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 4, ease: "easeOut" }}
                src="/history-1.jpg" 
                alt="Oral History Archive Portrait"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[40%] group-hover:grayscale-[10%] group-hover:opacity-100 transition-all duration-1000 sepia-[20%]"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(15,10,5,0.8)] z-10 pointer-events-none"></div>
              
              {/* Internal Metadata */}
              <div className="absolute top-6 left-6 z-20 flex flex-col opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                <span className="font-bengali text-[11px] tracking-widest text-[#a65d37] mb-1">সংরক্ষিত পারিবারিক নথি</span>
                <span className="font-bengali text-[10px] tracking-widest text-[#e6dfd5]/60">বোঁথড় · চাটমোহর</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Introduction (In lieu of a quote) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-7/12 flex flex-col justify-center relative"
          >
            {/* Elegant Quotation Marks acting as Graphic Elements */}
            <span className="text-[#a65d37]/10 font-serif text-[120px] lg:text-[180px] leading-none absolute -top-16 lg:-top-24 -left-8 lg:-left-12 pointer-events-none">
              "
            </span>

            {/* Editorial Content */}
            <div className="relative z-10 pl-4 md:pl-8 border-l border-[#a65d37]/30">
              <p className="font-bengali text-2xl md:text-3xl lg:text-4xl text-[#e6dfd5]/90 font-light leading-[1.6] drop-shadow-md mb-8">
                লিখিত ইতিহাসের পাশাপাশি মানুষের ব্যক্তিগত স্মৃতি, প্রবীণদের মুখে মুখে চলিয়া আসা কথা এবং বংশপরম্পরায় প্রাপ্ত লোকশ্রুতিই এই চড়ক আরাধনার প্রকৃত উত্তরাধিকার।
              </p>
              <p className="font-bengali text-lg md:text-xl text-[#e6dfd5]/60 font-light leading-relaxed mb-12">
                অচিরেই এই সংরক্ষণাগারে যুক্ত হইবে সেইসকল বয়োজ্যেষ্ঠদের স্মৃতিচারণ—যাঁহাদের কণ্ঠে আজও ধ্বনিত হয় পুরোনো দিনের কথা। স্মৃতি, আরাধনা ও পরম্পরা এখানে শব্দরূপে সুরক্ষিত থাকিবে।
              </p>

              {/* Manuscript Line Symbolizing Audio/Oral History */}
              <div className="flex items-center gap-2 mb-8 opacity-40">
                <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10C10 10 15 2 25 2C35 2 40 18 50 18C60 18 65 5 75 5C85 5 90 15 100 15C110 15 115 10 120 10" stroke="#e6dfd5" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Author / Metadata Placeholder */}
              <div className="flex flex-col">
                <span className="font-bengali text-lg text-[#e6dfd5] font-medium">— মৌখিক ইতিহাস সংরক্ষণাগার</span>
                <span className="font-bengali text-sm text-[#a65d37] mt-1 tracking-widest">স্মৃতিচারণ · লোকশ্রুতি</span>
              </div>
            </div>

            <span className="text-[#a65d37]/10 font-serif text-[120px] lg:text-[180px] leading-none absolute -bottom-24 lg:-bottom-32 right-0 rotate-180 pointer-events-none">
              "
            </span>
          </motion.div>

        </div>

        {/* =========================================
            SECONDARY MEMORY ROW
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-24 md:mt-32 pt-16 border-t border-[#e6dfd5]/10 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {['স্মৃতি', 'পরম্পরা', 'সাক্ষ্য'].map((title, idx) => (
            <div key={idx} className="flex flex-col group">
              <span className="font-serif text-[#a65d37]/50 text-xl mb-4 group-hover:text-[#a65d37] transition-colors">
                0{idx + 1}
              </span>
              <h4 className="font-bengali text-[#e6dfd5] text-xl mb-3">{title}</h4>
              <p className="font-bengali text-[#e6dfd5]/40 text-sm font-light leading-relaxed group-hover:text-[#e6dfd5]/60 transition-colors">
                বয়োজ্যেষ্ঠদের ব্যক্তিগত অভিজ্ঞতা ও লোকশ্রুতি অচিরেই এখানে আর্কাইভ করা হইবে।
              </p>
            </div>
          ))}
        </motion.div>

        {/* =========================================
            BOTTOM: CTA
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-24 flex justify-center"
        >
          <Link href="#" className="group relative flex items-center gap-3 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[#e6dfd5] text-[15px] md:text-[17px] tracking-widest transition-colors duration-500 group-hover:text-[#a65d37]">
              লোকস্মৃতির পূর্ণ সংরক্ষণাগার অবগত হউন
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
