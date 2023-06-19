import React from "react";
import './iconComponent.css'

 const IconComponent = (props) => {
  return (
    <div className="iconComponent">
      <button className={props.style}>
      <img src={props.image} className="icon-style" />
      </button>
      <p>{props.text_icon}</p>
    </div>
  );
};
export default IconComponent