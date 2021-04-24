import React from "react"; 
import Textbox from "../components/Textbox";
import { Row, Col } from "../components/Grid";

function Contact() {
    return (
      <div>
      <Row>
      <Col size="6">
      <p> Placeholder Contact Page</p>
      </Col>
      <Col size="6">
      <Textbox />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default Contact;