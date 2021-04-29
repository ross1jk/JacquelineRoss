import React from "react";
import "./style.css";
import Resume from "../../pdf/JacquelineRossResume.pdf";

function Footer() {
  return (
    <div>
      <footer className="navbar fixed-bottom" id="footer">
        <span>
          <a href={(Resume)}><i className="far fa-file"></i>My Resume</a> |
          <a href="https://github.com/ross1jk"><i className="fab fa-github"></i>GitHub</a> |
          <a href="https://www.linkedin.com/in/jacquelinekross/">Linked<i className="fab fa-linkedin-in"></i></a>
        </span>
      </footer>
    </div>

  );
}

export default Footer;

