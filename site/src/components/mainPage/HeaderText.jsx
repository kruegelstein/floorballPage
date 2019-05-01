import React, { Component } from "react";

// Styled-components
import {HeaderTextComp, HeaderTitle, HeaderTextSection} from "./Main.js";


class HeaderText extends Component {
  render() {
    return (
      <HeaderTextComp>
        <HeaderTitle>SCS Floorball Family - Willkommen im Hauptquartier</HeaderTitle>
        <HeaderTextSection>Der SC Siemensstadt ist ein Berliner Floorball Verein, der seit 2018 in der 2. Floorball Bundesliga spielt. Unsere Heimspiele tragen wir im Sport Centrum Siemensstadt aus. Mit dem 7. Tabellenplatz in der Saison 2018/19 konnten wir uns in der zweit höchsten Spielklasse in Floorball Deutschland etablieren. Der familiäre Verein sucht immer talentierte, motivierte neue Floorballspieler, die Teil unseres Teams werden wollen.</HeaderTextSection>
      </HeaderTextComp>
    );
  }
}

export default HeaderText;
