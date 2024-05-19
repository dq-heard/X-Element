import welcome from "../../assets/welcome.png";

import "./hero.css";

const Hero = () => {
  return (
    <section className="section hero" aria-label="welcome to x element">
      <div className="container">
        <h2 className="h2 section-title" data-aos="fade-up">
          Welcome to <span className="span">X-Element</span>
        </h2>

        <p className="section-text" data-aos="fade-up">
          We are a Lifestyle, Sports, and Media company that's growing daily.
          What are you waiting for? Embrace your element with us.
        </p>

        <div className="banner" data-aos="fade-up">
          <div className="neon-border-top"></div>
          <img src={welcome} alt="X Element Banner" />
          <div className="neon-border-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
