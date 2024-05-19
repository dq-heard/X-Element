import Button from "../button/Button";

import Apex from "../../assets/apex.png";
import Fortnite from "../../assets/fortnite.png";
import Warzone from "../../assets/warzone.png";

import "../staff/staff.css";
import "./roster.css";

const Roster = () => {
  return (
    <section className="section roster" aria-label="team roster breakdown">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Preparing for Takeoff
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          <span className="span">Current</span> Rosters
        </h2>
      </div>

      <div className="roster-wrapper container" data-aos="fade-right">
        <div className="teams apex">
          <div className="image-wrapper">
            <img
              className="card-image"
              src={Apex}
              alt="Apex Legends tryout graphic"
            />
          </div>

          <div className="text-wrapper">
            <p className="roster-desc">
              <a className="member-link" href="https://www.twitch.tv/liipo_">
                Lipo
              </a>
              ,{" "}
              <a
                className="member-link"
                href="https://www.twitch.tv/xelnaughtyy"
              >
                Naughty
              </a>
              , &{" "}
              <a
                className="member-link"
                href="https://www.twitch.tv/blu3chr0n1c"
              >
                Blu3Chr0n1c
              </a>
              , a recently established team in Apex Legends, have successfully
              qualified for the third round of the ALGS (Apex Legends Global
              Series).
              <span className="span1">
                For more about the Apex Team, head over to the Official
                X-Element Discord. For inquiries or bookings, contact
                Philosophyz
                <Button
                  href="https://discord.com/invite/WuNtgnB6Hp"
                  text="Join Our Discord"
                ></Button>
              </span>
            </p>
          </div>
        </div>
        <div className="neon-border-bottom"></div>
      </div>

      <div className="roster-wrapper container" data-aos="fade-left">
        <div className="teams fortnite">
          <div className="image-wrapper">
            <img
              className="card-image"
              src={Fortnite}
              alt="Fortnite Tryout graphic"
            />
          </div>

          <div className="text-wrapper">
            <p className="roster-desc">
              Competing in e-Sports for six years, Jeralz has excelled in
              iRacing with substantial earnings and made it to the third round
              of the Fortnite Championship Series (FNCS).
              <span className="span1">
                Learn more about Jeralz by following his socials.
              </span>
            </p>
            <ul className="social-list">
              <li>
                <a href="https://www.twitch.tv/jeralz_" className="social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@jeralz_"
                  className="social-link"
                >
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/jeralz_fr"
                  className="social-link"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@Jeralz1"
                  className="social-link"
                >
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="neon-border-bottom"></div>
      </div>

      <div className="roster-wrapper container" data-aos="fade-right">
        <div className="teams warzone">
          <div className="image-wrapper">
            <img
              className="card-image"
              src={Warzone}
              alt="Call of Duty Warzone graphic"
            />
          </div>

          <div className="text-wrapper">
            <p className="roster-desc">
              Under the leadership of former semi-pro player FaZeBella, our Call
              of Duty team has reached the second round of the CDL (Call of Duty
              League).
              <span className="span1">
                For more about the Warzone Team, head over to the Official
                X-Element Discord. For inquiries or bookings, contact Bella.
                <Button
                  href="https://discord.com/invite/WuNtgnB6Hp"
                  text="Join Our Discord"
                ></Button>
              </span>
            </p>
          </div>
        </div>
        <div className="neon-border-bottom"></div>
      </div>

      <div className="roster-wrapper container" data-aos="zoom-in">
        <div className="teams paintball">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/8gKoF6ZUyt0?si=5ClMyB2ToImyJY5T"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-wrapper">
            <p className="roster-desc">
              The X-Element Paintball Team is a skilled, competitive group
              defined by its strategic gameplay and camaraderie. Led by
              Paintball Coach Texn, we stand tall in any arena.
              <span className="span1">
                For more about the Paintball Team, head over to the Official
                X-Element Discord. For inquiries or bookings, contact Texn.
                <Button
                  href="https://discord.com/invite/WuNtgnB6Hp"
                  text="Join Our Discord"
                ></Button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roster;
