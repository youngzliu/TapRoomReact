import React from "react";
import Keg from "./Keg";

export default function KegList() {
  const brews = [
    {
      name: "Brew1",
      brand: "Brand1",
      price: "5.00",
      content: ".05"
    },
    {
      name: "Brew2",
      brand: "Brand2",
      price: "4.00",
      content: ".04"
    },
    {
      name: "Brew3",
      brand: "Brand3",
      price: "7.00",
      content: ".07"
    }
  ];

  return (
    <div>
      <ul>
        {brews.map((brew, index) => (
          <Keg
            name={brew.name}
            brand={brew.brand}
            price={brew.price}
            content={brew.content}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
