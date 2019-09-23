import React, { Component } from "react";

// Team Logos
import SCS from "../../../assets/Logo.png";
import Halle from "../../../assets/Halle.png";
import Logo2BL from "../../../assets/Logo2BL.png";

// Styled-Components
import {
  NextGameComp,
  Team,
  TeamLogo,
  TeamName,
  Matchup,
  MatchupText,
  Placeholder,
  LeagueLogo
} from "../Main.js";

class NextGame extends Component {
  render() {
    return (
      <NextGameComp>
        <LeagueLogo src={Logo2BL} />
        <Team>
          <TeamLogo src={Halle}></TeamLogo>
          <TeamName>USV Halle Saalebiber</TeamName>
        </Team>
        <Matchup>
          <MatchupText>Universitätssporthalle</MatchupText>
          <MatchupText>(Selkestraße 7 06122 Halle (Saale))</MatchupText>
          <MatchupText>Bully: 18:30h</MatchupText>
          <Placeholder>- : -</Placeholder>
          <MatchupText>Samstag, 28.9.19</MatchupText>
        </Matchup>
        <Team>
          <TeamLogo src={SCS}></TeamLogo>
          <TeamName>SCS Berlin</TeamName>
        </Team>
      </NextGameComp>
    );
  }
}

export default NextGame;
