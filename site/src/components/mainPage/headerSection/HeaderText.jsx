import React, { Component } from "react";

// Styled-components
import {
  HeaderTextComp,
  HeaderTitle,
  HeaderTextSection,
  Divider
} from "../Main.js";

class HeaderText extends Component {
  render() {
    return (
      <HeaderTextComp>
        <HeaderTitle>
          SCS Floorball Family - Willkommen im Hauptquartier
        </HeaderTitle>
        <Divider />
        <HeaderTextSection>
          Der SCS Berlin ist ein Floorball - Team im Berliner Verein SC
          Siemensstadt. Unsere Heimspiele tragen wir im Sport Centrum
          Siemensstadt aus. In der Saison 2017/2018 gelang unserer ersten
          Mannschaft der Aufstieg in die zweite Floorball - Bundesliga, mit dem
          7. Tabellenplatz in der Saison 2018/19 konnten wir uns in der
          zweithöchsten Spielklasse in Floorball Deutschland etablieren. Der
          familiäre Verein sucht immer neue talentierte und motivierte
          Floorballspieler, die ein Teil unseres Teams werden wollen.
        </HeaderTextSection>
      </HeaderTextComp>
    );
  }
}

export default HeaderText;
