import { useEffect } from "react";

import Header from "../../components/header/Header";
import Merch from "../../components/merch/Merch";
import Apparel from "../../components/merch/Apparel";
import Support from "../../components/support/Support";
import Footer from "../../components/footer/Footer";

import img from "../../assets/body-bg-3.webp";

const GearPage = () => {
  useEffect(() => {
    // Save original body background
    const originalBackground = document.body.style.backgroundImage;

    // Apply new background
    document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${img})`;

    // Cleanup function to reset body background
    return () => {
      document.body.style.backgroundImage = originalBackground;
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  return (
    <>
      <Header />
      <main>
        <Merch></Merch>
        <Apparel></Apparel>
        <Support></Support>
      </main>
      <Footer hideFooterTop={true}></Footer>
    </>
  );
};

export default GearPage;
