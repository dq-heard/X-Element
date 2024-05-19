import "./merch.css";

const Modal = ({ image, closeModal, isOpen }) => {
  return (
    <section className={isOpen ? "display-block" : "display-none"}>
      <div id="modal" className="modal" onClick={closeModal}>
        <button onClick={closeModal} aria-label="Close" className="close">
          ×
        </button>
        <img className="modal-content" id="modal-image" src={image} />
        <div id="caption"></div>
      </div>
    </section>
  );
};

export default Modal;
