'use client';
import { ArrowRight, Phone, ShieldCheck, Users } from 'lucide-react';

const applicationSteps = [
  {
    id: 1,
    text: 'পূজার অন্যূন এক সপ্তাহ পূর্বে মূল মন্দির প্রাঙ্গণে সশরীরে উপস্থিত হইয়া যোগাযোগ করিবেন।',
  },
  {
    id: 2,
    text: 'আপনার নাম, ধাম এবং মানতের প্রকার (যথা—দণ্ডী খাটা, বরুণালয় ইত্যাদি) যথাযথভাবে নথিবদ্ধ করাইবেন।',
  },
  {
    id: 3,
    text: 'পূজার দিবসে ব্রাহ্মমুহূর্তে পবিত্র স্নান সমাপন করিয়া শুদ্ধবস্ত্রে মন্দিরে উপস্থিত হওয়া একান্ত আবশ্যক।',
  },
];
const OathAndService = () => {
  return (
    <section className="min-h-screen bg-[#050505] px-6 py-40 font-sans text-white">
      <div className="mx-auto flex max-w-400 flex-col items-start gap-16 lg:flex-row">
        {/* বাম দিকের অংশ: শিরোনাম ও বর্ণনা */}
        <div className="space-y-12 lg:w-1/2">
          <div className="space-y-6">
            <h1 className="text-7xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">
              মানত <span className="text-orange-600">ও</span> <br /> সেবা
            </h1>
            <p className="max-w-lg text-lg leading-relaxed font-medium text-gray-400">
              বহু মানুষ তাদের মনের বাসনা পূর্ণ করতে অথবা কৃতজ্ঞতা জানাতে চড়ক পূজার দিন বিশেষ মানত
              করেন। আপনি যদি ২০২৬ সালের পূজার দিন কোনো সেবা নিতে চান, তবে এখান থেকে বিস্তারিত জানতে
              পারবেন।
            </p>
          </div>

          {/* ছোট কার্ড দুটি */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-[2.5rem] border border-white/5 bg-stone-900/40 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold">নিরাপদ ব্যবস্থা</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                কমিটির নিজস্ব স্বেচ্ছাসেবক বাহিনী আপনার সম্পূর্ণ নিরাপত্তা ও ধর্মীয় মর্যাদা নিশ্চিত
                করবে।
              </p>
            </div>

            <div className="space-y-4 rounded-[2.5rem] border border-white/5 bg-stone-900/40 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">গাইডেন্স</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                নতুন ভক্তদের জন্য অভিজ্ঞ সন্ন্যাসীগণ প্রতিটি আচার ও নিয়মাবলী সুন্দরভাবে বুঝিয়ে
                দেবেন।
              </p>
            </div>
          </div>
        </div>

        {/* ডান দিকের অংশ: সাদা আবেদন কার্ড (ইমেজ অনুযায়ী) */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-[4rem] bg-white p-10 text-black shadow-2xl md:p-16">
            {/* উপরের অরেঞ্জ কর্নার ডিজাইন */}
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rotate-45 bg-orange-600" />

            <div className="relative z-10">
              <h2 className="mb-12 flex items-center gap-4 text-4xl font-black md:text-5xl">
                আবেদনের তথ্য <ArrowRight className="text-orange-600" size={32} />
              </h2>

              <p className="mb-8 text-[10px] font-bold tracking-widest text-orange-600 uppercase">
                প্রয়োজনীয় ধাপসমূহ:
              </p>

              <div className="space-y-10">
                {applicationSteps.map((step) => (
                  <div key={step.id} className="flex items-start gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black font-bold text-white">
                      {step.id}
                    </div>
                    <p className="text-lg leading-snug font-bold text-gray-800">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* নিচের কন্টাক্ট সেকশন */}
              <div className="mt-20 flex items-center justify-between border-t border-gray-100 pt-10">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                    সেবায়েত দপ্তর:
                  </p>
                  <h4 className="mt-1 text-3xl font-black">+8801234567890</h4>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-600 text-white shadow-xl shadow-orange-600/30">
                  <Phone size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OathAndService;
