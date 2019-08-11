import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link className="login" to="/login">
          <Account className="fas fa-user fa-2x" />
        </Link>
      </HeaderContainer>
    );
  }
}

export default HeaderSection;
