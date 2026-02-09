'use client';
import { Bell, Clock, MapPin, Sparkles } from 'lucide-react';

const EventsPage = () => {
  const timelineData = [
    {
      date: '১৩ই এপ্রিল, ২০২৬',
      isSpecial: true,
      events: [
        {
          title: 'গঙ্গাস্নান',
          time: 'সকাল ৪:০০',
          location: 'ঘাটের পাড়',
          icon: '🌊',
          desc: 'পবিত্র গঙ্গা যাত্রার মাধ্যমে উৎসবের সূচনা।',
        },
        {
          title: 'গঙ্গাস্নান',
          time: 'সকাল ৪:০০',
          location: 'ঘাটের পাড়',
          icon: '🌊',
          desc: 'পবিত্র গঙ্গা যাত্রার মাধ্যমে উৎসবের সূচনা।',
        },
        {
          title: 'সংকল্প পূজা',
          time: 'সকাল ৮:৩০',
          location: 'মূল মন্দির',
          icon: '🙏',
          desc: 'ব্রতী ও সন্ন্যাসীদের বিশেষ সংকল্প।',
        },
      ],
    },
    {
      date: '১৪ই এপ্রিল, ২০২৬',
      events: [
        {
          title: 'নীল পূজা',
          time: 'সন্ধ্যা ৬:০০',
          location: 'শিবতলা',
          icon: '🕯️',
          desc: 'প্রদীপ প্রজ্বলন ও শিবের আরাধনা।',
        },
      ],
    },
    {
      date: '১৫ই মে, ২০২৬',
      isGap: true,
      events: [
        {
          title: 'বাৎসরিক মিলন মেলা',
          time: 'সকাল ১০:০০',
          location: 'মেলা প্রাঙ্গণ',
          icon: '🎪',
          desc: 'এক মাস পরের বিশেষ সমাপনী অনুষ্ঠান।',
        },
      ],
    },
  ];

  let eventCounter = 0;

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-32 font-sans text-white">
      <div className="mx-auto max-w-400">
        {' '}
        {/* কন্টেইনার একটু বাড়ানো হয়েছে জিজ-জ্যাগের জন্য */}
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-600/20 px-3 py-1 text-[10px] tracking-[0.4em] text-orange-400 uppercase">
            Rituals & Traditions
          </div>
          <h2 className="mb-6 text-5xl font-black tracking-tighter md:text-7xl">
            উৎসব <span className="text-orange-600">ক্যালেন্ডার</span>
          </h2>
          <p className="mx-auto max-w-xl text-gray-500 italic">
            পবিত্র চড়ক উৎসবের প্রতিটি মুহূর্তের বিস্তারিত সময়সূচি।
          </p>
        </div>
        {/* Vertical Timeline */}
        <div className="relative ml-4 border-l border-white/10 md:ml-0 md:flex md:flex-col md:items-center md:border-l-0">
          {/* Central Line for Desktop */}
          <div className="absolute top-0 left-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block"></div>

          {timelineData.map((day, idx) => (
            <div key={idx} className="relative mb-20 w-full">
              {/* Date Marker */}
              <div className="sticky top-24 z-20 mb-12 ml-6 flex justify-start md:ml-0 md:justify-center">
                <div className="flex items-center gap-4">
                  <div className="hidden h-3 w-3 rounded-full bg-orange-600 ring-4 ring-black md:block"></div>
                  <div
                    className={`rounded-full px-6 py-1.5 text-sm font-black tracking-widest uppercase shadow-2xl ${day.isSpecial ? 'bg-orange-600 text-white' : 'border border-white/5 bg-stone-900 text-orange-500'}`}
                  >
                    {day.date}
                  </div>
                </div>
              </div>

              {/* Event Cards Container */}
              <div className="ml-6 grid gap-12 md:ml-0">
                {day.events.map((event, eIdx) => {
                  const isLeft = eventCounter % 2 === 0;
                  eventCounter++; // প্রতিবার কাউন্টার বাড়ছে

                  return (
                    <div
                      key={eIdx}
                      className={`relative flex w-full flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                    >
                      {/* Timeline Dot on the line (Desktop Only) */}
                      <div className="absolute top-1/2 left-[-31px] hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-black bg-white ring-2 ring-orange-500 md:left-1/2 md:block md:-translate-x-1/2"></div>

                      {/* Card Content */}
                      <div
                        className={`group relative rounded-3xl border border-white/5 bg-stone-900/30 p-8 transition-all duration-500 hover:border-orange-500/30 hover:bg-stone-900/60 md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                      >
                        {/* Floating Icon */}
                        <div
                          className={`absolute -top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-stone-800 text-2xl shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-12 ${isLeft ? 'right-4 md:-left-4' : 'left-4 md:-right-4'}`}
                        >
                          {event.icon}
                        </div>

                        <div className="space-y-4">
                          <div
                            className={`flex items-center gap-3 text-orange-500 ${isLeft ? 'md:justify-end' : ''}`}
                          >
                            <Clock size={16} />
                            <span className="text-xs font-bold tracking-widest">{event.time}</span>
                          </div>

                          <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-orange-500">
                            {event.title}
                          </h4>

                          <p className="text-sm leading-relaxed text-gray-500">{event.desc}</p>

                          <div
                            className={`flex w-fit items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-3 py-1.5 text-[10px] tracking-widest text-gray-400 uppercase ${isLeft ? 'md:ml-auto' : ''}`}
                          >
                            <MapPin size={12} className="text-orange-600" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* End Marker */}
          <div className="absolute -bottom-10 left-[-10px] text-orange-600/50 md:left-1/2 md:-translate-x-1/2">
            <Sparkles size={24} />
          </div>
        </div>
        {/* Reminder CTA */}
        <div className="mt-40 rounded-[4rem] border border-orange-500/10 bg-gradient-to-b from-orange-600/10 to-transparent p-16 text-center">
          <Bell className="mx-auto mb-6 animate-bounce text-orange-500" size={40} />
          <h3 className="mb-4 text-3xl font-bold">অনুষ্ঠানের আপডেট পেতে চান?</h3>
          <p className="mb-8 text-gray-400">
            আমাদের ডিজিটাল পঞ্জিকায় চোখ রাখুন অথবা গ্রাম্য সমিতির সাথে যোগাযোগ করুন।
          </p>
          <button className="rounded-2xl bg-white px-12 py-5 font-black tracking-tighter text-black uppercase shadow-xl transition-all hover:bg-orange-500 hover:text-white">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
