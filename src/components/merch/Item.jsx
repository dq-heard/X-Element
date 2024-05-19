import { useState } from "react";
import Button from "../button/Button";
import Modal from "./Modal";

const Item = (props) => {
  const [modalImage, setModalImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    return (event) => {
      event.preventDefault();
      setModalImage(imageSrc);
      setModalOpen(true);
    };
  };

  return (
    <li className="merch-item">
      <div className="merch-card left has-before" data-aos="fade-right">
        <img
          src={props.src1}
          width="86"
          height="81"
          loading="lazy"
          alt={props.alt1}
          className="merch-img"
        />

        <h3 className="h3 card-title">{props.title1}</h3>

        <Button
          onClick={openModal(props.src1)}
          className="modal-btn"
          text="Click to Zoom"
        ></Button>
      </div>

      <div className="merch-sale" data-aos="fade-up">
        <div className="price">{props.price}</div>

        <div className="social-wrapper">
          <a
            href="https://discord.com/invite/WuNtgnB6Hp"
            className="social-link"
          >
            <ion-icon
              name="logo-discord"
              role="img"
              aria-label="team Discord"
            ></ion-icon>
          </a>
        </div>
      </div>

      {!props.isSingle && (
        <div className="merch-card right has-before" data-aos="fade-left">
          <img
            src={props.src2}
            width="86"
            height="81"
            loading="lazy"
            alt={props.alt2}
            className="merch-img"
          />

          <h3 className="h3 card-title">{props.title2}</h3>

          <Button
            onClick={openModal(props.src2)}
            className="modal-btn"
            text="Click to Zoom"
          ></Button>
        </div>
      )}

      {props.disclaimer && (
        <p className="disclaimer" data-aos="fade-left">
          {props.disclaimer}
        </p>
      )}

      {modalOpen && (
        <Modal
          image={modalImage}
          closeModal={() => setModalOpen(false)}
          isOpen={modalOpen}
        />
      )}
    </li>
  );
};

export default Item;
