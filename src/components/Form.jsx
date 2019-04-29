import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
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
      <form className="bookingForm">
        <h1>Add a New Keg:</h1>
        <label>Name</label>
        <br />
        <input className="where" type="text" placeholder="Name" />
        <label>Brand</label>
        <br />
        <input className="where" type="text" placeholder="Brand" />
        <label>Price</label>
        <br />
        <input className="where" type="text" placeholder="Price" />
        <label>Alcohol Content</label>
        <br />
        <input className="where" type="text" placeholder="Alcohol Content" />

        <div className="btnContainer">
          <button className="submitBtn">Add</button>
        </div>
      </form>
    </div>
  );
}
