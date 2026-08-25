
import HeroSection from '@/components/home/HeroSection';
import HistoryIntroSection from '@/components/home/HistoryIntroSection';
import MahadevSection from '@/components/home/MahadevSection';
import RitualIntroSection from '@/components/home/RitualIntroSection';
import CharakTreeSection from '@/components/home/CharakTreeSection';
import PeopleSection from '@/components/home/PeopleSection';
import MelaSection from '@/components/home/MelaSection';
import OralHistorySection from '@/components/home/OralHistorySection';
import TimelineSection from '@/components/home/TimelineSection';
import LocationSection from '@/components/home/LocationSection';
import GallerySection from '@/components/home/GallerySection';


export default function Home() {
  return (
    <main className="bg-charcoal-dark min-h-screen">
      <HeroSection />
      <HistoryIntroSection />
      <MahadevSection />
      <RitualIntroSection />
      <CharakTreeSection />
      <PeopleSection />
      <MelaSection />
      <OralHistorySection />
      <TimelineSection />
      <LocationSection />
      <GallerySection />
    </main>
  );
}
