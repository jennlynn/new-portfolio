import React, { useState } from 'react';
import "./portfolioSection.scss";
import cx from 'classnames';
import waveImg from '../assets/images/wavesOpacity.svg'


const PortfolioSection = ({ name }) => {         
  const [isActive, setIsActive] = useState(false);


  return (   
    <div className={cx("PortfolioSection", {"isActive" : isActive})}>
          
      {/* <img src={waveImg} /> */}
      <button onClick={() => setIsActive(!isActive)} className={cx("PortfolioSection-button", {"isActive" : isActive})}>
        <h3 className={cx("PortfolioSection-header", {"isActive" : isActive})}>{name}</h3>

      
        <svg width="200" height="20" stroke="yellow" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#fff" fill="red" d="L 100 1, L 1 20 "/>
          <path stroke="#fff" fil="red" d="L 100 1, L 200 20 "/>
        </svg>
      
      
      </button>
      <div className={cx("PortfolioSection-content", {"isActive": isActive})}>
        <div className="PortfolioSection-itemsWrap">
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
        </div>
        <div className="PortfolioSection-item"><img src="http://placekitten.com/600/600" alt=" " height="600" width="600" />
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