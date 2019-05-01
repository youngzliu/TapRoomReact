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
      <style jsx>
        {`
          button {
            height: 48px;
            width: 100px;
            border-radius: 5px;
            background: #ff5a5f;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }
        `}
      </style>
      <li>{props.name}</li>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Price: {props.price}</li>
        <li>Alcohol Content: {props.conc}</li>
        <li>Pints left: {props.amount}</li>

        <button
          onClick={() => {
            props.onRemovingPint(props.kegId);
          }}
        >
          Sell Pint
        </button>
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
  kegId: PropTypes.string,
  onRemovingPint: PropTypes.func
};
