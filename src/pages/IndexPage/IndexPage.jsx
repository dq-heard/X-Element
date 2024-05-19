import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";

import preloader from "../../assets/preloader.gif";
import video from "../../assets/video.mp4";

import "./indexpage.css";

const IndexPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <div className="preloader">
        <img src={preloader} alt="preloader" style={{ height: "60px" }} />
      </div>

      <header className="landing">
        <video
          muted
          loop
          ref={videoRef}
          className="video-container"
          onLoadedData={() => {
            const preloader = document.querySelector(".preloader");
            preloader.classList.add("hide-preloader");
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        <Button href="/home" className="redirect-btn" text="Visit Website" />

        <button
          className={`switch-btn ${isPlaying ? "" : "slide"}`}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <span>Play</span>
          <span>Pause</span>
          <span className="switch"></span>
        </button>
      </header>
    </div>
  );
};

export default IndexPage;
