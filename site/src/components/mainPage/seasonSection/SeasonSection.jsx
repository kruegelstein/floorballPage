import React, { Component } from "react";

// Styled-components
import { SeasonComp, Divider } from "../Main.js";

// Components
import Table from "./Table.jsx";
import NextGame from "./NextGame.jsx";
import LatestEvents from "./LatestEvents.jsx";

class SeasonSection extends Component {
  render() {
    return (
      <SeasonComp>
        <NextGame />
        <Divider />
        <Table />
        <Divider />
        <LatestEvents />
      </SeasonComp>
    );
  }
}

export default SeasonSection;
