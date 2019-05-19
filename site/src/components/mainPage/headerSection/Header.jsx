import React, { Component } from "react";

// Styled-components
import {HeaderContainer, Logo} from "../Main.js";

class HeaderSection extends Component {
  render() {
    return (
      <HeaderContainer>
        <a href='https://www.scs-floorball.de/' target='_blank' rel="noopener noreferrer"><Logo /></a>
      </HeaderContainer>
    );
  }
}

export default HeaderSection;
