import React from "react";
import "./style.css"
import { Container, Row, Col } from "../Grid";
import Form from "../Form";

// Consitent card styling to display my infomation

function Textbox(props) {
  return (
    <div>
      <div className="card">
      <Container>
      <Row>
        <Col size="12">
        <Form />
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
}

export default Textbox;
