import shield from "../../assets/shield.jpg";

import "./culture.css";

const Culture = () => {
  return (
    <section className="section culture" aria-label="our culture">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Upholding Our Code
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          <span className="span">Integrity</span> and Respect
        </h2>

        <div className="container" data-aos="fade-right">
          <div className="text-wrapper">
            <div className="culture-desc" data-aos="fade-right">
              <div className="image-wrapper">
                <img
                  className="shield-logo"
                  src={shield}
                  alt="X Element shield logo"
                />

                <p>
                  X-Element fosters a vibrant community founded with a desire to
                  embrace unity and camaraderie, providing a hospitable
                  environment to connect while we all celebrate our shared
                  passion for gaming. We organize tournaments and events that
                  create friendships & unforgettable moments.
                </p>
                <br />
              </div>
              <p className="p1" data-aos="fade-right">
                Furthermore, we're proud to have members excelling in their
                collegiate endeavors. They represent our organization with
                dedication and skill, showcasing the incredible talent that
                emerges from our ranks. We support and congratulate their
                academic achievements, combining the pursuit of education with
                chasing e-Sports greatness.
                <br />
              </p>
              <p className="p2" data-aos="fade-right">
                We invite you to connect with us and eagerly await interactions
                with fellow gamers, sponsors, and industry professionals as we
                forge our path within this space and inspire a new generation to
                discover their X-Element.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
