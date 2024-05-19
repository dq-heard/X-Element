import logo from "../../assets/logo.png";

import "./identity.css";

const Identity = () => {
  return (
    <section className="section identity" aria-label="mission and identity">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          What Is X-Element?
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          Mission and <span className="span">Identity</span>
        </h2>

        <div className="mission" data-aos="fade-right">
          <article>
            <div className="image-wrapper">
              <img className="logo" src={logo} alt="X Element logo" />

              <p className="logo-text">
                The X-Element logo symbolizes the universal challenge that every
                one of us faces in our lives. The 'X' serves as a metaphor for
                the core issue that each of us must confront: "How do I carve my
                niche in this landscape?" The 'E' represents us as individuals
                and the power we possess as a group by tying our love for gaming
                into our professional aspirations, likening those skills to
                distinct elements. When they unite, they collectively decode
                this riddle, paving the way to a respected and renowned presence
                in e-Sports.
              </p>
            </div>

            <p className="p1">
              Believing in our dreams is the cornerstone of how we live, and at
              X-Element, we embody this belief by coaching talented athletes to
              become champions. We broadcast our Elements to the world,
              encouraging everyone to believe in themselves, because we do.
              X-Element is not just about creating winners, but about fostering
              a culture of success and self-belief.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Identity;
