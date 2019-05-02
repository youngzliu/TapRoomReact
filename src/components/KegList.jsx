import React from "react";
import Keg from "./Keg";
import EditKeg from "./EditKeg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function KegList(props) {
  let addButton = null;
  if (props.currentRouterPath === "/admin") {
    addButton = (
      <div>
        <style jsx>
          {`
            button {
              height: 100px;
              width: 200px;
              border-radius: 5px;
              color: white;
              font-size: 15px;
              font-weight: bold;
              background: blue;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
              margin-left: 40px;
            }

            button:hover {
              cursor: pointer;
            }
          `}
        </style>
        <Link to="/new">
          <button>Add New Keg</button>
        </Link>
      </div>
    );
  }

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
                currentRouterPath={props.currentRouterPath}
              />
            );
          }
        })}
      </ul>
      {addButton}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onRemovingPint: PropTypes.func,
  onSelectToEdit: PropTypes.func,
  onEditKeg: PropTypes.func,
  kegToEdit: PropTypes.string,
  onDeletingKeg: PropTypes.func,
  currentRouterPath: PropTypes.string
};
