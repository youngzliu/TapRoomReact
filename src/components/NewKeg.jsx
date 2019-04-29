import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";

export default function NewKeg() {
  let newStyle = {};
  return (
    <div>
      <style jsx global>
        {`
          body {
            background: #654321;
          }
        `}
      </style>
      <Navbar />
      <Form />
    </div>
  );
}
