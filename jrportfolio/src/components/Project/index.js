//   A single `Project` component that will be used multiple times on a single page

//   A list of projects. For each project, make sure you have the following:

//   * Project title <nav className="navbar navbar-expand-lg sticky-top navbar-custom">

//   * Link to the deployed version

//   * Link to the GitHub repository

//   * GIF or screenshot of the deployed application

import React from "react"; 

function Project (props) {
    return(
        <div>
        <div class="col mb-4">
        <div class="card h-100">
          <img src={props.image} class="card-img-top" alt="projectImage" id="projectimg" />
          <div class="card-body">
            <h5 class="card-title" id="projectTitle">{props.project}</h5>
            <p class="card-text" id="url">{props.url}</p>
            <p class="card-text" id="repo">{props.repo}</p>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Project