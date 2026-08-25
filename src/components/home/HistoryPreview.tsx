'use client';

import { motion } from 'framer-motion';

export default function HistoryPreview() {
  return (
    <section className="w-full py-24 md:py-40 bg-charcoal-dark text-ivory relative border-t border-white/5 overflow-hidden">
      
      {/* Stone/Ash Texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-aged-copper/60"></span>
              <span className="font-bengali text-aged-copper/90 text-[13px] tracking-widest font-medium">ইতিহাসের উন্মোচন</span>
            </div>

            <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl text-ivory font-light leading-[1.2] mb-8">
              সাত শতক ধরিয়া<br />
              <span className="font-bold text-ivory drop-shadow-[0_2px_15px_rgba(139,0,0,0.5)]">প্রবহমান পবিত্র ধারা</span>
            </h2>

            <div className="space-y-6 font-bengali text-ivory/70 text-lg font-light leading-relaxed">
              <p>
                কালের গহ্বরে যখন বহু স্মৃতি বিলীন হইয়া যায়, বোঁথড় তখনো জাগিয়া থাকে তাহার আপন মহিমায়। শ্রুতি ও প্রামাণ্য ইতিহাস সাক্ষ্য দেয়, এই পুণ্যভূমিতে চড়ক আরাধনার সূচনা ঘটিয়াছিল প্রায় ৭০০ বৎসরেরও অধিক কাল পূর্বে।
              </p>
              <p>
                প্রজন্ম হইতে প্রজন্মান্তরে, পিতাপুত্রের হাত ধরিয়া এই রুদ্র উপাসনা আজও অমলিন। ইহা কেবল ইতিহাস নহে, ইহা এক বহমান ভক্তির নদী।
              </p>
            </div>

            <button className="group mt-12 flex items-center gap-3 border-b border-aged-copper/40 hover:border-fire-orange pb-1.5 transition-colors duration-500">
              <span className="font-bengali text-ivory text-[15px] tracking-widest transition-colors duration-500 group-hover:text-fire-orange">
                ইতিহাসের গভীরে প্রবেশ করুন
              </span>
              <span className="text-fire-orange group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </motion.div>

          {/* Right Visual Block (Monolithic ancient feel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full md:w-1/2 aspect-[4/5] md:aspect-square bg-charcoal overflow-hidden relative group"
          >
            {/* Extremely dark atmospheric image placeholder */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-1000 group-hover:scale-105 transform"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1500&auto=format&fit=crop')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent"></div>
            
            {/* Subtle Timestamp Overlay */}
            <div className="absolute bottom-10 left-10 flex flex-col">
              <span className="font-serif text-5xl md:text-7xl text-aged-copper/20 font-light">700+</span>
              <span className="font-bengali text-ivory/50 text-sm tracking-widest mt-2">বৎসর পূর্বের প্রামাণ্য ইতিহাস</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
