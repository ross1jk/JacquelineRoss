import React from "react";
import { Row, Col } from "../Grid";
import Text from "../Text";
import "./style.css"

function Card() {
    return (
        <Row>
        <Col size="2"></Col>
            <Col size="8">
                <div class="card" id="homeCard">
                    <div class="card-body">

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

                    </div>
                </div>
            </Col>
            <Col size="2"></Col>

        </Row>
    )
}

export default Card;