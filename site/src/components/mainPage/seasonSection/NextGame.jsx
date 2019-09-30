import React, { Component } from "react";

// Team Logos
import SCS from "../../../assets/Logo.png";
import Feuerbach from "../../../assets/Feuerbach.png";
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
          <TeamLogo src={SCS}></TeamLogo>
          <TeamName>SCS Berlin</TeamName>
        </Team>
        <Matchup>
          <MatchupText>Sport Centrum Siemensstadt</MatchupText>
          <MatchupText>(Buolstraße 14 13629 Berlin)</MatchupText>
          <MatchupText>Bully: 16:00h</MatchupText>
          <Placeholder>- : -</Placeholder>
          <MatchupText>Samstag, 26.10.19</MatchupText>
        </Matchup>
        <Team>
          <TeamLogo src={Feuerbach}></TeamLogo>
          <TeamName>Sportvg Feuerbach</TeamName>
        </Team>
      </NextGameComp>
    );
  }
}

export default NextGame;
