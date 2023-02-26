import React, { useState } from 'react';
import "./portfolio.scss";
import PortfolioSection from './portfolioSection';


const Portfolio = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <section className="Portfolio">
      
      <h2 className="Portfolio-header u-heading">Portfolio</h2>

      <p className="Portfolio-description u-description">
        Welcome to my portfolio! As a Frontend Engineer and UX Developer with almost 10 years of experience, I've had the privilege of working on two major e-commerce websites as well as several smaller projects. My skills in web design and development are combined with a passion for art, and I love to express my creativity through sketches and paintings.
        <br />
        <br />
        In this section, you'll find a selection of my work, including website designs and code samples, as well as portraits and other paintings. Each piece showcases my attention to detail and dedication to producing high-quality work that meets the needs of my clients.
      </p>
      
      <div className="Portfolio-content">
        
      <PortfolioSection name="web dev & design"/>
      <PortfolioSection name="digital art" />
      <PortfolioSection name="paintings & sketches"/>

      </div>
    </section>
  );
};

export default Portfolio;
