'use client';
import { Award, History, MapPin, Sparkles, User, Users } from 'lucide-react';

import Image from 'next/image';
import { assistants, externalMonks, pastLegends, thirteenBits } from './data/Lineage.data';

const LineagePage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const UniversalCard = ({ data, i }: { data: any; i: number }) => (
    <div
      key={i}
      className="group flex flex-col items-center gap-6 rounded-[3rem] border border-white/5 bg-stone-900/20 p-8 transition-all duration-500 hover:border-orange-500/30 lg:flex-row"
    >
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[2rem] border border-white/10">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.name}
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-stone-800/50 p-4 text-center text-[10px] text-stone-600 italic">
            <User size={24} className="mb-1 opacity-20" />
            ছবি নেই
          </div>
        )}
      </div>
      <div className="flex-1 space-y-3 text-center lg:text-left">
        <h4 className="text-xl font-bold text-white uppercase transition-colors group-hover:text-orange-500">
          {data.name}
        </h4>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black tracking-widest text-orange-500 uppercase">
            {data.role}
          </span>
          <span className="font-sans text-[10px] font-bold text-gray-600 uppercase">
            {data.period}
          </span>
        </div>
        <p className="line-clamp-2 font-sans text-xs leading-relaxed text-gray-500 italic">
          {data.desc}
        </p>
        <div className="flex items-center justify-center gap-1 text-[9px] text-gray-600 lg:justify-start">
          <MapPin size={10} className="text-orange-500" /> {data.address}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen pb-40 text-white selection:bg-orange-600/30">
      <div className="sticky top-20 z-50 border-b border-white/5 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl justify-center gap-3 overflow-x-auto px-6 whitespace-nowrap">
          {[
            { name: '১৩ বিট', id: '13-bits' },
            { name: 'সহকারীগণ', id: 'assistants' },
            { name: 'বংশধারা', id: 'history' },
            { name: 'আগত সন্ন্যাসী', id: 'externals' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => scrollToSection(btn.id)}
              className="rounded-full border border-orange-600/30 bg-orange-600/10 px-5 py-2 text-[10px] font-black text-orange-500 uppercase transition-all hover:bg-orange-600 hover:text-white"
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20">
        {/* ১. বর্তমান ১৩ বিট */}
        <div id="13-bits" className="mb-40">
          <SectionTitle title="বর্তমান ১৩ বিট" icon={<Award size={48} />} color="text-orange-600" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {thirteenBits.map((monk, i) => (
              <UniversalCard key={i} data={monk} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-sm text-gray-500 italic">
            "এই ১৩ জন পবিত্র সন্ন্যাসী উৎসবের প্রধান স্তম্ভ, যাঁরা যুগ যুগ ধরে এই গাজন উৎসবের সংকল্প
            ও নিয়মাবলী কঠোরভাবে রক্ষা করে চলেছেন।"
          </p>
        </div>

        {/* ২. সহকারী সন্ন্যাসী */}
        <div id="assistants" className="mb-40">
          <SectionTitle
            title="সহকারী সন্ন্যাসীবৃন্দ"
            icon={<Users size={48} />}
            color="text-orange-500"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {assistants.map((monk, i) => (
              <UniversalCard key={i} data={monk} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-sm text-gray-500 italic">
            "সহকারী সন্ন্যাসীগণ হলেন উৎসবের প্রাণশক্তি। প্রধান সন্ন্যাসীদের প্রতিটি ধাপে সহযোগিতা
            এবং সেবা দেওয়াই তাঁদের মূল ব্রত।"
          </p>
        </div>

        {/* ৩. অমর বংশধারা */}
        <div id="history" className="mb-40">
          <SectionTitle title="অমর বংশধারা" icon={<History size={48} />} color="text-gray-400" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pastLegends.map((monk, i) => (
              <UniversalCard key={i} data={monk} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-sm text-gray-500 italic">
            "অতীতের এই ত্যাগী পুরুষদের স্মৃতি আমাদের হৃদয়ে চিরকাল অম্লান থাকবে। তাঁদের প্রদর্শিত
            পথেই আজ আমরা এগিয়ে চলছি।"
          </p>
        </div>

        {/* ৪. আগত সন্ন্যাসী */}
        <div id="externals">
          <SectionTitle
            title="আগত সন্ন্যাসীবৃন্দ"
            icon={<Sparkles size={48} />}
            color="text-yellow-500"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {externalMonks.map((monk, i) => (
              <UniversalCard key={i} data={monk} i={i} />
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center font-sans text-sm text-gray-500 italic">
            "বহিরাগত সকল সন্ন্যাসী ও ভক্তবৃন্দকে আমরা শ্রদ্ধার সাথে বরণ করি। আপনাদের উপস্থিতি আমাদের
            উৎসবকে পূর্ণতা দান করে।"
          </p>
        </div>
      </div>
    </section>
  );
};

// টাইটেল কম্পোনেন্ট
const SectionTitle = ({ title, icon, color }: any) => (
  <div className="text-center">
    <div className={`mb-6 flex justify-center opacity-40 ${color}`}>{icon}</div>
    <h2 className="text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
      {title.split(' ')[0]} <span className="text-orange-600">{title.split(' ')[1] || ''}</span>
    </h2>
    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-600" />
  </div>
);

export default LineagePage;
