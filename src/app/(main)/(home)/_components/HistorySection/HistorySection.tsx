import Imagess from '@/assets/image.png';
import { History } from 'lucide-react';
import Image from 'next/image';

const HistorySection = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto grid max-w-400 items-center gap-16 lg:grid-cols-2">
        {/* Left Side: Text Content */}
        <div className="relative space-y-8">
          <div className="inline-block rounded-2xl bg-orange-600/20 p-4 text-orange-500">
            <History size={32} />
          </div>
          <h2 className="text-5xl leading-tight font-black text-white">
            সংরক্ষিত <br />
            <span className="text-orange-600">পাণ্ডুলিপির</span> ইতিহাস
          </h2>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-gray-400">
            <p>
              আমাদের কাছে থাকা প্রাচীন পাণ্ডুলিপি অনুযায়ী, এই চড়ক বাড়ির ইতিহাস কয়েকশো বছরের
              পুরনো। বোঁথড় গ্রামের এই মন্দির প্রাঙ্গণটি শিব এবং শক্তির সাধনার অন্যতম পীঠস্থান।
            </p>
            <p>
              এটি কেবল প্রদর্শনী নয়, বরং মহাদেবের প্রতি আত্মনিবেদনের এক গভীর আধ্যাত্মিক পথ। শাস্ত্রে
              আছে, চড়কের চাকার সাথে ঘোরার অর্থ হলো মহাবিশ্বের কালচক্রের সাথে নিজেকে একীভূত করা।
            </p>
          </div>
          <div className="border-l-4 border-orange-600 bg-stone-900/50 p-6 text-orange-200/80 italic">
            {`"বংশপরম্পরায় এই পবিত্র দায়িত্ব পালন করে আসা আমাদের পরম সৌভাগ্যের বিষয়।"`}
          </div>
        </div>

        {/* Right Side: Image Grid & Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="h-80 overflow-hidden rounded-[2rem] border border-white/5 bg-stone-900 shadow-2xl">
              <Image
                src={Imagess}
                className="h-full w-full object-cover opacity-60 grayscale transition duration-700 hover:opacity-100 hover:grayscale-0"
                alt="Tradition"
              />
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-orange-600 to-red-800 p-8 text-center">
              <span className="block text-5xl font-black text-white">১০০+</span>
              <span className="text-[10px] tracking-[0.3em] text-orange-100 uppercase">
                বছরের ঐতিহ্য
              </span>
            </div>
          </div>

          <div className="space-y-6 pt-12">
            <div className="rounded-3xl border border-white/5 bg-stone-900 p-8 text-center">
              <span className="block text-5xl font-black text-white">১৩</span>
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                প্রধান সন্ন্যাসী
              </span>
            </div>
            <div className="h-80 overflow-hidden rounded-[2rem] border border-white/5 bg-stone-900 shadow-2xl">
              <Image
                src={Imagess}
                className="h-full w-full object-cover opacity-60 grayscale transition duration-700 hover:opacity-100 hover:grayscale-0"
                alt="Rituals"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
