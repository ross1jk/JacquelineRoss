import React from "react"; 
import "./style.css";

function Project (props) {
    return(
        <div>
        <div class="col mb-4">
        <div class="card h-100">
          <img src={props.image} class="card-img-top" alt="projectImage" id="projectimg" />
          <div class="card-body">
            <h5 class="card-title" id="projectTitle">{props.project}</h5>
            <p><a class="card-text" id="url" href={props.url}> Deployed Application</a></p>
            <p><a class="card-text" id="repo" href={props.repo}> GitHub Repository</a></p>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Project