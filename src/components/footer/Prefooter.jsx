import Button from "../button/Button";
import logo from "../../assets/logo.png";

import "./prefooter.css";

const Prefooter = () => {
  return (
    <section className="prefooter">
      <div className="section full-footer">
        <div className="container">
          <div className="footer-brand">
            <a href="/home" className="logo">
              <img
                src={logo}
                className="footer-logo"
                width="150"
                height="150"
                loading="lazy"
                alt="X Element logo"
              />
            </a>

            <div className="footer-wrapper">
              <p className="footer-text">Follow Our Socials!</p>

              <ul className="social-list">
                <li>
                  <a
                    href="https://www.facebook.com/groups/1176119786245217/?ref=share"
                    className="social-link"
                  >
                    <ion-icon
                      name="logo-facebook"
                      role="img"
                      className="md hydrated"
                      aria-label="logo facebook"
                    ></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@xelementgaming"
                    className="social-link"
                  >
                    <ion-icon
                      name="logo-tiktok"
                      role="img"
                      className="md hydrated"
                      aria-label="logo tiktok"
                    ></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/x_elementgaming/"
                    className="social-link"
                  >
                    <ion-icon
                      name="logo-instagram"
                      role="img"
                      className="md hydrated"
                      aria-label="logo instagram"
                    ></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/channel/UCG9KpfH_p__Dacvsxd00Dzg"
                    className="social-link"
                  >
                    <ion-icon
                      name="logo-youtube"
                      role="img"
                      className="md hydrated"
                      aria-label="logo youtube"
                    ></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">Useful Links</p>

            <ul>
              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/membership_agrement_2.1%20(2)%20(3).pdf"
                  className="footer-link"
                >
                  Member's Agreement
                </a>
              </li>

              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/NON-DISCRIMINATION_AGREEMENT-2.1%20(7)%20(2)%20(1).pdf"
                  className="footer-link"
                >
                  Non-Discrimination
                </a>
              </li>

              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/Parents_Agreement-_X_Element-2.1%20(1)%20(1).pdf"
                  className="footer-link"
                >
                  Responsibilities
                </a>
              </li>

              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="footer-link">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">Contact Us</p>

            <div className="contact-item">
              <span className="span">Location:</span>

              <address className="contact-link">
                Junction City, KS 66441
              </address>
            </div>

            <div className="contact-item">
              <span className="span">Join Us:</span>

              <a
                href="mailto:officialxelement@gmail.com"
                className="contact-link"
              >
                officialxelement@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">
              Newsletter Signup
            </p>

            <form action="#" method="get" className="footer-form">
              <input
                type="email"
                name="email_address"
                required=""
                placeholder="Your E-mail"
                autoComplete="off"
                className="input-field"
              />

              <Button
                type="submit"
                text="Subscribe Now"
                className="btn"
                data-btn=""
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
