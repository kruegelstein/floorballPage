import React, { Component } from "react";

// Team Logos
import SCS from "../../../assets/Logo.png";
import BalticStorms from "../../../assets/BalticStorms.jpg";
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
          <TeamLogo src={BalticStorms}></TeamLogo>
          <TeamName>Baltic Storms</TeamName>
        </Team>
        <Matchup>
          <MatchupText>Tallinhalle</MatchupText>
          <MatchupText>(Elendsredder 24, 24106 Kiel)</MatchupText>
          <MatchupText>Bully: 17:30h</MatchupText>
          <Placeholder>- : -</Placeholder>
          <MatchupText>Samstag, 16.11.19</MatchupText>
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
