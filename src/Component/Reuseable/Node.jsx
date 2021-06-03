import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../style.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      prev: props.prev,
      val: props.val,
      next: props.next,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ prev: props.prev, next: props.next });
  }

  render() {
    return (
      <Row className="node">
        {/* PREV */}
        <Col md="4" className="colNode">
          {this.state.prev == null ? "" : <h6>PREV</h6>}
        </Col>
        {/* VALUE */}
        <Col md="4" className="colNode">
          <h6>{this.state.val}</h6>
        </Col>
        {/* NEXT */}
        <Col md="4" className="colNode">
          {this.state.next == null ? "" : <h6>NEXT</h6>}
        </Col>
      </Row>
    );
  }
}
