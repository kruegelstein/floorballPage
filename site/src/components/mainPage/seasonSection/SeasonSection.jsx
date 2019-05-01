import React, { Component } from "react";

// Styled-components
import {SeasonComp, InlineContainer} from "../Main.js";

// Components
import Table from './Table.jsx'
import NextGame from './NextGame.jsx'
import UpcommingEvents from './UpcommingEvents.jsx'


class SeasonSection extends Component {
  render() {
    return (
      <SeasonComp>
        <NextGame />
        <InlineContainer>
          <UpcommingEvents />
        </InlineContainer>
        <InlineContainer>
          <Table />
        </InlineContainer>
      </SeasonComp>
    );
  }
}

export default SeasonSection;
