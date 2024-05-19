import { useEffect } from "react";

import Header from "../../components/header/Header";
import Identity from "../../components/identity/Identity";
import Elements from "../../components/elements/Elements";
import Culture from "../../components/culture/Culture";
import Connect from "../../components/connect/Connect";
import Prefooter from "../../components/footer/Prefooter";
import Footer from "../../components/footer/Footer";

import img from "../../assets/body-bg-1.jpg";

const AboutPage = () => {
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
        <Identity></Identity>
        <Elements></Elements>
        <Culture></Culture>
        <Connect></Connect>
        <Prefooter></Prefooter>
      </main>
      <Footer hideFooterTop={true}></Footer>
    </>
  );
};

export default AboutPage;
