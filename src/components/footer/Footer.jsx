import logo from "../../assets/logo.png";

import "./footer.css";

const Footer = ({ hideFooterTop }) => {
  const footerTopClass = hideFooterTop
    ? "footer-top hide"
    : "section footer-top";

  return (
    <footer className="footer">
      <div className={footerTopClass}>
        <div className="container">
          <div className="footer-brand">
            <a href="/home" className="logo">
              <img
                src={logo}
                className="footer-logo"
                width="150"
                height="150"
                loading="lazy"
                alt="X-Element logo"
              />
            </a>

            <div className="footer-wrapper">
              <p className="footer-text">Check Out Our Socials!</p>

              <ul className="social-list">
                <li>
                  <a
                    href="https://www.facebook.com/groups/1176119786245217/?ref=share"
                    className="social-link"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@xelementgaming"
                    className="social-link"
                  >
                    <ion-icon name="logo-tiktok"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/x_elementgaming/"
                    className="social-link"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/channel/UCG9KpfH_p__Dacvsxd00Dzg"
                    className="social-link"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="twitch">
            <iframe
              src="https://player.twitch.tv/xelementgaming"
              height="180"
              width="320"
              allowFullScreen
            ></iframe>

            <p>Make sure to keep up with our official Twitch channel too!</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © {new Date().getFullYear()}&nbsp;X-Element LLC - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
