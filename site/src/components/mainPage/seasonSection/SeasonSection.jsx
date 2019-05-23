import React, { Component } from "react";

// Styled-components
import { SeasonComp } from "../Main.js";

// Components
import Table from "./Table.jsx";
import NextGame from "./NextGame.jsx";
// import UpcommingEvents from './UpcommingEvents.jsx'

class SeasonSection extends Component {
  render() {
    return (
      <SeasonComp>
        <NextGame />
        <Table />
        {/*<UpcommingEvents />*/}
      </SeasonComp>
    );
  }
}

export default SeasonSection;
