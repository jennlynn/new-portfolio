import React, { useState } from 'react';
import "./portfolio.scss";
import PortfolioSection from './portfolioSection';


const Portfolio = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <section className="Portfolio">
      <button className="Portfolio-bgSun">view my portfolio</button>
      
      <h2 className="Portfolio-header u-heading">Portfolio</h2>

      <p className="Portfolio-description description">
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

      <svg className="Portfolio-background" viewBox="0 0 900 675" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none">

        {/* <rect x="0" y="0" width="100%" height="100%" fill="#10162a"></rect> */}
        <path d="M0 480L100 383L200 427L300 388L400 431L500 482L600 389L700 441L800 428L900 429L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#e67e32"></path>
        <path d="M0 433L100 503L200 423L300 434L400 511L500 459L600 499L700 465L800 459L900 520L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#cc554e"></path>
        <path d="M0 483L100 548L200 486L300 548L400 530L500 503L600 538L700 522L800 542L900 547L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#9d3d5c"></path>
        <path d="M0 586L100 548L200 549L300 511L400 549L500 553L600 578L700 542L800 512L900 527L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#643157"></path>
        <path d="M0 563L100 601L200 610L300 610L400 564L500 584L600 602L700 607L800 593L900 575L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#2f243f"></path>
        <path d="M0 647L100 631L200 638L300 638L400 609L500 617L600 603L700 626L800 653L900 603L900 676L800 676L700 676L600 676L500 676L400 676L300 676L200 676L100 676L0 676Z" fill="#0c101c"></path>
      </svg> 

    </section>
  );
};

export default Portfolio;
