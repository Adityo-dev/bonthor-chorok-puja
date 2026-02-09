import MainFooter from '@/components/main/MainFooter/MainFooter';
import NavigationBar from '@/components/main/NavigationBar/NavigationBar';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavigationBar />
      {children}
      <MainFooter />
    </main>
  );
};

export default MainLayout;
