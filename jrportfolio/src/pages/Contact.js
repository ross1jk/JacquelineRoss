import React from "react"; 
import { Row, Col } from "../components/Grid";
import Title from "../components/Title"; 
import Form from "../components/Form"

function Contact() {
    return (
      <div>
      <Row>
      <Col size="6">
      <Title
      title={"Contact Me"} />
      </Col>
      <Col size="6">
      <Form />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default Contact;