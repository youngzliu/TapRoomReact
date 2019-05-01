import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NewKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _conc = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      conc: _conc.value,
      amount: 124
    });
    _name.value = "";
    _brand.value = "";
    _price.value = "";
    _conc.value = "";
  }

  return (
    <div>
      <style jsx>
        {`
          .bookingForm {
            background-color: white;
            width: 400px;
            height: 450px;
            border-radius: 5px;
            margin-left: 10%;
            margin-top: 2%;
            padding: 25px 25px 25px 25px;
          }

          .bookingForm h1 {
            color: #484848;
          }

          label {
            font-size: 12px;
            font-weight: bold;
          }

          .where {
            height: 48px;
            width: 377px;
            font-size: 18px;
            padding: 0px 10px 0px 10px;
            margin-top: 5px;
          }

          .test {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 50% 50%;
          }

          .test input {
            width: 178px;
            height: 48px;
            font-size: 14px;
            padding: 0px 10px 0px 10px;
            margin-top: 5px;
            margin-bottom: 20px;
          }

          .submitBtn {
            height: 48px;
            width: 100px;
            border-radius: 5px;
            background: #ff5a5f;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }

          .btnContainer {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
          }
        `}
      </style>
      <form className="bookingForm" onSubmit={handleNewKegFormSubmission}>
        <h1>Add a New Keg:</h1>
        <label>Name</label>
        <br />
        <input
          className="where"
          type="text"
          placeholder="Name"
          ref={input => {
            _name = input;
          }}
        />
        <label>Brand</label>
        <br />
        <input
          className="where"
          type="text"
          placeholder="Brand"
          ref={input => {
            _brand = input;
          }}
        />
        <label>Price</label>
        <br />
        <input
          className="where"
          type="text"
          placeholder="Price"
          ref={input => {
            _price = input;
          }}
        />
        <label>Alcohol Content</label>
        <br />
        <input
          className="where"
          type="text"
          placeholder="Alcohol Content"
          ref={input => {
            _conc = input;
          }}
        />

        <div className="btnContainer">
          <button className="submitBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};
