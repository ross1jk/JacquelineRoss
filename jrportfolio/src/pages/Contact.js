import React from "react"; 
import Textbox from "../components/Textbox";
import { Row, Col } from "../components/Grid";
import Title from "../components/Title"; 

function Contact() {
    return (
      <div>
      <Row>
      <Col size="6">
      <Title
      title={"Contact Me"} />
      </Col>
      <Col size="6">
      <Textbox />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default Contact;