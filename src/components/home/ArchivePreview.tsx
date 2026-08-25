'use client';

import { motion } from 'framer-motion';

export default function ArchivePreview() {
  return (
    <section className="w-full py-24 md:py-40 bg-charcoal-dark text-ivory relative border-t border-white/5 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-aged-copper/60"></span>
              <span className="font-bengali text-aged-copper text-[13px] tracking-widest font-medium">স্মৃতিভাণ্ডার</span>
            </div>
            <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl text-ivory font-light drop-shadow-[0_2px_15px_rgba(139,0,0,0.5)]">
              বিগত যুগের<br />
              <span className="font-bold">পুণ্য স্মৃতি</span>
            </h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden md:flex group items-center gap-3 border-b border-aged-copper/40 hover:border-fire-orange pb-1 transition-colors duration-500"
          >
            <span className="font-bengali text-ivory text-[15px] tracking-widest transition-colors duration-500 group-hover:text-fire-orange">
              সম্পূর্ণ আর্কাইভ খুলুন
            </span>
            <span className="text-fire-orange group-hover:translate-x-2 transition-transform duration-500">→</span>
          </motion.button>
        </div>

        {/* Dark Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-8 relative aspect-[4/3] bg-charcoal overflow-hidden group cursor-pointer border border-white/5"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542104526-213c490a19c9?q=80&w=2000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <span className="font-serif text-[9px] tracking-[0.4em] text-aged-copper uppercase">Archive / Video</span>
              <span className="font-bengali text-ivory/80 text-lg tracking-widest mt-1">রুদ্র রজনীর দৃশ্য</span>
            </div>
          </motion.div>

          {/* Secondary Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="col-span-1 md:col-span-4 relative aspect-[4/3] bg-charcoal overflow-hidden group cursor-pointer border border-white/5"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-60 transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?q=80&w=1000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4">
              <span className="font-serif text-[8px] tracking-[0.4em] text-fire-orange/60 uppercase">Photograph</span>
            </div>
          </motion.div>

          {/* Tertiary Photos */}
          {[
            "https://images.unsplash.com/photo-1508247277685-612663972ac8?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1000&auto=format&fit=crop"
          ].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 + (i * 0.2), ease: "easeOut" }}
              className="col-span-1 md:col-span-6 relative aspect-video md:aspect-[3/2] bg-charcoal overflow-hidden group cursor-pointer border border-white/5"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-90"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
