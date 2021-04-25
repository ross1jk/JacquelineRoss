import React from "react";
import "./style.css"
import { Container, Row, Col } from "../Grid";
import CardContent from "../Cardcontent";

function Textbox() {
  return (
    <div>
      <div className="card">
      <Container>
      <Row>
        <Col size="12">
        <CardContent text={"My name is Jacqueline Ross and I am a full stack developer "} />
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
}

export default Textbox;
