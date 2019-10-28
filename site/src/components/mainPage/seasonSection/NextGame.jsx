import React, { Component } from "react";

// Team Logos
import SCS from "../../../assets/Logo.png";
import Rennsteig from "../../../assets/Rennsteig.png";
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
          <TeamLogo src={Rennsteig}></TeamLogo>
          <TeamName>FC Rennsteig Avalanche</TeamName>
        </Team>
        <Matchup>
          <MatchupText>Guts-Muths Turnhalle</MatchupText>
          <MatchupText>(Apelsbergstraße 98724 Neuhaus am Rennweg)</MatchupText>
          <MatchupText>Bully: 18:00h</MatchupText>
          <Placeholder>- : -</Placeholder>
          <MatchupText>Samstag, 2.11.19</MatchupText>
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
