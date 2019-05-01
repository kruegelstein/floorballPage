import React, { Component } from "react";

// Styled-components
import {HeaderContainer, Logo} from "../Main.js";

class HeaderSection extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    );
  }
}

export default HeaderSection;
