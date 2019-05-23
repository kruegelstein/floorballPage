import React, { Component } from "react";

// Styled-components
import { FooterComp } from "../Main.js";

// Components
import SocialMedia from "./SocialMedia.jsx";
import Links from "./Links.jsx";
import Infos from "./Infos.jsx";

class FooterSection extends Component {
  render() {
    return (
      <FooterComp>
        <SocialMedia />
        <Infos />
        <Links />
      </FooterComp>
    );
  }
}

export default FooterSection;
