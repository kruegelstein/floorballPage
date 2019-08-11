import React, { Component } from "react";

// Styled-components
import { HeaderContainer, Logo, Account } from "../Main.js";

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
        <Account className="fas fa-user fa-2x" />
      </HeaderContainer>
    );
  }
}

export default HeaderSection;
