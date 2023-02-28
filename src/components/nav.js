import React from "react";
import "./nav.scss";
import NavButtonHex from "./navButtonHex";
import Popover from "../utils/contactPopover";
import ContactCard from "./contactCard";

const Nav = () => {

  return (
    <section className="Nav">
      
      <div className="Nav-wrap">
          <button className="Nav-button Nav-button--about" href="#">
            <NavButtonHex name="about" />
          </button>
        <button id="portfolio" className="Nav-button Nav-button--portfolio" href="#">
          <NavButtonHex name="portfolio" />
        </button>
        <button id="blog" className="Nav-button Nav-button--blog" href="#">
        <NavButtonHex name="blog" />
        </button>
        <Popover content={<ContactCard />} placement="top" trigger="click">
          <button
            id="contact"
            className="Nav-button Nav-button--contact"
            // onClick={() => setIsOpen(true)}
          >
            <NavButtonHex name="contact" />
          </button>
        </Popover>

      </div>

    </section>
  );
};

export default Nav;
