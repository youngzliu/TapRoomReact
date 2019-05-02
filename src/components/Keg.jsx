import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  let kegStyles = {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
  };

  let buttons = null;

  if (props.currentRouterPath === "/admin") {
    buttons = (
      <div>
        <style jsx>
          {`
            button {
              height: 48px;
              width: 100px;
              border-radius: 5px;
              color: white;
              font-size: 15px;
              font-weight: bold;
            }
            .sell {
              background: #ea8e0e;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            }

            .edit {
              background: green;
              margin-left: 10px;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            }

            .delete {
              background: red;
              margin-left: 10px;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            }
          `}
        </style>
        <button
          className="sell"
          onClick={() => {
            props.onRemovingPint(props.kegId);
          }}
        >
          Sell Pint
        </button>
        <button
          className="edit"
          onClick={() => {
            props.onSelectToEdit(props.kegId);
          }}
        >
          Edit Keg
        </button>
        <button
          className="delete"
          onClick={() => {
            props.onDeletingKeg(props.kegId);
          }}
        >
          Delete Keg
        </button>
      </div>
    );
  }

  return (
    <div style={kegStyles}>
      <li>{props.name}</li>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Price: {props.price}</li>
        <li>Alcohol Content: {props.conc}</li>
        <li>Pints left: {props.amount}</li>

        {buttons}
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
  onRemovingPint: PropTypes.func,
  onSelectToEdit: PropTypes.func,
  onDeletingKeg: PropTypes.func,
  currentRouterPath: PropTypes.string
};
