import React from "react";
import PropTypes from "prop-types";

export default function EditKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _conc = null;

  function handleEditingKeg(event) {
    event.preventDefault();
    props.onEditKeg({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      conc: _conc.value
    });
    _name.value = "";
    _brand.value = "";
    _price.value = "";
    _conc.value = "";
    props.onSelectToEdit(null);
  }

  return (
    <div className="all">
      <style jsx>
        {`
          button {
            height: 48px;
            width: 100px;
            border-radius: 5px;
            background-color: blue;
            font-size: 15px;
            font-weight: bold;
            color: white;
          }

          .where {
            height: 40px;
            width: 200px;
            font-size: 18px;
            padding: 0px 10px 0px 10px;
            border-radius: 10px;
            font-weight: bold;
            margin-left: 15px;
            margin-bottom: 5px;
          }

          .all {
            color: white;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          }
        `}
      </style>
      <form onSubmit={handleEditingKeg}>
        <li>
          <label>Name:</label>
          <input
            className="where"
            type="text"
            defaultValue={props.name}
            ref={input => {
              _name = input;
            }}
          />
        </li>
        <ul>
          <li>
            <label>Brand:</label>
            <input
              className="where"
              type="text"
              defaultValue={props.brand}
              ref={input => {
                _brand = input;
              }}
            />
          </li>
          <li>
            <label>Price:</label>
            <input
              className="where"
              type="text"
              defaultValue={props.price}
              ref={input => {
                _price = input;
              }}
            />
          </li>
          <li>
            <label>Alcohol Content:</label>
            <input
              className="where"
              type="text"
              defaultValue={props.conc}
              ref={input => {
                _conc = input;
              }}
            />
          </li>
          <li>Pints left: {props.amount}</li>

          <button type="submit">Finish Editing</button>
        </ul>
      </form>
    </div>
  );
}

EditKeg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  conc: PropTypes.string,
  amount: PropTypes.number,
  kegId: PropTypes.string,
  onSelectToEdit: PropTypes.func,
  onEditKeg: PropTypes.func
};
