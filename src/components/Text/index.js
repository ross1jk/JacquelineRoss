import React from "react"; 
import "./style.css"; 

function Text(props) {
    return (
        <div>
      <p id="smallText">{props.small}</p>
      <p id="mediumText">{props.medium}</p>
      <p id="largeText">{props.large}</p>
      </div>
    );
  }
  
  export default Text;