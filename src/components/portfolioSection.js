import React, { useState } from 'react';
import "./portfolioSection.scss";
import cx from 'classnames';


const PortfolioSection = ({ name }) => {         
  const [isActive, setIsActive] = useState(false);


  return (   
    <div className={cx("PortfolioSection", {"isActive" : isActive})}>
          
      <button onClick={() => setIsActive(!isActive)} className={cx("PortfolioSection-button", {"isActive" : isActive})}>
        <h3 className={cx("PortfolioSection-header", {"isActive" : isActive})}>{name}</h3>
      </button>
      <div className={cx("PortfolioSection-content", {"isActive": isActive})}>
        <div className="PortfolioSection-itemsWrap">
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" />
        </div>
      </div>
      </div>

    </div>
  );
};

// PortfolioSection.props={
//   name: String,
// }

export default PortfolioSection;