import React from "react";
import "./nav.scss";
import NavButtonHex from "./navButtonHex";
import Popover from "../utils/contactPopover";
import ContactCard from "./contactCard";

const Nav = () => {

  return (
    <section className="Nav">
      
      <div className="Nav-wrap">
          <a className="Nav-button Nav-button--about" href="#about">
            <NavButtonHex name="about" />
          </a>
        <a className="Nav-button Nav-button--portfolio" href="#portfolio">
          <NavButtonHex name="portfolio" />
        </a>
        <a className="Nav-button Nav-button--blog" href="#blog">
        <NavButtonHex name="blog" />
        </a>
        <Popover content={<ContactCard />} placement="top" trigger="click">
          <a className="Nav-button Nav-button--contact">
            <NavButtonHex name="contact" />
          </a>
        </Popover>

      </div>

    </section>
  );
};

export default Nav;
