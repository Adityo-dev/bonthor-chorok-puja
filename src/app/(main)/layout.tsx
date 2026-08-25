import HeritageNavbar from '@/components/HeritageNavbar';
import HeritageFooter from '@/components/main/MainFooter/HeritageFooter';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-charcoal-dark min-h-screen">
      <HeritageNavbar />
      {children}
      <HeritageFooter />
    </div>
  );
}
