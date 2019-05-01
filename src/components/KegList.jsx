import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

export default function KegList(props) {
  return (
    <div>
      <ul>
        {Array.from(props.kegList).map(([key, value]) => (
          <Keg
            name={value.name}
            brand={value.brand}
            price={value.price}
            conc={value.conc}
            amount={value.amount}
            key={key}
            kegId={key}
            onRemovingPint={props.onRemovingPint}
          />
        ))}
      </ul>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onRemovingPint: PropTypes.func
};
