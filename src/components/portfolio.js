import React, { useState } from 'react';
import DigitalPortfolioSection from './portfolioSection-digital';
import TraditionalPortfolioSection from './portfolioSection-traditional';
import AnimateOnScroll from "../utils/animateOnScroll.tsx"
import "./portfolio.scss";

const Portfolio = () => {

  return (
    <section className="Portfolio" id="portfolio">
      <h2 className="Portfolio-header u-heading">Portfolio</h2>
      <AnimateOnScroll >

        <p className="Portfolio-description u-description">
          Welcome to my portfolio! As a Frontend Engineer and UX Developer with almost 10 years of experience, I've had the privilege of working on two major e-commerce websites as well as several smaller projects. My skills in web design and development are combined with a passion for art, and I love to express my creativity through sketches and paintings.
          <br />
          <br />
          In this section, you'll find a selection of my work, including website designs and code samples, as well as portraits and other paintings. Each piece showcases my attention to detail and dedication to producing high-quality work that meets the needs of my clients.
        </p>
      </AnimateOnScroll>
      <div className="Portfolio-content">
        
      <DigitalPortfolioSection name="💻 graphic & web design"/>
      <TraditionalPortfolioSection name="🎨 paintings & drawings"/>

      </div>
    </section>
  );
};

export default Portfolio;
