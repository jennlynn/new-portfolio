import React, { useState } from 'react';
import "./portfolioSection.scss";
import cx from 'classnames';
import PortfolioItem from './portfolioItem';
import PersonalSiteV1 from '../assets/images/portfolio-digital/site_v1-01.png';
import TLPhotography from '../assets/images/portfolio-digital/TLPhotography.jpg';
import CMBSTaiChi from '../assets/images/portfolio-digital/cmbs_taichi.jpg';
import Firefly from '../assets/images/portfolio-digital/firefly1.jpg';
import BfastClub from '../assets/images/portfolio-digital/BfastClub.jpg';
import BUCDIANewsletter from '../assets/images/portfolio-digital/bucdia_newsletter.jpg';
import FHC from '../assets/images/portfolio-digital/fhc.jpg';
import JSP from '../assets/images/portfolio-digital/jsp.png';
import CMBS2 from '../assets/images/portfolio-digital/cmbs_2.png';

const PortfolioSection = ({ name }) => {         
  const [isActive, setIsActive] = useState(false);


  return (   
    <div className={cx("PortfolioSection", {"isActive" : isActive})}>
          
      <button onClick={() => setIsActive(!isActive)} className={cx("PortfolioSection-button", {"isActive" : isActive})}>
        <h3 className={cx("PortfolioSection-header", {"isActive" : isActive})}>{name}</h3>

      
        {/* <svg width="200" height="20" stroke="yellow" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#fff" fill="red" d="L 100 1, L 1 20 "/>
          <path stroke="#fff" fill="red" d="L 100 1, L 200 20 "/>
        </svg> */}
      
      
      </button>
      <div className={cx("PortfolioSection-content", {"isActive": isActive})}>
        <div className="PortfolioSection-itemsWrap">

        <PortfolioItem src={PersonalSiteV1} name="V1 of this site" meta="web design & development" description="" />
        <PortfolioItem src={JSP} name="Johnson String Project" meta="web design & development" description="" />
        <PortfolioItem src={CMBS2} name="CMBS v2" meta="Wix web design & development" description="" />
        <PortfolioItem src={CMBSTaiChi} name="CMBS Tai Chi v1" meta="web design, development, wordpress implementation" description="" />
        <PortfolioItem src={FHC} name="Franciscan Hospital for Children website" meta="web design and prototype" description="desc" />
        <PortfolioItem src={Firefly} name="Firefly" meta="ad campaign design" description="" />
        <PortfolioItem src={BfastClub} name="the Breakfast Club diner" meta="brand identity design" description="" />
        <PortfolioItem src={BUCDIANewsletter} name="BUCDIA Newsletter" meta="newsletter layout and design" description="" />
        <PortfolioItem src={TLPhotography} name="Tanya Lombardo Photography" meta="brand identity design" description="" />

        </div>
      </div>

    </div>
  );
};

// PortfolioSection.props={
//   name: String,
// }

export default PortfolioSection;