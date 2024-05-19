import { useEffect } from "react";

import Header from "../../components/header/Header";
import Staff from "../../components/staff/Staff";
import Roster from "../../components/roster/Roster";
import Prefooter from "../../components/footer/Prefooter";
import Footer from "../../components/footer/Footer";

import img from "../../assets/body-bg-5.jpg";
const TeamPage = () => {
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
      <Header></Header>
      <Staff></Staff>
      <Roster></Roster>
      <Prefooter></Prefooter>
      <Footer hideFooterTop={true}></Footer>
    </>
  );
};

export default TeamPage;
