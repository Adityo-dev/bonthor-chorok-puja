'use client';
import { Compass, History, Landmark, Map, Quote, Scroll } from 'lucide-react';

const HistoryPage = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#080808] px-6 py-32 text-white">
      <div className="mx-auto max-w-400">
        {/* Header Section */}
        <div className="relative mb-32 text-center">
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]"></div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-stone-900 px-4 py-2 text-[10px] tracking-[0.5em] text-orange-500 uppercase">
            <History size={14} /> The Ancient Archive
          </div>
          <h2 className="mb-8 text-6xl leading-none font-black tracking-tighter md:text-8xl">
            অমর <span className="text-orange-600">ইতিবৃত্ত</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 italic">
            {`"কালচক্রের আবর্তনে বিস্মৃত সময়ের ধূলিমলিন পাণ্ডুলিপি হইতে সংগৃহীত আমাদের আদি চড়ক 
            বাড়ির গৌরবময় উপাখ্যান।"`}
          </p>
        </div>

        {/* Feature Grid: Story Sections */}
        <div className="mb-40 grid items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="flex items-center gap-4 text-orange-500">
              <Landmark size={32} />
              <div className="h-px w-20 bg-orange-500/30"></div>
            </div>
            <h3 className="text-4xl font-bold text-white">প্রতিষ্ঠার ইতিকথা</h3>
            <p className="font-sans text-lg leading-relaxed text-gray-400">
              {`জনশ্রুতি রহিয়াছে যে, শতবর্ষ পূর্বে এক অলৌকিক স্বপ্নাদেশ প্রাপ্ত হইয়া এই চড়ক ও শিবতলার গোড়াপত্তন করা হয়। 
              বোঁথড় গ্রামের তৎকালীন জমিদার ও ভক্তপ্রাণ সাধারণ মানুষের সম্মিলিত প্রচেষ্টায় এই পুণ্য প্রাঙ্গণটি 
              গড়িয়া উঠিয়াছে।`}
            </p>
            <div className="rounded-r-2xl border-l-4 border-orange-600 bg-stone-900/50 p-6">
              <p className="font-sans text-orange-200/80 italic">
                {`"সেই প্রাচীন বটবৃক্ষ আজও দণ্ডায়মান রহিয়াছে, যাহা আমাদের পূর্বপুরুষগণের সাধনার এক নীরব সাক্ষী।"`}
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="aspect-video overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578353120124-430fd6530005?q=80&w=1000"
                className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 hover:grayscale-0"
                alt="Ancient Temple"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden rounded-[2rem] bg-orange-600 p-8 shadow-2xl md:block">
              <span className="block text-4xl font-black">১০০+</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">
                বর্ষের পুরাতন ঐতিহ্য
              </span>
            </div>
          </div>
        </div>

        {/* Knowledge Blocks */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Scroll className="text-orange-500" />,
              title: 'সংরক্ষিত পাণ্ডুলিপি',
              desc: 'আমাদের নিকট অদ্যাবধি সংরক্ষিত রহিয়াছে সেই হস্তলিখিত প্রাচীন বিধি-বিধানের পাণ্ডুলিপি।',
            },
            {
              icon: <Compass className="text-orange-500" />,
              title: 'আধ্যাত্মিক দর্শন',
              desc: 'চড়ক কেবল একটি উৎসব নহে, ইহা জাগতিক মায়া হইতে মুক্তির এক সুগভীর আধ্যাত্মিক পরিক্রমা।',
            },
            {
              icon: <Map className="text-orange-500" />,
              title: 'বোঁথড় গ্রামের ঐতিহ্য',
              desc: 'এই জনপদের প্রতিটি ধূলিকণায় মিশিয়া রহিয়াছে গাজনের সংগীত আর শিবের প্রতি অকৃত্রিম ভক্তি।',
            },
          ].map((box, i) => (
            <div
              key={i}
              className="group rounded-[2.5rem] border border-white/5 bg-stone-900/30 p-10 transition-all hover:border-orange-500/30 hover:bg-stone-900/50"
            >
              <div className="mb-6 w-fit rounded-2xl bg-black p-4 transition-transform group-hover:scale-110">
                {box.icon}
              </div>
              <h4 className="mb-4 text-2xl font-bold">{box.title}</h4>
              <p className="font-sans leading-relaxed text-gray-500">{box.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusion Quote */}
        <div className="relative mt-40 border-y border-white/5 py-20 text-center">
          <Quote className="absolute top-10 left-1/2 -translate-x-1/2 text-white/5" size={120} />
          <h3 className="mx-auto max-w-4xl text-3xl leading-tight font-bold italic md:text-5xl">
            {`"স্মৃতিরা ম্লান হইয়া যায়, কিন্তু ঐতিহ্য অমর হইয়া থাকে প্রজন্মের হৃদয়ে।"`}
          </h3>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-orange-600"></div>
            <span className="text-xs font-black tracking-[0.3em] text-orange-500 uppercase">
              বংশপরম্পরায় এক অমর আখ্যান
            </span>
            <div className="h-px w-12 bg-orange-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;
