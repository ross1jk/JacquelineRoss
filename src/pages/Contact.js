import React from "react"; 
import { Row, Col } from "../components/Grid";
import Form from "../components/Form"

function Contact() {
    return (
      <div>
      <Row>
      <Col size="6">
      <img src={process.env.PUBLIC_URL + "office.png"} class="card-img-top" alt="Jacqueline Ross" id="jrimg" />
      </Col>
      <Col size="6">
      <Form />
      </Col>
      </Row>
      </div>
    );
  }
  
  export default Contact;