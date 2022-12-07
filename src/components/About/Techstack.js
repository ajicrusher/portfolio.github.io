import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiPhp
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
