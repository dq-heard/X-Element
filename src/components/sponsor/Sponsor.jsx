import Button from "../button/Button";

import logo from "../../assets/glytch.webp";
import wordmark from "../../assets/glytch(1).webp";

import "./sponsor.css";

const Sponsor = () => {
  return (
    <section className="section sponsor" aria-label="glytch energy sponsor">
      <div className="container">
        <p className="section-subtitle">We've Joined Forces</p>

        <h2 className="h2 section-title">
          With <span className="span">Glytch</span> Energy
        </h2>

        <div className="glytch">
          <div className="image-wrapper">
            <img className="logo" src={logo} alt="Glytch Energy logo" />

            <p className="logo-text">
              We need <strong>YOUR</strong> help to spread the word! ⚡️ Power
              up your game with our exclusive collaboration! Use code:
              "X-Element" for 20% off Glytch products!
              <img
                className="wordmark"
                src={wordmark}
                alt="Glytch Energy logo"
              />
              <Button
                href="https://www.glytchenergy.com"
                text="Glytch Energy"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
