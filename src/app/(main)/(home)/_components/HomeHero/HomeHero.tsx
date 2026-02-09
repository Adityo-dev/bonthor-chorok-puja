import HeroImage from '@/assets/image.png';
import { ArrowRight, Flame } from 'lucide-react';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Overlay/Background Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/70 to-[#0a0a0a]"></div>

      {/* Background Image with Slow Zoom Animation */}
      <Image
        width={1600}
        height={600}
        src={HeroImage}
        className="animate-slow-zoom absolute inset-0 h-full w-full scale-105 object-cover"
        alt="Sacred Fire"
      />

      <div className="relative z-20 mx-auto max-w-400 space-y-8 px-4 text-center">
        {/* Established Badge */}
        <div className="inline-flex animate-pulse items-center gap-2 rounded-full border border-orange-500/80 bg-orange-600/30 px-4 py-2 text-[10px] tracking-[0.5em] text-white uppercase">
          <Flame size={12} /> শতাব্দী প্রাচীন আধ্যাত্মিক ঐতিহ্য
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl leading-none font-black tracking-tighter text-white drop-shadow-2xl md:text-[10rem]">
          <span className="text-orange-600">চড়ক</span> পূজা
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-300 italic md:text-2xl">
          বোঁথড় গ্রামের ঐতিহাসিক চড়ক ও শিবতলার অমর কাহিনী। আমাদের পূর্বপুরুষদের বিশ্বাস আর ত্যাগের
          এক অনন্ত যাত্রা।
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <button className="group flex items-center gap-3 rounded-xl bg-orange-600 px-10 py-5 font-bold text-white shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-all hover:bg-orange-700">
            বইয়ের পাতা খুলুন{' '}
            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </button>

          <button className="rounded-xl border border-white/20 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
            গ্যালারি দেখুন
          </button>
        </div>
      </div>

      {/* Tailwind Specific Keyframes Inject (For slow-zoom animation) */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
