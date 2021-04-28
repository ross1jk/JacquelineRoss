import React from "react";
import { Row, Col } from "../Grid";
import Text from "../Text";
import { Link } from "react-router-dom";
import "./style.css";

function Card() {
    return (
        <Row>
            <Col size="2"></Col>
            <Col size="8">
                <div className="card" id="homeCard">
                    <div className="card-body" id="homeContent">

                        <Text
                            medium={"I'm Jacqueline,"}
                        />
                        <div >
                            <Text
                                large={"Full Stack Web Developer."}
                            />
                        </div>
                        </div>
                        </div>
                 
                </Col>
            <Col size="2"></Col>

        </Row>
    )
}

export default Card;