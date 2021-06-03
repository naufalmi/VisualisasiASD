import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../style.css";

export default class Rectangel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.id,
      val: props.val,
      color: props.color,
      h: props.h,
      scale: props.scale,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ color: props.color, scale: props.scale, val: props.val, h: props.h });
  }

  render() {
    return (
      <Spring
        // SETTING ANIMASI
        from={
          this.state.color === "white" && this.state.h === "square"
            ? { backgroundColor: "white", color: "black", height: 50, width: 50, transform: "scale(" + this.state.scale + ")" }
            : { backgroundColor: this.state.color, height: this.state.h, width: 50, color: "black", transform: "scale(" + this.state.scale + ")" }
        }
        //  TRANSISI KE STYLE YANG DIINGINKAN
        to={
          this.state.color === "white" && this.state.h === "square"
            ? { backgroundColor: "rgb(" + this.state.x * 15 + "," + this.state.x * 15 + "," + this.state.x * 15 + ")", color: "white", height: 50, width: 50, transform: "scale(" + this.state.scale + ")" }
            : { backgroundColor: this.state.color, transform: "scale(" + this.state.scale + ")" }
        }
        // KONFIGURASI ANIMASI
        config={this.state.color === "white" && this.state.h === "square" ? { duration: 200000 } : { duration: 200 }}
      >
        {/* MAPPING ANIMASI */}
        {(props) => (
          <div className="rectangel" style={props}>
            <h5>{this.state.val}</h5>
          </div>
        )}
      </Spring>
    );
  }
}
