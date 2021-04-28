import React from "react";
import { Row, Col } from "../components/Grid";
import Text from "../components/Text";

function About() {
  return (
    <div>
      <Row>
        <Col size="6">
        <img src={process.env.PUBLIC_URL + "jr.png"} className="img-fluid" alt="Jacqueline Ross" id="jrimg" /> 
        </Col>
        <Col size="6">
         <Text large={"Hi, I'm Jacqueline"} />
             <Text medium={"and I am a full stack web devleoper."} />
             <Text small={"Currently, I am the Change Manager for Mainframe Services at Ford Motor Company. I lead all aspects of Change Management for the department, deliver essential communications both internally and externally, and participate in Department Projects."} />
             <Text small={"I have organized and directed internal website migrations and consolidations. As well as managed externally facing contnent on our departments websites."} />
             <Text small={"When I'm not refining my coding skills you will find me reading, walking my dog, cycling, or doing yoga"} />
        </Col>

      </Row>
    </div>
  );
}

export default About;