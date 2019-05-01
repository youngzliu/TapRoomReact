import React from "react";

export default function Footer() {
  return (
    <div>
      <style jsx>
        {`
          .footer {
            color: white;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;
            font-size: 1.5rem;
            margin-right: 30px;
            margin-bottom: 50px;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          }
        `}
      </style>
      <p className="footer">Freshly brewed, always.</p>
    </div>
  );
}
