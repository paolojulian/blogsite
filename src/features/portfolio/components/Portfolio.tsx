import Hero from 'features/portfolio/components/Sections/Hero';
import React, { FunctionComponent } from 'react';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Projects from './Projects';

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
