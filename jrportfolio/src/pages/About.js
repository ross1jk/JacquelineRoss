import React from "react";
import { Row, Col } from "../components/Grid";
import Title from "../components/Title";
import Textbox from "../components/Textbox";

function About() {
  return (
    <div>
      <Row>
        <Col size="6">
          <Textbox />
        </Col>
        <Col size="6">
        </Col>

      </Row>
    </div>
  );
}

export default About;