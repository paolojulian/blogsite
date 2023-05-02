import Career from 'features/portfolio/components/Sections/Career';
import Contact from 'features/portfolio/components/Sections/Contact';
import Hero from 'features/portfolio/components/Sections/Hero';
import Projects from 'features/portfolio/components/Sections/Projects';
import MainLayout from 'layouts/MainLayout';
import React, { FunctionComponent } from 'react';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  return (
    <MainLayout>
      <div className='bg-[#181a25] w-full'>
        <Hero />
        <Projects />
        <Career />
        <Contact
          name='Paolo Vincent M. Julian'
          course='Software Engineer'
          email='paolojulian.personal@gmail.com'
          address='#100 Upper Dagsian, Baguio City'
          mobileNo='+639279488654'
        />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
