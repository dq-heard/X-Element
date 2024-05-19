import img from "../../assets/rs=w_600,cg_true,m.webp";
import img2 from "../../assets/rs=w_600,cg_true.webp";
import img3 from "../../assets/rs=w_600,cg_true (1).webp";
import img4 from "../../assets/rs=w_600,cg_true,m (1).webp";
import img5 from "../../assets/rs=w_600,cg_true,m (2).webp";
import img6 from "../../assets/rs=w_600,cg_true,m (3).webp";
import img7 from "../../assets/rs=w_600,cg_true,m (4).webp";
import img8 from "../../assets/rs=w_600,cg_true,m (5).webp";
import img9 from "../../assets/rs=w_600,cg_true,m (6).webp";
import img10 from "../../assets/rs=w_600,cg_true,m (7).webp";
import img11 from "../../assets/rs=w_600,cg_true,m (8).webp";
import img12 from "../../assets/rs=w_600,cg_true,m (9).webp";
import img13 from "../../assets/rs=w_600,cg_true,m (10).webp";
import img14 from "../../assets/rs=w_600,cg_true,m (11).webp";
import img15 from "../../assets/rs=w_600,cg_true,m (12).webp";
import img16 from "../../assets/rs=w_600,cg_true,m (13).webp";

import Button from "../button/Button";

import "./gallery.css";

const Gallery = () => {
  return (
    <section className="section gallery" aria-hidden="true">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Discover New Heights
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          <span className="span">Elevate</span> Your Game
        </h2>

        <p className="section-text" data-aos="fade-up">
          Are you ready to rise to the top and carve your path to eternal glory?
          X-Element is your ticket to greatness. Join our ranks and unlock your
          true potential. The time is now!
          <Button
            href="https://discord.com/invite/WuNtgnB6Hp"
            text="Join Our Team"
          />
        </p>
      </div>
      <div className="scroll-container">
        <img src={img} alt="Cinque Terre" />
        <img src={img2} alt="Forest" />
        <img src={img3} alt="Northern Lights" />
        <img src={img4} alt="Mountains" />
        <img src={img5} alt="Cinque Terre" />
        <img src={img6} alt="Forest" />
        <img src={img7} alt="Northern Lights" />
        <img src={img8} alt="Mountains" />
        <img src={img9} alt="Cinque Terre" />
        <img src={img10} alt="Forest" />
        <img src={img11} alt="Northern Lights" />
        <img src={img12} alt="Mountains" />
        <img src={img13} alt="Cinque Terre" />
        <img src={img14} alt="Forest" />
        <img src={img15} alt="Northern Lights" />
        <img src={img16} alt="Mountains" />
      </div>
    </section>
  );
};

export default Gallery;
