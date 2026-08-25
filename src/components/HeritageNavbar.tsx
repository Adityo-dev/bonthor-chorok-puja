'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function HeritageNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ইতিহাস', href: '#' },
    { label: 'পূজা', href: '#' },
    { label: 'আচার', href: '#' },
    { label: 'ঐতিহ্য', href: '#' },
    { label: 'আর্কাইভ', href: '#' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 5, ease: "easeOut" }} // Settles into place after hero animation
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-1000 ease-in-out ${
        isScrolled ? 'bg-[#0a0a0a]/95 border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* =========================================
            LEFT: LOGO & EMBLEM
            ========================================= */}
        <div className="flex items-center gap-4 group cursor-pointer">
          {/* Minimal Heritage Emblem (Trishul/Charak motif) */}
          <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-700">
             <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#a65d37]" strokeWidth="1">
               <path d="M12 2v20M8 6c0 3.5 2 6 4 6s4-2.5 4-6M10 10h4" />
             </svg>
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="font-bengali text-lg md:text-xl text-[#e6dfd5] tracking-wide leading-tight group-hover:text-white transition-colors duration-500">
              বোঁথড়ের চড়ক পূজা
            </h1>
            <span className="font-bengali text-[10px] md:text-[11px] text-[#a65d37]/70 tracking-[0.2em] mt-0.5">
              চাটমোহর · পাবনা
            </span>
          </div>
        </div>

        {/* =========================================
            CENTER / RIGHT: NAVIGATION
            ========================================= */}
        <div className="hidden lg:flex items-center gap-12">
          
          <nav className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="font-bengali text-[14px] tracking-wide text-[#e6dfd5]/70 hover:text-[#e6dfd5] transition-colors duration-500 relative group flex items-center"
              >
                {link.label}
              </Link>
            ))}
            
            {/* "আরও" (More) Menu Interaction */}
            <div className="relative" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
              <button className="font-bengali text-[14px] tracking-wide text-[#e6dfd5]/70 hover:text-[#e6dfd5] transition-colors duration-500 flex items-center gap-1.5 py-2">
                আরও 
                <span className="text-[8px] opacity-60">▼</span>
              </button>
              
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 flex flex-col py-2"
                  >
                    <Link href="#" className="font-bengali text-[#e6dfd5]/70 hover:text-[#e6dfd5] hover:bg-white/5 px-4 py-2 transition-colors text-sm">মেলা</Link>
                    <Link href="#" className="font-bengali text-[#e6dfd5]/70 hover:text-[#e6dfd5] hover:bg-white/5 px-4 py-2 transition-colors text-sm">যোগাযোগ</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA: Elegant Editorial Action */}
          <Link href="#" className="group flex items-center gap-3 ml-4 border-b border-[#a65d37]/40 pb-1.5 hover:border-[#a65d37] transition-colors duration-500">
            <span className="font-bengali text-[15px] tracking-widest text-[#e6dfd5] group-hover:text-[#a65d37] transition-colors duration-500">
              ইতিহাস অবগত হউন
            </span>
            <span className="text-[#a65d37]/80 group-hover:text-[#a65d37] group-hover:translate-x-1.5 transition-all duration-500 text-sm mt-[2px] font-serif">
              →
            </span>
          </Link>

        </div>

        {/* =========================================
            MOBILE MENU BUTTON
            ========================================= */}
        <button className="lg:hidden flex flex-col gap-1.5 w-7 justify-center group opacity-80 hover:opacity-100 transition-opacity duration-500">
          <span className="w-full h-[1px] bg-[#a65d37] group-hover:bg-[#d95c14] transition-colors duration-500"></span>
          <span className="w-2/3 h-[1px] bg-[#a65d37] self-end group-hover:bg-[#d95c14] transition-colors duration-500"></span>
        </button>

      </div>
    </motion.header>
  );
}
