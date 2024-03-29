import React, { Component } from "react";
import Sphere from "./assets/sphere";
import Text from "./assets/Text";
import "./App.css";

import { Grid, GridItem } from "@chakra-ui/react";

export default class extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <div h="200%">
          <Text />
        </div>

        <Grid
          h="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
          <GridItem marginTop="15%" rowSpan={4} colSpan={1}>
            <Sphere className="sphere" />
          </GridItem>
          <GridItem marginTop="90%" colSpan={2} rowSpan={2}></GridItem>
        </Grid>
        <Grid></Grid>
      </div>
    );
  }
}
