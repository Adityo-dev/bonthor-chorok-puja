'use client';

import { motion } from 'framer-motion';

const rituals = [
  {
    title: 'ধূপ-ধুনো ও অগ্নিক্রীড়া',
    desc: 'অগ্নির পবিত্র শিখায় আত্মশুদ্ধির প্রথম লগ্ন। ধুনির গন্ধে পবিত্র হয় চতুর্দিক।',
    delay: 0.2
  },
  {
    title: 'শিবের গাজন',
    desc: 'রুদ্রের আরাধনায় সন্ন্যাসীদের ভক্তিগীতি, যেখানে বিলীন হয় সকল জাগতিক মোহ।',
    delay: 0.4
  },
  {
    title: 'বাণফোঁড়া ও আত্মোৎসর্গ',
    desc: 'ভক্তি যখন দৈহিক যন্ত্রণাকে জয় করে, রক্তমাংসের শরীর পরিণত হয় পরম সাধনার যন্ত্রে।',
    delay: 0.6
  }
];

export default function RitualsPreview() {
  return (
    <section className="w-full py-24 md:py-40 bg-charcoal-dark text-ivory relative border-t border-white/5">
      
      {/* Background Ash Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="font-bengali text-aged-copper text-sm tracking-widest font-medium mb-4 block">পূজার আচার ও আত্মোৎসর্গ</span>
          <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl font-light text-ivory">
            ভক্তি যখন <span className="font-bold text-rudra-red drop-shadow-[0_0_20px_rgba(139,0,0,0.8)]">যন্ত্রণাকে জয় করে</span>
          </h2>
        </motion.div>

        {/* Rituals List (Editorial Style, No Cards) */}
        <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
          {rituals.map((ritual, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: ritual.delay, ease: "easeOut" }}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center border-b border-white/5 pb-10 hover:border-aged-copper/40 transition-colors duration-700 cursor-pointer"
            >
              <span className="font-serif text-3xl md:text-5xl text-aged-copper/20 group-hover:text-fire-orange/40 transition-colors duration-700 font-light">
                0{i + 1}
              </span>
              
              <div className="flex-1">
                <h3 className="font-bengali text-2xl md:text-3xl text-ivory mb-4 group-hover:text-fire-orange transition-colors duration-500 drop-shadow-md">
                  {ritual.title}
                </h3>
                <p className="font-bengali text-ivory/60 text-base md:text-lg font-light leading-relaxed group-hover:text-ivory/90 transition-colors duration-500">
                  {ritual.desc}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-fire-orange/50 transition-colors duration-500 opacity-50 group-hover:opacity-100">
                <span className="text-fire-orange group-hover:translate-x-1 transition-transform duration-500">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <button className="font-sans text-xs tracking-[0.3em] text-aged-copper/80 hover:text-fire-orange transition-colors uppercase border-b border-aged-copper/30 hover:border-fire-orange pb-1">
            View All Rituals
          </button>
        </motion.div>

      </div>
    </section>
  );
}
