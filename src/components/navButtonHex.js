import "./navButtonHex.scss";

const NavButtonHex = (props) => {
  return (
    <svg
      className="NavButtonHex-wrap"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <polygon
        points="50 1 95 25 95 75 50 99 5 75 5 25"
        className="NavButtonHex-shape"
      />
      <polygon
        points="50 1 95 25 95 75 50 99 5 75 5 25"
        className="NavButtonHex-glow"
      />
      <text className="NavButtonHex-text" x="50" y="55" textAnchor="middle">
        {props.name}
      </text>
    </svg>
  );
};

export default NavButtonHex;
