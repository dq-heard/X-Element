import "./music.css";

const Music = () => {
  return (
    <section className="section music" aria-label="X Element Music">
      <div className="container">
        <p className="section-subtitle">Conquer the World</p>

        <h2 className="h2 section-title">
          At <span className="span">Maximum</span> Volume
        </h2>

        <div className="songs">
          <p className="music-desc">
            Boost your gameplay and tap into your element with two of our
            official anthems. Made for both gamers and dreamers alike, these
            songs are a tribute to everyone who rises above the competition &
            consistently pushes boundaries.
            <br />
            <br />
            Get the W; rep the X.
          </p>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/5g1slgr2kmU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://www.youtube-nocookie.com/embed/O1ewXQH5XUk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
