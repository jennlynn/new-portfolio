import React, { useState } from 'react'
import './portfolioSection.scss'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PortfolioItem from './portfolioItem'
import JasperGivesPaw from '../assets/images/portfolio-traditional/jasper_gives_paw.jpg'
import Jaspy01 from '../assets/images/portfolio-traditional/jaspy_01.jpg'
import MidasAndJasperAtDoor from '../assets/images/portfolio-traditional/midas_and_jasper_at_door.jpg'
import MidasAtDoor from '../assets/images/portfolio-traditional/midas_at_door.jpg'
import MidasLovesFood from '../assets/images/portfolio-traditional/midas_loves_food.jpg'
import RichardAndMidas from '../assets/images/portfolio-traditional/richard_and_midas.jpg'
import StefAndMidasJaspyBg from '../assets/images/portfolio-traditional/stef_and_midas_jaspy_bg.jpg'

const PortfolioSection = ({ name }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={cx('PortfolioSection', { isActive: isActive })}>
            <button
                onClick={() => setIsActive(!isActive)}
                className={cx('PortfolioSection-button', {
                    isActive: isActive,
                })}
            >
                <h3
                    className={cx('PortfolioSection-header', {
                        isActive: isActive,
                    })}
                >
                    {name}
                    <span
                        className={cx('PortfolioSection-headerChevron', {
                            isActive: isActive,
                        })}
                    >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </h3>

                {/*       
        <svg width="200" height="20" stroke="yellow" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#fff" fill="red" d="L 100 1, L 1 20 "/>
          <path stroke="#fff" fill="red" d="L 100 1, L 200 20 "/>
        </svg>
       */}
            </button>
            <div
                className={cx('PortfolioSection-content', {
                    isActive: isActive,
                })}
            >
                <div className="PortfolioSection-itemsWrap">
                    <PortfolioItem
                        src={MidasLovesFood}
                        name="Midas ❤️ Food"
                        meta="watercolor and acrylic marker"
                        description="Midas really does love to eat, I feel this painting really captures it."
                    />
                    <PortfolioItem
                        src={JasperGivesPaw}
                        name="Jasper Gives Paw"
                        meta="watercolor and acrylic marker"
                        description="He's such a good boy!"
                    />
                    <PortfolioItem
                        src={MidasAndJasperAtDoor}
                        name="Midas and Jasper at the Door"
                        meta="watercolor, gouache, and acrylic marker"
                        description="Midas is jealous that Jasper gets to be outside and Jasper is feeling small and scared of Midas's wrath."
                    />
                    <PortfolioItem
                        src={MidasAtDoor}
                        name="Midas at the Door"
                        meta="watercolor, gouache, and acrylic marker"
                        description="Midas at his post, gazing out the door"
                    />
                    <PortfolioItem
                        src={RichardAndMidas}
                        name="Richard and Midas"
                        meta="graphite sketch"
                        description="Richard and Midas at the breakfast table."
                    />
                    <PortfolioItem
                        src={StefAndMidasJaspyBg}
                        name="Stef and Midas with Jasper in the Background and a Pumpkin Carved to Look Like Midas."
                        meta="graphite"
                        description="Stef holding Midas on the front step while Jasper looks on from inside. The pumpkin in the background was carved to look like Midas, carving credits to Stef."
                    />
                    <PortfolioItem
                        src={Jaspy01}
                        name="Jaspy Looking Classy"
                        meta="watercolor and acrylic marker"
                        description="He's so handsome! This was one of my first attempts at watercolor, and the first time I painted a dog."
                    />
                </div>
            </div>
        </div>
    )
}

// PortfolioSection.props={
//   name: String,
// }

export default PortfolioSection
