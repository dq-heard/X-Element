import Card from "./Card.jsx";

import COD from "../../assets/warzone.jpg";
import Apex from "../../assets/apexlegends.jpg";
import Fortnite from "../../assets/fortnite.jpg";
import Paintball from "../../assets/paintball.jpg";

import "./cta.css";

const CTA = () => {
  return (
    <section className="cta" aria-label="Join us today" data-reveal="bottom">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          X Marks the Spot
        </p>

        <h1 className="h1 title cta-title" data-aos="fade-up">
          Build Your Legacy Here!
        </h1>

        <p className="section-text" data-aos="fade-up">
          As we continue to expand our portfolio and create more opportunities,
          our e-Sports origins remain at our core.
          <span className="span1">Tap into your power. Feed your fire.</span>
        </p>

        <ul className="teams-list">
          <Card
            className="team-card"
            src={COD}
            alt="Call of Duty: Warzone"
            title="CoD: Warzone"
          ></Card>

          <Card
            className="team-card"
            src={Apex}
            alt="Apex Legends"
            title="Apex Legends"
          ></Card>

          <Card
            className="team-card"
            src={Fortnite}
            alt="Fortnite"
            title="Fortnite"
          ></Card>

          <Card
            className="team-card paintball-card"
            src={Paintball}
            alt="Man in green jacket holding paintball marker"
            title="Paintball"
          ></Card>
        </ul>

        <div className="paintball-wrapper" data-aos="fade-right">
          <div className="paintball">
            <div className="image-wrapper">
              <img
                className="card-image"
                src={Paintball}
                alt="Man in green jacket holding paintball marker"
              />
              <div className="card-overlay"></div>
              <h3 className="card-heading">
                <a href="/team" className="card-title">
                  Paintball
                </a>
              </h3>
            </div>

            <div className="text-wrapper">
              <p className="paintball-desc">
                Are you trying to take your passion for gaming to the most
                extreme level? Step into the immersive arena of Paintball
                battles that go far beyond a screen.
                <br />
                <span className="span1">
                  Equipped with paintball markers and protective gear, our
                  players navigate thrilling maps relying on stealth, accuracy,
                  and teamwork to triumph over opponents.
                  <br />
                </span>
                <span className="span2">
                  We blend cunning tactics, lightning-fast reflexes, and
                  seamless coordination to dominate the competition and emerge
                  as champions of the Paintball field.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
