'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  { era: '১৪শ - ১৫শ শতাব্দী', title: 'আদি উন্মেষ', desc: 'লৌকিক শিব আরাধনা ও বাংলার গ্রামীণ সমাজে চড়কের সূচনা।' },
  { era: '১৭শ শতাব্দী', title: 'ঐতিহ্যের বিস্তার', desc: 'বোঁথড়ের প্রান্তরে প্রথম চড়ক বৃক্ষ স্থাপন ও মেলার প্রচলন।' },
  { era: 'বর্তমান কাল', title: 'অবিরাম প্রবাহ', desc: 'প্রজন্মের পর প্রজন্ম ধরিয়া আজও অটুট ভক্তি ও উন্মাদনা।' }
];

export default function TimelinePreview() {
  return (
    <section className="w-full py-24 md:py-40 bg-charcoal-dark text-ivory relative border-t border-white/5">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full md:w-1/3 flex flex-col"
          >
            <span className="font-bengali text-aged-copper text-sm tracking-widest font-medium mb-4 block">কালের পরিক্রমা</span>
            <h2 className="font-bengali text-4xl md:text-5xl font-light text-ivory mb-8">
              মহাকালের<br />
              <span className="font-bold drop-shadow-[0_2px_15px_rgba(217,92,20,0.5)]">রথচক্রে</span>
            </h2>
            <p className="font-bengali text-ivory/60 text-lg font-light leading-relaxed mb-12">
              যুগ যুগ ধরিয়া যখন বহু সভ্যতা ও প্রথা বিলুপ্ত হইয়াছে, তখন বোঁথড়ের এই প্রাঙ্গণে কালের স্রোত যেন থমকিয়া দাঁড়াইয়াছে।
            </p>
            
            <button className="group w-fit flex items-center gap-3 border-b border-aged-copper/40 hover:border-fire-orange pb-1 transition-colors duration-500">
              <span className="font-bengali text-ivory text-[15px] tracking-widest transition-colors duration-500 group-hover:text-fire-orange">
                সম্পূর্ণ ইতিহাস দেখুন
              </span>
              <span className="text-fire-orange group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </motion.div>

          <div className="w-full md:w-2/3 relative">
            {/* The Fire Line */}
            <div className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-charcoal-dark via-fire-orange/50 to-charcoal-dark"></div>

            <div className="flex flex-col gap-12 md:gap-16">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
                  className="flex gap-8 relative"
                >
                  {/* Glowing Node */}
                  <div className="w-8 h-8 rounded-full border border-fire-orange/30 bg-charcoal-dark flex items-center justify-center shrink-0 z-10 relative mt-1 group-hover:border-fire-orange transition-colors duration-500">
                    <div className="w-2 h-2 rounded-full bg-fire-orange shadow-[0_0_10px_rgba(217,92,20,0.8)]"></div>
                  </div>

                  <div className="flex flex-col group cursor-pointer">
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-aged-copper uppercase mb-2">
                      {event.era}
                    </span>
                    <h3 className="font-bengali text-2xl text-ivory mb-3 group-hover:text-fire-orange transition-colors duration-500">
                      {event.title}
                    </h3>
                    <p className="font-bengali text-ivory/60 text-base md:text-lg font-light leading-relaxed max-w-md">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
