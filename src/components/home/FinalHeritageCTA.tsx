'use client';

import { motion } from 'framer-motion';

export default function FinalHeritageCTA() {
  return (
    <section className="w-full py-40 md:py-56 bg-charcoal-dark text-ivory relative border-t border-white/5 overflow-hidden flex items-center justify-center">
      
      {/* Intense glowing center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-fire-orange/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          
          <h2 className="font-bengali text-4xl md:text-5xl lg:text-7xl font-light leading-[1.3] text-ivory mb-12 drop-shadow-[0_0_30px_rgba(217,92,20,0.4)]">
            "একটি ঐতিহ্য বাঁচিয়া থাকে, যখন তাহার <span className="font-bold">গল্প সংরক্ষিত হয়।</span>"
          </h2>
          
          <p className="font-bengali text-lg md:text-xl text-ivory/60 font-light leading-relaxed max-w-2xl mx-auto mb-16">
            কালক্রমে যাহাতে এই পুণ্যধারা হারাইয়া না যায়, সেই উদ্দেশ্যেই এই ডিজিটাল সংরক্ষণ। আসুন, প্রবেশ করি ঐতিহ্যের অন্দরমহলে।
          </p>

          <button className="group relative overflow-hidden border border-aged-copper/50 bg-charcoal hover:bg-aged-copper/10 transition-colors duration-700 px-10 py-5">
            <span className="relative z-10 font-bengali text-ivory text-lg tracking-widest group-hover:text-fire-orange transition-colors duration-700">
              সম্পূর্ণ আর্কাইভে প্রবেশ করুন
            </span>
            {/* Hover subtle glow inside button */}
            <div className="absolute inset-0 bg-gradient-to-r from-fire-orange/0 via-fire-orange/10 to-fire-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
          </button>

        </motion.div>

      </div>
    </section>
  );
}
