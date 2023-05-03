import Contact from 'features/portfolio/components/Sections/Contact';
import Hero from 'features/portfolio/components/Sections/Hero';
import React, { FunctionComponent } from 'react';
import Career from './Career';
import Projects from './Projects';
import About from './Sections/About';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  return (
    <div className='bg-bg w-full'>
      <Hero />
      <About />
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
  );
};

export default PortfolioPage;
