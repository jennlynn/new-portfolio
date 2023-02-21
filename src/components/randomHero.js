import "./hero.scss";
import classNames from "classnames";

const randomNumber = (max) => Math.floor(Math.random() * max);

let url;
let heroClass;
let viewBox;

switch (randomNumber(7)) {
  case 1:
    url = "https://picsum.photos/id/124/800/600.jpg";
    heroClass = "hc1";
    viewBox = "0 0 800 80";
    break;
  case 2:
    url = "https://picsum.photos/id/184/800/600.jpg";
    heroClass = "hc2";
    viewBox = "0 0 800 80";
    break;
  case 3:
    url = "https://picsum.photos/id/56/800/600.jpg";
    heroClass = "hc3";
    viewBox = "-100 75 800 80";
    break;
  case 4:
    url = "https://picsum.photos/id/93/800/600.jpg";
    heroClass = "hc4";
    viewBox = "-25 250 800 80";
    break;
  case 5:
    url = "https://picsum.photos/id/213/800/600.jpg";
    heroClass = "hc5";
    viewBox = "0 50 800 80";
    break;
  case 6:
    url = "https://picsum.photos/id/195/800/600.jpg";
    heroClass = "hc6";
    viewBox = "9 90 800 80";
    break;
  case 7:
    url = "https://picsum.photos/id/324/800/600.jpg";
    heroClass = "hc7";
    viewBox = "9 0 800 80";
    break;
  default:
    url = "https://picsum.photos/id/324/800/600.jpg";
    heroClass = "hc7";
    viewBox = "9 0 800 80";
}

console.log("hero image url?", url);

const heroClasses = classNames("Hero-wrapper", heroClass);

const Hero = () => {
  return (
    <div className={heroClasses}>
      <div className="Hero">
        <svg viewBox="0 0 800 80" className="Hero-text">
          <pattern
            id="p-img"
            viewBox={viewBox}
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image href={url} width="800" height="600" />
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
      </div>
    </div>
  );
};

export default Hero;
