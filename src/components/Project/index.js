import React from "react"; 
import "./style.css";

function Project (props) {
    return(
        <div id="pgcontent">
        <div className="col mb-4">
        <div className="card h-100" id="portfolioCard">
          <img src={props.image} className="card-img-top" alt="projectImage" id="projectimg" />
          <div className="card-body">
            <h5 className="card-title" id="projectTitle">{props.project}</h5>
            <div className="overflow-auto"><p id="description">{props.description}</p></div>
            <p id="url"><a className="card-text" href={props.url}> Deployed Application</a> |
            <a className="card-text" href={props.repo}> GitHub Repository</a></p>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Project