import React from "react";
import { Row, Col } from "../components/Grid";
import Text from "../components/Text";

function About() {
  return (
    <div>
      <Row>
        <Col size="6">
             
        </Col>
        <Col size="6">
         <Text large={"Hi, I'm Jacqueline"} />
             <Text medium={"and I am a full stack web devleoper."} />
             <Text small={"Currently, I am the Change Manager for Mainframe Services at Ford Motor Company. I lead all aspects of Change Management for the department, deliver essential communications both internally and externally, and participate in Department Projects."} />
             <Text small={"I have organized and directed internal website migrations and consolidations. As well as managed externally facing contnent on our departments websites."} />
        </Col>

      </Row>
    </div>
  );
}

export default About;