'use client';

import { motion } from 'framer-motion';

export default function HeritageIntro() {
  return (
    <section className="w-full py-32 md:py-48 bg-charcoal-dark text-ivory relative overflow-hidden flex items-center justify-center">
      
      {/* Deep Atmosphere */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fire-orange/20 via-transparent to-transparent blur-[120px]"></div>
      </div>
      
      {/* Drifting Embers */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ y: ["0%", "-20%"], x: ["-2%", "2%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-[150%] absolute bg-[radial-gradient(circle_1px_at_20%_80%,_#d95c14_40%,_transparent_50%),radial-gradient(circle_2px_at_80%_30%,_#8b0000_30%,_transparent_40%)] bg-[length:100px_100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-rudra-red font-serif text-3xl mb-8 opacity-60 block">ॐ</span>

          <h2 className="font-bengali text-3xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-ivory drop-shadow-lg mb-10">
            "একটি আরাধনা কেবল একটি রজনীর উৎসব নহে, ইহা শতবর্ষের বিশ্বাস ও ভক্তির এক জীবন্ত প্রতিমূর্তি।"
          </h2>
          
          <div className="w-px h-16 bg-gradient-to-b from-fire-orange/50 to-transparent mx-auto mb-10"></div>

          <p className="font-bengali text-lg md:text-2xl text-ivory/70 font-light leading-relaxed max-w-2xl mx-auto">
            যেখানে মহাকালের চরণে সমর্পিত হয় লৌকিক বাসনা, যেখানে অনল আর ধুম্রের মাঝে জাগ্রত হয় এক সনাতন ঐতিহ্য— তাহাই বোঁথড়ের চড়ক।
          </p>
        </motion.div>

      </div>
    </section>
  );
}
