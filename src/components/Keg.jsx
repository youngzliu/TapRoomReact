import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  let kegStyles = {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
  };
  return (
    <div style={kegStyles}>
      <li>{props.name}</li>
      <ul>
        <li>{props.brand}</li>
        <li>{props.price}</li>
        <li>{props.conc}</li>
        <li>{props.amount}</li>
      </ul>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  conc: PropTypes.string,
  amount: PropTypes.number,
  kegId: PropTypes.string
};
