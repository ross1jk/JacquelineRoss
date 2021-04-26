// * A `Footer` component that appears on multiple pages
import React from "react";
import "./style.css"

function Footer() {
  return (
    <div>
      <footer className="navbar fixed-bottom" id="footer">
        <span>
          <a href="./Documents/JacquelineRossResume.pdf"><i className="far fa-file"></i>My Resume</a> |
          <a href="https://github.com/ross1jk"><i className="fab fa-github"></i>GitHub</a> |
          <a href="https://www.linkedin.com/in/jacquelinekross/">Linked<i className="fab fa-linkedin-in"></i></a>
        </span>
      </footer>
    </div>


  );
}

export default Footer;

