import astronauts from "../../assets/astronauts.png";

import "./elements.css";

const Elements = () => {
  return (
    <section className="section elements" aria-label="choose your element">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Choose an Element
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          Embrace Your <span className="span">Nature</span>
        </h2>

        <div className="natures">
          <div className="top-half">
            <div className="text-wrapper">
              <p className="section-subtitle" data-aos="fade-right">
                Our Squads:
              </p>

              <p className="team-nature fire" data-aos="fade-right">
                Our competitive players are represented by the element of
                <span> Fire. </span>
                These are the members who have earned the right to be on our
                team by forging their talents in the heat of online play.
              </p>

              <p className="team-nature wind" data-aos="fade-right">
                Content creators and our other non-competitive streamers are
                represented by the element of <span>Wind.</span> They announce
                our team's presence to the world and spread word of our
                achievements within the e-Sports landscape.
              </p>

              <p className="team-nature earth" data-aos="fade-right">
                <span>Earth</span> as an element represents our moderators, both
                on Discord and elsewhere. They help solidify our culture and
                ensure everyone has a positive experience while interacting with
                our channels.
              </p>
            </div>

            <div className="image-wrapper" data-aos="zoom-in">
              <img
                className="card-image"
                src={astronauts}
                alt="X Element astronauts gathered around logo"
              />
            </div>
          </div>

          <div className="bottom-half">
            <p className="team-nature water" data-aos="fade-right">
              The element of <span>Water</span> represents our friends and
              allies who see the vision and want to be a part of the community.
              Life can’t be sustained without it and we make sure to appreciate
              our supporters that keep the community growing with their
              enthusiasm and commitment.
            </p>

            <p className="team-nature spirit" data-aos="fade-right">
              At the core of our team is the <span>Spirit</span>, which
              represents our leadership and support staff. This includes our
              CEO, co-CEO, and other background members who help our players
              succeed or work behind the scenes for the brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elements;
