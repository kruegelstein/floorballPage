import React, { Component } from "react";

// Styled-components
import { MainComp } from "./Main.js";

import HeaderSection from "./headerSection/HeaderSection.jsx";
import NewsSection from "./newsSection/NewsSection.jsx";
import SeasonSection from "./seasonSection/SeasonSection.jsx";
import TrainingSection from "./trainingSection/TrainingSection.jsx";
import PlayerSection from "./playerSection/PlayerSection.jsx";
import PartnerSection from "./partnerSection/PartnerSection.jsx";
import MediaSection from "./mediaSection/MediaSection.jsx";
import HistorySection from "./historySection/HistorySection.jsx";
import FooterSection from "./footerSection/FooterSection.jsx";

class MainPage extends Component {
  render() {
    const screenWidth = window.screen.width;
    const ratio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    return (
      <MainComp mobileWidth={`${screenWidth * ratio}px`}>
        <HeaderSection />
        <NewsSection />
        <SeasonSection />
        <PlayerSection />
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
