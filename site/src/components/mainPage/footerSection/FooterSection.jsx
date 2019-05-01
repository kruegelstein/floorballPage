import React, { Component } from "react";

// Styled-components
import {FooterComp} from "../Main.js";

// Components
import SocialMedia from './SocialMedia.jsx'


class FooterSection extends Component {
  render() {
    return (
      <FooterComp>
        <SocialMedia />
      </FooterComp>
    );
  }
}

export default FooterSection;
