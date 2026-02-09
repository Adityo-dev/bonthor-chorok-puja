'use client';
import { Menu, Scroll, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  path: string;
}

const NavigationBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'প্রচ্ছদ', path: '/' },
    { id: 'history', label: 'ইতিহাস', path: '/history' },
    { id: 'lineage', label: 'সন্ন্যাসীগণ', path: '/lineage' },
    { id: 'events', label: 'আচার', path: '/events' },
    { id: 'manot', label: 'মানত ও সেবা', path: '/manot' },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-orange-900/50 bg-black/90 py-3 shadow-2xl backdrop-blur-md'
          : 'bg-black/20 py-6' // টেক্সট বোঝার জন্য হালকা ব্যাকগ্রাউন্ড দেওয়া হয়েছে
      }`}
    >
      <div className="mx-auto flex max-w-400 items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-orange-600 to-red-800 p-2 shadow-lg shadow-orange-900/20 transition-transform group-hover:rotate-12">
            <Scroll size={28} className="text-white" />
          </div>
          <h1 className="bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-2xl font-black tracking-tighter text-transparent uppercase">
            bonthor chorok puja
          </h1>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden gap-8 text-sm font-bold tracking-[0.2em] uppercase lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`relative pb-1 transition-all hover:text-orange-500 ${
                pathname === item.path ? 'text-orange-500' : 'text-gray-200'
              }`}
            >
              {item.label}
              {pathname === item.path && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500 shadow-[0_0_10px_#f97316]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* মোবাইল বাটন */}
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* মোবাইল মেনু */}
      {isMobileMenuOpen && (
        <div className="animate-in slide-in-from-top-5 absolute top-full left-0 flex w-full flex-col gap-6 border-b border-orange-900/50 bg-black/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-left text-xl font-bold tracking-[0.1em] ${
                pathname === item.path ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
