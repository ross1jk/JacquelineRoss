import React from "react"; 
import "./style.css";

function Project (props) {
    return(
        <div id="pgcontent">
        <div class="col mb-4">
        <div class="card h-100" id="portfolioCard">
          <img src={props.image} class="card-img-top" alt="projectImage" id="projectimg" />
          <div class="card-body">
            <h5 class="card-title" id="projectTitle">{props.project}</h5>
            <div class="overflow-auto"><p id="description">{props.description}</p></div>
            <p id="url"><a class="card-text" href={props.url}> Deployed Application</a> |
            <a class="card-text" href={props.repo}> GitHub Repository</a></p>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Project