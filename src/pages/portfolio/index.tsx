import Career from "features/portfolio/components/Career";
import Contact from "features/portfolio/components/Contact";
import LandingPage from "features/portfolio/components/LandingPage";
import Projects from "features/portfolio/components/Projects";
import MainLayout from "layouts/MainLayout";
import React, { FunctionComponent } from "react";

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  return (
    <MainLayout>
      <div className="bg-bg w-full">
        <LandingPage />
        <Projects />
        <Career />
        <Contact
          name="Paolo Vincent M. Julian"
          course="Software Engineer"
          email="paolojulian.personal@gmail.com"
          address="#100 Upper Dagsian, Baguio City"
          mobileNo="+639279488654"
        />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
