import React from "react"; 
import { Row, Col } from "../components/Grid";
import Form from "../components/Form";
import Office from "../imgs/office.png";

function Contact() {
    return (
      <div>
      <Row>
      <Col size="6">
      <img src={(Office)} className="img-fluid" alt="Jacqueline Ross" id="jrimg" />
      </Col>
      <Col size="6">
      <Form />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default Contact;