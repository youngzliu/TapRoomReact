import React from "react";
import { Link } from "react-router-dom";

export default function RightSide() {
  let linkStyle = {
    textDecoration: "none"
  };

  return (
    <div>
      <style jsx>
        {`
          .first {
            display: inline-block;
            padding: 10px;
            margin-left: 10px;
          }

          .container {
            text-align: right;
          }

          .first p {
            font-size: 15px;
            color: white;
            font-size: 2rem;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            padding-bottom: 30px;
            border-bottom: 2px solid transparent;
          }

          .first p:hover {
            border-bottom: 2px solid white;
            padding-bottom: 30px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="container">
        <div className="first">
          <Link to="/" style={linkStyle}>
            <p>View Kegs</p>
          </Link>
        </div>
        <div className="first">
          <Link to="/new" style={linkStyle}>
            <p>Add Kegs</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
