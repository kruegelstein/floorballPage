import React, { Component } from "react";

// Styled-components
import { SeasonComp, Divider } from "../Main.js";

// Components
import Table from "./Table.jsx";
import NextGame from "./NextGame.jsx";
import LatestEvents from "./LatestEvents.jsx";
import NextHome from "./NextHome.jsx";

class SeasonSection extends Component {
  render() {
    return (
      <SeasonComp id="season">
        <NextGame />
        <Divider />
        <NextHome />
        <Divider />
        <Table />
        <Divider />
        <LatestEvents />
      </SeasonComp>
    );
  }
}

export default SeasonSection;
