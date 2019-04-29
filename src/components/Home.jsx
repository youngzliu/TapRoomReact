import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import beerBubbles from "./assets/images/beerBubbles.jpg";

export default function Home() {
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
