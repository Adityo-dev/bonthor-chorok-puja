import Link from 'next/link';

export default function HeritageFooter() {
  return (
    <footer className="w-full bg-charcoal-dark text-ivory/60 border-t border-white/5 py-12 md:py-20 relative overflow-hidden">
      
      {/* Very faint background noise */}
      <div 
        className="absolute inset-0 opacity-[0.01] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-aged-copper/60 mb-6" strokeWidth="1">
            <path d="M12 2v20M8 6c0 3.5 2 6 4 6s4-2.5 4-6M10 10h4" />
          </svg>
          <h3 className="font-bengali text-xl text-ivory/80 tracking-widest mb-2">বোঁথড়ের চড়ক পূজা</h3>
          <p className="font-sans text-[10px] tracking-[0.2em] text-aged-copper/50 uppercase">Digital Heritage Archive</p>
        </div>

        <div className="flex gap-8 md:gap-16 font-bengali text-sm tracking-widest">
          <div className="flex flex-col gap-4">
            <Link href="#" className="hover:text-ivory transition-colors">ইতিহাস</Link>
            <Link href="#" className="hover:text-ivory transition-colors">পূজার আচার</Link>
            <Link href="#" className="hover:text-ivory transition-colors">চড়কগাছ</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#" className="hover:text-ivory transition-colors">ফটো আর্কাইভ</Link>
            <Link href="#" className="hover:text-ivory transition-colors">ভিডিও</Link>
            <Link href="#" className="hover:text-ivory transition-colors">যোগাযোগ</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] tracking-[0.1em] text-ivory/30">
          © {new Date().getFullYear()} BONTHOR CHARAK PUJA ARCHIVE. ALL RIGHTS RESERVED.
        </p>
        <p className="font-bengali text-[11px] text-ivory/30 tracking-wider">
          একটি অলাভজনক ঐতিহ্য সংরক্ষণ উদ্যোগ
        </p>
      </div>

    </footer>
  );
}
