import HeroImage from '@/assets/image.png';
import { ArrowRight, Flame } from 'lucide-react';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/60"></div>
      <div className="absolute inset-0 z-10 bg-black/20"></div>

      <div className="absolute inset-0 h-full w-full">
        <Image
          src={HeroImage}
          className="animate-slow-zoom h-full w-full scale-105 object-cover opacity-70"
          alt="ঐতিহাসিক চড়ক উৎসব"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-5xl space-y-8 px-6 text-center">
        {/* Established Badge */}
        <div className="inline-flex animate-pulse items-center gap-2 rounded-full border border-orange-500/80 bg-black/50 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-orange-400 uppercase shadow-lg shadow-black/50 backdrop-blur-sm md:text-xs">
          <Flame size={14} /> শতাব্দী প্রাচীন আধ্যাত্মিক ঐতিহ্য
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl leading-none font-black tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] md:text-[8rem] lg:text-[10rem]">
          <span className="text-orange-600">চড়ক</span> পূজা
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-3xl rounded-lg bg-black/10 p-2 text-lg leading-relaxed font-medium text-gray-200 drop-shadow-md backdrop-blur-[2px] md:text-2xl">
          {`"বোঁথড় গ্রামের প্রায় ৭শ বছরের ঐতিহ্যবাহী চড়ক বাড়ির অমর কাহিনী। ইহা আমাদের পূর্বপুরুষগণের অটল বিশ্বাস ও ত্যাগের এক অনন্ত আধ্যাত্মিক মহাযাত্রা।"`}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <button className="group flex items-center gap-3 rounded-2xl bg-orange-600 px-10 py-5 font-bold text-white shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all hover:scale-105 hover:bg-orange-700 active:scale-95">
            ইতিহাস অবগত হউন
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </button>

          <button className="rounded-2xl border border-white/30 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95">
            চিত্রশালা দর্শন
          </button>
        </div>
      </div>

      {/* CSS for Zoom Animation */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
