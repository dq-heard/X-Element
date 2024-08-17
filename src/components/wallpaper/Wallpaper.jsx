import Button from "../button/Button";

import img from "../../assets/Wallpaper 1 Preview.webp";
import img2 from "../../assets/Wallpaper 2 Preview.webp";
import img3 from "../../assets/Wallpaper 3 Preview.webp";
import img4 from "../../assets/Wallpaper 4 Preview.webp";
import img5 from "../../assets/Wallpaper 5 Preview.webp";

import file from "../../assets/XElement Wallpaper 1.png";
import file2 from "../../assets/XElement Wallpaper 2.png";
import file3 from "../../assets/XElement Wallpaper 3.png";
import file4 from "../../assets/XElement Wallpaper 4.png";
import file5 from "../../assets/XElement Wallpaper 5.png";

import "./wallpaper.css";

const Wallpaper = () => {
  return (
    <section
      className="section wallpapers"
      aria-label="Wallpapers for Mobile/Desktop"
    >
      <div className="container">
        <p className="section-subtitle">Show Your Pride With</p>

        <h2 className="h2 section-title">
          Exclusive <span className="span">Wallpapers</span>
        </h2>

        <ul className="mobile-list">
          <li data-aos="zoom-in">
            <div className="preview-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 210, height: 300 }}
              >
                <img
                  src={img}
                  width="210"
                  height="300"
                  loading="lazy"
                  alt="Innovative Business All Over The World."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Button
                  href={file}
                  className="card-tag"
                  text="Download"
                  download
                ></Button>
              </div>
            </div>
          </li>

          <li data-aos="zoom-in">
            <div className="preview-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 300, height: 300 }}
              >
                <img
                  src={img5}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Button
                  href={file5}
                  className="card-tag"
                  text="Download"
                  download
                ></Button>
              </div>
            </div>
          </li>
        </ul>

        <ul className="desktop-list">
          <li data-aos="zoom-in">
            <div className="preview-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 300, height: 212 }}
              >
                <img
                  src={img2}
                  width="300"
                  height="212"
                  loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Button
                  href={file2}
                  className="card-tag"
                  text="Download"
                  download
                ></Button>
              </div>
            </div>
          </li>

          <li data-aos="zoom-in">
            <div className="preview-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 300, height: 212 }}
              >
                <img
                  src={img3}
                  width="300"
                  height="212"
                  loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Button
                  href={file3}
                  className="card-tag"
                  text="Download"
                  download
                ></Button>
              </div>
            </div>
          </li>

          <li data-aos="zoom-in">
            <div className="preview-card">
              <figure
                className="card-banner img-holder"
                style={{ width: 300, height: 212 }}
              >
                <img
                  src={img4}
                  width="300"
                  height="212"
                  loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Button
                  href={file4}
                  className="card-tag"
                  text="Download"
                  download
                ></Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Wallpaper;
