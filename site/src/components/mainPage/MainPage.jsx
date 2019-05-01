import React, { Component } from "react";

// Styled-components
import {MainComp} from "./Main.js";

import HeaderSection from "./headerSection/HeaderSection.jsx";
import SeasonSection from "./seasonSection/SeasonSection.jsx";


class MainPage extends Component {
  render() {
    return (
      <MainComp>
        <HeaderSection />
        <SeasonSection />
      </MainComp>
    );
  }
}

export default MainPage;
