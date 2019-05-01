import React, { Component } from "react";

// Styled-components
import {HeaderComp} from "../Main.js";

// Components
import HeaderRow from './Header.jsx'
import HeaderText from './HeaderText.jsx'


class HeaderSection extends Component {
  render() {
    return (
      <HeaderComp>
        <HeaderRow />
        <HeaderText />
      </HeaderComp>
    );
  }
}

export default HeaderSection;
