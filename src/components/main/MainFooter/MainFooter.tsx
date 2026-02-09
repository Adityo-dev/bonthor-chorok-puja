import { Camera, Heart, MapPin, PlayCircle, Scroll, Users } from 'lucide-react';

const MainFooter = () => {
  return (
    <footer className="border-t border-white/5 bg-black pt-32 pb-16">
      <div className="mx-auto grid max-w-400 gap-16 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand & About */}
        <div className="space-y-8 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-br from-orange-600 to-red-800 p-2 shadow-lg shadow-orange-900/20 transition-transform group-hover:rotate-12">
              <Scroll size={28} className="text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-lg font-black tracking-tighter text-transparent sm:text-2xl">
              {/* bonthor chorok puja */}
              বোঁথড় চড়ক পূজা
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-gray-500 italic">
            {`"মৃত্যুরূপী এই কালচক্র থেকে মুক্তির একমাত্র পথ হলো দেব-আরাধনা ও শুদ্ধ ভক্তি।" — জয়
            মহাদেব।`}
          </p>
          <div className="flex gap-6">
            {[PlayCircle, Camera, Users, Heart].map((Icon, i) => (
              <button
                key={i}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-gray-500 transition-all hover:bg-orange-500/10 hover:text-orange-500"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Menu */}
        <div className="space-y-8">
          <h5 className="text-xs font-bold tracking-[0.4em] text-white uppercase">মেনু</h5>
          <div className="flex flex-col gap-4 font-sans text-sm text-gray-500">
            <button
              // onClick={() => setActiveTab('home')}
              className="text-left transition-colors hover:text-orange-500"
            >
              প্রচ্ছদ
            </button>
            <button
              // onClick={() => setActiveTab('lineage')}
              className="text-left transition-colors hover:text-orange-500"
            >
              সন্ন্যাসীগণ
            </button>
            <button
              // onClick={() => setActiveTab('events')}
              className="text-left transition-colors hover:text-orange-500"
            >
              আচার ও রুটিন
            </button>
            <button className="text-left transition-colors hover:text-orange-500">
              দান ও অনুদান
            </button>
          </div>
        </div>

        {/* Location Info */}
        <div className="space-y-8">
          <h5 className="text-xs font-bold tracking-[0.4em] text-white uppercase">লোকেশন</h5>
          <div className="flex items-start gap-4 font-sans text-sm leading-relaxed text-gray-500">
            <MapPin className="mt-1 shrink-0 text-orange-600" size={20} />
            <p>বোঁথড় গ্রাম, ঐতিহাসিক চড়ক প্রাঙ্গণ, [পাবনা জেলার / চাটমোহর উপজেলার], বাংলাদেশ।</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      {/* <div className="mx-auto mt-32 flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-white/5 px-6 pt-10 text-center font-sans md:flex-row md:text-left">
        <p className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase">
          © ২০২৬ বন্ধু চড়ক পূজা কর্তৃপক্ষ | ডিজিটাল আর্কাইভ প্রজেক্ট
        </p>
        <div className="flex items-center gap-8 text-[10px] font-black tracking-widest text-gray-600 uppercase">
          <span className="cursor-pointer transition-colors hover:text-orange-600">
            প্রাইভেসি পলিসি
          </span>
          <span className="cursor-pointer transition-colors hover:text-orange-600">
            টার্মস অফ ইউজ
          </span>
        </div>
      </div> */}
    </footer>
  );
};

export default MainFooter;
