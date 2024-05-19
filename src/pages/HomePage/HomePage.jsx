import { useEffect } from "react";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Sponsor from "../../components/sponsor/Sponsor";
import CTA from "../../components/cta/CTA";
import Roles from "../../components/roles/Roles";
import Footer from "../../components/footer/Footer";

import img from "../../assets/body-bg-0.jpg";

const HomePage = () => {
  useEffect(() => {
    // Save original body background
    const originalBackground = document.body.style.backgroundImage;

    // Apply new background
    document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`;

    // Cleanup function to reset body background
    return () => {
      document.body.style.backgroundImage = originalBackground;
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <Header />
      <main>
        <Hero></Hero>
        <Sponsor></Sponsor>
        <CTA></CTA>
        <Roles></Roles>
      </main>
      <Footer hideFooterTop={false}></Footer>
    </>
  );
};

export default HomePage;
