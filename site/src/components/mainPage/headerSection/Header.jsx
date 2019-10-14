import React, { Component } from "react";

import Navigation from "./Navigation.jsx";

// Styled-components
import { HeaderContainer, Logo } from "../Main.js";

class HeaderSection extends Component {
  render() {
    return (
      <HeaderContainer>
        <a
          href="https://www.scs-floorball.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
        <Navigation />
      </HeaderContainer>
    );
  }
}

export default HeaderSection;
