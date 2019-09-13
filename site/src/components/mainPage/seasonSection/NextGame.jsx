import React, { Component } from "react";

// Team Logos
import SCS from "../../../assets/Logo.png";
import Ingolstadt from "../../../assets/Ingolstadt.png";
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
          <TeamLogo src={Ingolstadt}></TeamLogo>
          <TeamName>Floorball Ingolstadt/Nordheim</TeamName>
        </Team>
        <Matchup>
          <MatchupText>Horst-Korber-Sportzentrum</MatchupText>
          <MatchupText>(Glockenturmstraße 3-5 14053 Berlin)</MatchupText>
          <MatchupText>Bully: 14.00h</MatchupText>
          <Placeholder>- : -</Placeholder>
          <MatchupText>Sonntag, 22.9.19</MatchupText>
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
