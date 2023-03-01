import React, { useState } from 'react';
import cx from 'classnames';
import "./portfolioItem.scss";


const PortfolioItem = ( props ) => {         
  // const [isActive, setIsActive] = useState(false);


  return (   
    <div className="PortfolioItem">
      <img className="PortfolioItem-image" src={props.src} alt=" " height="600" width="600" name={props.name} />
      <div className="PortfolioItem-info">
        <p className="PortfolioItem-name">{props.name}</p>
        <p className="PortfolioItem-meta">{props.meta}</p>
        <p className="PortfolioItem-description">{props.description}</p>
      </div>
    </div>

  );
};

// PortfolioSection.props={
//   name: String,
// }

export default PortfolioItem;