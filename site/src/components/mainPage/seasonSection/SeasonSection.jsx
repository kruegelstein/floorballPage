import React, { Component } from "react";

// Styled-components
import {SeasonComp, InlineContainer} from "../Main.js";

// Components
import Table from './Table.jsx'


class SeasonSection extends Component {
  render() {
    return (
      <SeasonComp>
        <InlineContainer />
        <InlineContainer>
          <Table />
        </InlineContainer>
      </SeasonComp>
    );
  }
}

export default SeasonSection;
