import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Component/style.css";
import nomatch from "./Image/nomatch.svg";

export const NoMatch = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col className="wrapperNoMatch" lg="7">
        <Image className="imgtidakDitemukan" src={nomatch} />
        <h3>Oops! Halaman tidak ditemukan</h3>
      </Col>
    </Row>
  </Container>
);
