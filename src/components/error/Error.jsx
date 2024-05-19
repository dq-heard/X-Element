import Button from "../button/Button";

import Astronaut from "../../assets/loop.gif";

import "./error.css";

const Error = () => {
  return (
    <section className="error" aria-label="page not found">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Page Not Found
        </p>

        <h1 className="h1 title cta-title" data-aos="fade-up">
          404
        </h1>

        <div className="flex-container teams">
          <div className="image-wrapper" data-aos="zoom-in">
            <img
              className="card-image"
              src={Astronaut}
              alt="Multiple saluting astronauts in front of X Element logo"
            />
          </div>

          <p className="section-text" data-aos="fade-up">
            Sorry, the page you are looking for could not be found.
            <Button href="/home" text="Head Back Home" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;