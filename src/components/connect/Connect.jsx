import Button from "../button/Button";

import "./connect.css";

const Connect = () => {
  return (
    <section className="section connect">
      <div className="container">
        <p className="section-subtitle revealed">
          Questions, Comments, Concerns?
        </p>

        <h2 className="h2 section-title revealed">
          <span className="span">Connect</span> With Us
        </h2>

        <form className="contact-form" method="POST">
          <div className="contact-inputs">
            <div className="contact-content">
              <label for="" className="contact-label">
                Name:
              </label>
              <input
                type="text"
                className="contact-input"
                name="name"
                required=""
              />
            </div>

            <div className="contact-content">
              <label for="" className="contact-label">
                E-mail:
              </label>
              <input
                type="email"
                className="contact-input"
                name="email"
                required=""
              />
            </div>
          </div>

          <div className="contact-content">
            <label for="" className="contact-label">
              Message:
            </label>
            <textarea
              className="contact-input"
              name="message"
              cols="0"
              rows="7"
              required=""
            ></textarea>
          </div>

          <Button type="submit" text="Send Message" className="btn" />

          <input type="hidden" name="_subject" value="Contact Form Submitted" />
          <input type="hidden" name="_honeypot" value="" />
        </form>
      </div>
    </section>
  );
};

export default Connect;
