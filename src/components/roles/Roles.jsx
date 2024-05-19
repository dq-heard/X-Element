import { useState } from "react";
import Positions from "./Positions.jsx";

import Astronauts from "../../assets/home.gif";

import "./roles.css";

const Roles = () => {
  const [selectedPosition, setSelectedPosition] = useState(
    "Discord Mod Manager"
  );

  const handleMoreClick = (position) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
    } else {
      setSelectedPosition(position);
    }
  };

  return (
    <section className="section roles" aria-label="we are recruiting">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">
          Ready to Excel?
        </p>

        <h2 className="h2 section-title" data-aos="fade-up">
          Know Your <span className="span">Role</span>
        </h2>

        <div className="role-intro" data-aos="fade-left">
          <div className="text-wrapper">
            <p>
              Greetings, new recruit! We're seeking skilled, passionate pros to
              join us in various roles. Below, you will find a list of positions
              we currently have available.
              <br />
              <span>
                If you're looking for an exciting opportunity to contribute your
                talents to a dynamic team, we encourage you to apply by sending
                your professional résumé&nbsp;
                <a href="https://www.aaronsheltrown.com/">
                  <strong>here.</strong>
                </a>
              </span>
            </p>
          </div>

          <div className="image-wrapper">
            <img
              className="card-image"
              src={Astronauts}
              alt="Multiple saluting astronauts in front of X Element logo"
            />
          </div>
        </div>

        <div className="role-names">
          <p className="section-subtitle" data-aos="fade-right">
            Available Positions:
          </p>

          <ol className="role-list">
            <Positions
              title="Discord Mod Manager"
              li1="Responsible for managing and organizing the moderation team."
              li2="Ensures a positive and inclusive cultural environment."
              li3="Proven history in community management and conflict resolution
              is preferred."
              showDetails={selectedPosition === "Discord Mod Manager"}
              onMoreClick={() => handleMoreClick("Discord Mod Manager")}
            ></Positions>

            <Positions
              title="Social Media Manager"
              li1="Manages our social media presence across various platforms."
              li2="Creates engaging content, schedules posts, and interacts with
              the community."
              li3="Proficiency in social media management tools and analytics are
              a plus."
              showDetails={selectedPosition === "Social Media Manager"}
              onMoreClick={() => handleMoreClick("Social Media Manager")}
            ></Positions>

            <Positions
              title="Recruiting Manager"
              li1="Leads the recruitment process for new team members."
              li2="Identifies talent, conducts interviews, and facilitates
              onboarding."
              li3="Strong interpersonal skills and a good understanding of the
              industry are desired."
              showDetails={selectedPosition === "Recruiting Manager"}
              onMoreClick={() => handleMoreClick("Recruiting Manager")}
            ></Positions>

            <Positions
              title="Content Creation Manager"
              li1="Oversees content creation efforts for our team."
              li2="Coordinates with content creators to develop engaging and
              high-quality posts."
              li3="Expertise in content creation, video editing, and graphic
              design is valuable."
              showDetails={selectedPosition === "Content Creation Manager"}
              onMoreClick={() => handleMoreClick("Content Creation Manager")}
            ></Positions>

            <Positions
              title="Head Coaches (Multiple)"
              li1="Provide guidance, leadership, and mentorship to the squad of
              your respective game."
              li2="Develop training regimens, manage player performances, and
              optimize team synergy."
              li3="Coaching experience and knowledge of your chosen game's
              competitive scene are required."
              showDetails={selectedPosition === "Head Coaches (Multiple)"}
              onMoreClick={() => handleMoreClick("Head Coaches (Multiple)")}
            ></Positions>

            <Positions
              title="Assistant Coaches (Multiple)"
              li1="Supplements the Head Coach's training and strategy
              implementation."
              li2="Supports players during matches, competitions, and practice
              sessions."
              li3="Familiarity with gameplay tactics and mechanics of your chosen
              game are essential."
              showDetails={selectedPosition === "Assistant Coaches (Multiple)"}
              onMoreClick={() =>
                handleMoreClick("Assistant Coaches (Multiple)")
              }
            ></Positions>

            <Positions
              title="Team Analysts (Multiple)"
              li1="Monitors squad performances, opponents, and gameplay
              data/strategies."
              li2="Provides feedback with insights and recommendations for
              improvements."
              li3="Strong analytical skills and a deep understanding of your
              chosen game are necessary."
              showDetails={selectedPosition === "Team Analysts (Multiple)"}
              onMoreClick={() => handleMoreClick("Team Analysts (Multiple)")}
            ></Positions>
          </ol>
        </div>
        <div className="neon-border-bottom"></div>
      </div>
    </section>
  );
};

export default Roles;
