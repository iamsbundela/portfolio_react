import React from "react";
import "./styles/TechItem.css";

function TechItem(props) {
  return (
    <div className="techitem">
      <img className="techitem__logo" src={props.url} alt="Logo" />
      <h3 className="techitem__title">{props.title}</h3>
    </div>
  );
}

export default TechItem;
