import React from "react";
import { Row, Col } from "../components/Grid";
import Text from "../components/Text"
import { Link } from "react-router-dom";

function Home() {
  return (
    <Row>
      <Col size="8">
        <Text
          medium={"I'm Jacqueline,"}
        />
        <Text
          large={"Web Developer."}
        />
        <Text
          small={"Full Stack Web Develeoper with a passion for desgin"} />
        <Text
          small={"Current Change Manager at Ford Motor Company for Mainframe Services"} />
      </Col>
    </Row>
  );
}

export default Home;