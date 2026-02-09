import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import { History } from 'lucide-react';
import Image from 'next/image';

const HistorySection = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto grid max-w-400 items-center gap-12 lg:grid-cols-2">
        {/* Left Side: Text Content */}
        <div className="relative space-y-8">
          <div className="flex items-center gap-4">
            <div className="inline-block rounded-2xl bg-orange-600/20 p-4 text-orange-500">
              <History size={25} />
            </div>
            <h2 className="text-4xl leading-tight font-black text-white">
              সংরক্ষিত <span className="text-orange-600">পাণ্ডুলিপির</span> ইতিবৃত্ত
            </h2>
          </div>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-gray-400">
            <p>
              আমাদের নিকট রক্ষিত প্রাচীন পাণ্ডুলিপি অনুযায়ী, এই বোঁথড় গ্রামের চড়কবাড়ির ইতিহাস প্রায়
              সপ্তশত বর্ষের পুরাতন। বোঁথড় গ্রামের এই পবিত্র মন্দির প্রাঙ্গণটি শিব এবং শক্তির সাধনার
              অন্যতম মহাপীঠস্থান বলিয়া পরিগণিত হয়।
            </p>
            <p>
              ইহা কেবল বাহ্যিক প্রদর্শনী নহে, বরং দেবাদিদেব মহাদেবের প্রতি আত্মনিবেদনের এক সুগভীর
              আধ্যাত্মিক মার্গ। শাস্ত্রে উক্ত রহিয়াছে যে, চড়ক চক্রের সহিত আবর্তন করার অর্থ
              হইল—মহাবিশ্বের কালচক্রের সহিত নিজেকে একীভূত করা।
            </p>
          </div>
          <div className="border-l-4 border-orange-600 bg-stone-900/50 p-6 text-orange-200/80 italic">
            {`"বংশপরম্পরায় এই পবিত্র উত্তরদায়কিত্ব পালন করিয়া আসা আমাদের পরম সৌভাগ্যের বিষয়।" `}
          </div>
        </div>

        {/* Right Side: Image Grid & Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="h-80 overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
              <Image
                src={image1}
                className="h-full w-full object-cover opacity-60 grayscale transition duration-700 hover:opacity-100 hover:grayscale-0"
                alt="Tradition"
              />
            </div>
            <div className="space-y-2.5 rounded-2xl bg-gradient-to-br from-orange-600 to-red-800 p-8 text-center">
              <span className="block text-5xl font-black text-white">৭০০+</span>
              <span className="tracking-[0.3em] text-orange-100 uppercase">বর্ষের ঐতিহ্য</span>
            </div>
          </div>

          <div className="space-y-6 pt-12">
            <div className="space-y-2.5 rounded-2xl bg-gradient-to-bl from-orange-600 to-red-800 p-8 text-center">
              <span className="block text-5xl font-black text-white">১৩</span>
              <span className="tracking-[0.3em] text-orange-100 uppercase">প্রধান সন্ন্যাসী</span>
            </div>
            <div className="h-80 overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
              <Image
                src={image2}
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
