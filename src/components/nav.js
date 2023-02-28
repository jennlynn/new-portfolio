import React from "react";
import "./nav.scss";
import Modal from "react-modal";
import ContactCard from "./contactCard";

Modal.setAppElement("#root");

const Nav = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <section className="Nav">
      
      <div className="Nav-wrap">
        <button className="Nav-button Nav-button--about" href="#">
          <svg
            className="Nav-buttonShapeWrap"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShape"
            />
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShapeEffect"
            />
            <text
              className="Nav-buttonText Nav-buttonText"
              x="50"
              y="55"
              textAnchor="middle"
            >
              About Me
            </text>
          </svg>
        </button>
        <button id="portfolio" className="Nav-button Nav-button--portfolio" href="#">
          <svg
            className="Nav-buttonShapeWrap"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShape"
            />
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShapeEffect"
            />
            <text className="Nav-buttonText" x="50" y="55" textAnchor="middle">
              Portfolio
            </text>
          </svg>
        </button>
        <button id="blog" className="Nav-button Nav-button--blog" href="#">
          <svg
            className="Nav-buttonShapeWrap"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShape"
            />
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShapeEffect"
            />
            <text className="Nav-buttonText" x="50" y="55" textAnchor="middle">
              Blog
            </text>
          </svg>
        </button>
        <button
          id="contact"
          className="Nav-button Nav-button--contact"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="Nav-buttonShapeWrap"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShape"
            />
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              className="Nav-buttonShapeEffect"
            />
            <text className="Nav-buttonText" x="50" y="55" textAnchor="middle">
              Contact Me
            </text>
          </svg>
        </button>

        {/* <button className="Nav-button--nonsvg">Click Me --</button> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayclassName={{
          base: "ModalOverlay",
          afterOpen: "ModalOverlay-after",
          beforeClose: "<ModalOverlay-before"
        }}
        className={{
          base: "ModalContent",
          afterOpen: "ModalContent-after",
          beforeClose: "ModalContent-before"
        }}
        closeTimeoutMS={500}
      >
        <button className="ModalCloseButton" onClick={() => setIsOpen(false)}>
          Close Modal
        </button>
        <ContactCard />
      </Modal>
    </section>
  );
};

export default Nav;
