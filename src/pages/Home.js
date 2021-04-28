import React from "react";
import { Row, Col } from "../components/Grid";
import Text from "../components/Text"

function Home() {
  return (
    <div>
    <Row>
    <Col size="6">
      <img src={process.env.PUBLIC_URL + "me.png"} className="img-fluid" alt="Jacqueline Ross" id="jrimg" />
      </Col>
      <Col size="6">
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
      
    </div>
  );
}

export default Home;