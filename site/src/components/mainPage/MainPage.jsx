import React, { Component } from "react";

// Styled-components
import {MainComp} from "./Main.js";

import HeaderSection from "./HeaderSection.jsx";


class MainPage extends Component {
  render() {
    return (
      <MainComp>
        <HeaderSection />
      </MainComp>
    );
  }
}

export default MainPage;
