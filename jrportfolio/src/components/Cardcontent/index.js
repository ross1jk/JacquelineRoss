import React from "react";
import "./style.css"

function cardContent(props) {
  return (
    <div>
      <p id="cardcontent">{props.text}</p>
    </div>
  );
}

export default cardContent;