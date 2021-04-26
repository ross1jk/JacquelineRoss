import React, { Component } from "react"; 
import { Row, Col } from "../components/Grid";
import Project from "../components/Project";
import Title from "../components/Title";
import portfolio from "../utils/portfolio.json";

class Portfolio extends Component {
  state = {
    portfolio
  }; 

 render() {
    return (
      <div>
      <Row>
        {this.state.portfolio.map(portfolio => (
        <Project 
          project={portfolio.project}
          image={portfolio.image}
          description={portfolio.description}
          url={portfolio.url}
          repo={portfolio.repo}
        />
        ))}
      </Row>

      </div>
    );
  }
}
  export default Portfolio;