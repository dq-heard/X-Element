import img from "../../assets/cr=w_1240,h_620.webp";
import paypal from "../../assets/rs=h_100,cg_true.webp";
import cashapp from "../../assets/rs=h_100,cg_true (3).webp";
import gofundme from "../../assets/rs=h_100,cg_true (1).webp";
import venmo from "../../assets/rs=h_100,cg_true (2).webp";

import "./support.css";

const Support = () => {
  return (
    <section className="section support" aria-label="how to join">
      <div className="container">
        <p className="section-subtitle">How You Can Help</p>

        <h2 className="h2 section-title">
          <span className="span">Support</span> the Team
        </h2>

        <div className="donate">
          <div className="img-wrapper">
            <img src={img} alt="Black Believe in Yourself apparel" />
          </div>

          <p className="reason">
            X-Element is actively seeking financial support to send its teams to
            Kansas City's Midwest Fest for their first LAN performance June 7-9.
            <br />
            <br />
            The required funds for this approximate to $20,000, with a minimum
            threshold of $7,500 needed to ensure our participation.
            <br />
            <br />
            We welcome and appreciate donations of any size, and anyone
            contributing $50 or more will receive special acknowledgments from
            X-Element as a token of gratitude.
            <br />
            <br />
            Your support will play a crucial role in making this opportunity a
            reality.
          </p>

          <div className="link-wrapper">
            <div className="neon-border-top"></div>
            <ul className="social-list">
              <li>
                <a
                  href="https://www.paypal.me/XElement"
                  className="social-link"
                >
                  <img src={paypal} alt="X Element PayPal link" />
                </a>
              </li>

              <li>
                <a
                  href="https://cash.app/$OfficialXElement"
                  className="social-link"
                >
                  <img src={cashapp} alt="X Element Cash App link" />
                </a>
              </li>

              <li>
                <a href="https://gofund.me/f5cdd8ea" className="social-link">
                  <img src={gofundme} alt="X Element Go Fund Me link" />
                </a>
              </li>

              <li>
                <a
                  href="https://venmo.com/code?user_id=3750577657873857310"
                  className="social-link"
                >
                  <img src={venmo} alt="X Element Venmo link" />
                </a>
              </li>
            </ul>
          </div>

          <p className="tiers">
            Donations: <br />
            <span>(Tier 1 = $50)</span> Shirt - 50 Available
            <br />
            <span>(Tier 2 = $100)</span> Hat & Shirt - 25 Available
            <br />
            <span>(Tier 3 = $200)</span> Hoodie, Hat, & Shirt - 25 Available
            <br />
            <br />
            Please allow 8-12 weeks for shipping.
            <br />
            E-mail all personal info for shipping and sizes&nbsp;
            <a
              href="mailto:officialxelement@gmail.com"
              className="contact-link"
            >
              here.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
