import React, { Component } from "react";
import Sphere from "./assets/sphere";
import Text from "./assets/Text";
import Spline from "@splinetool/react-spline";
import { Button } from "@chakra-ui/react";
import "./App.css";

import { Grid, GridItem } from "@chakra-ui/react";

export default class extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <Spline scene="https://prod.spline.design/MubNeTEiYmgK9B3Z/scene.splinecode" />
      </>
    );
  }
}
