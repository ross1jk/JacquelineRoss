import React from "react"; 
import { Row, Col } from "../components/Grid";
import Title from "../components/Title";

function About() {
    return (
      <div>
        <Row>
      <Col size="6">
      <Title
      title={"About Me"} />
      </Col>
      <Col size="6">
      </Col>
      </Row>
      </div>
    );
  }
  
  export default About;