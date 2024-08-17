import Spirit from "./Spirit";
import "./staff.css";

const STAFF_MEMBERS = [
  {
    title: "Chief Executive Officer",
    members: [{ name: "King Aaron", url: "https://www.aaronsheltrown.com/" }],
  },
  {
    title: "Chief Marketing Officer",
    members: [{ name: "BigBigSpoon", url: "https://bigbigspoon.com/" }],
  },
  {
    title: "Paintball Coach",
    members: [
      { name: "Texn", url: "https://www.tiktok.com/@xelement.paintball" },
    ],
  },
  {
    title: "Apex Legends Coach",
    members: [{ name: "Philosophyz", url: "https://linktr.ee/xphilosophyz" }],
  },
  {
    title: "Call of Duty Asst. Coaches",
    members: [
      { name: "Mike Sensei", url: "https://otakunewz.wixsite.com/mikesensei" },
      { name: "& UberDaryl" },
    ],
  },
  {
    title: "Team Data Analysts",
    members: [
      { name: "Jerm6760", url: "https://www.twitch.tv/xjerm6760" },
      { name: "&" },
      { name: "ADHD", url: "https://www.twitch.tv/adhd_sc" },
    ],
  },
];

const Staff = () => {
  return (
    <section className="section staff" aria-label="meet the staff">
      <div className="container">
        <p className="section-subtitle">Feel the Spirit</p>

        <h2 className="h2 section-title">
          Meet Our <span className="span">Core</span>
        </h2>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/videoseries?si=7shdlK6SsPPpWXwg&amp;list=PLjZJjTdaS1_JSFXtm2kLX9S-ftCWq8PFP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h3 data-aos="fade-right">The Spirit Squad:</h3>
        <ol className="squad">
          {STAFF_MEMBERS.map((staff, index) => (
            <Spirit
              key={index}
              title={staff.title + ":"}
              members={staff.members}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Staff;
