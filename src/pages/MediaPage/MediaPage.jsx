import { useEffect } from "react";

import Header from "../../components/header/Header";
import Music from "../../components/music/Music";
import Gallery from "../../components/gallery/Gallery";
import Wallpaper from "../../components/wallpaper/Wallpaper";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

import img from "../../assets/body-bg-2.jpg";

const MediaPage = () => {
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
        <Music></Music>
        <Newsletter></Newsletter>
        <Gallery></Gallery>
        <Wallpaper></Wallpaper>
      </main>
      <Footer hideFooterTop={true}></Footer>
    </>
  );
};

export default MediaPage;
