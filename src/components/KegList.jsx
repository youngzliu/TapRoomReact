import React from "react";
import Keg from "./Keg";
import EditKeg from "./EditKeg";
import PropTypes from "prop-types";

export default function KegList(props) {
  return (
    <div>
      <ul>
        {Array.from(props.kegList).map(([key, value]) => {
          if (key === props.kegToEdit) {
            return (
              <EditKeg
                name={value.name}
                brand={value.brand}
                price={value.price}
                conc={value.conc}
                amount={value.amount}
                key={key}
                kegId={key}
                onSelectToEdit={props.onSelectToEdit}
                onEditKeg={props.onEditKeg}
              />
            );
          } else {
            return (
              <Keg
                name={value.name}
                brand={value.brand}
                price={value.price}
                conc={value.conc}
                amount={value.amount}
                key={key}
                kegId={key}
                onRemovingPint={props.onRemovingPint}
                onSelectToEdit={props.onSelectToEdit}
                onDeletingKeg={props.onDeletingKeg}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onRemovingPint: PropTypes.func,
  onSelectToEdit: PropTypes.func,
  onEditKeg: PropTypes.func,
  kegToEdit: PropTypes.string,
  onDeletingKeg: PropTypes.func
};
