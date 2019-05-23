import React, { Component } from "react";

// Styled-components
import { MainComp } from "./Main.js";

import HeaderSection from "./headerSection/HeaderSection.jsx";
import SeasonSection from "./seasonSection/SeasonSection.jsx";
import TrainingSection from "./trainingSection/TrainingSection.jsx";
import PartnerSection from "./partnerSection/PartnerSection.jsx";
import MediaSection from "./mediaSection/MediaSection.jsx";
import HistorySection from "./historySection/HistorySection.jsx";
import FooterSection from "./footerSection/FooterSection.jsx";

class MainPage extends Component {
  render() {
    return (
      <MainComp>
        <HeaderSection />
        <SeasonSection />
        <TrainingSection />
        <MediaSection />
        <HistorySection />
        <PartnerSection />
        <FooterSection />
      </MainComp>
    );
  }
}

export default MainPage;
