import React from "react";
//import Nav from "./nav";
import treesImage from "../assets/images/trees_2.jpg";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="Hero-wrapper">
      <h1 className="Hero">
        <svg viewBox="0 0 800 80" className="Hero-text">
          <pattern
            id="p-img"
            viewBox="9 210 800 80"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              href={treesImage}
              width="800"
              height="600"
              className="Hero-image"
            />
          </pattern>
          <text
            textAnchor="middle"
            x="50%"
            y="50%"
            dy=".35em"
            className="img-layer"
          >
            Jenn Rabin
          </text>
        </svg>
      </h1>
      <h2 className="Hero-subHeader">
        Artist ~ Frontend Dev ~ UX Enthusiast
        {/* ~ Prompt Engineer ~ Armchair Philosopher */}
      </h2>

      {/* <Nav /> */}
    </section>
  );
};

export default Hero;
