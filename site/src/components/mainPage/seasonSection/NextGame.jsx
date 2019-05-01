import React, { Component } from "react";

// Team Logos
import SCS from '../../../assets/Logo.png'
import Leipzig from '../../../assets/Leipzig.png'
import Logo2BL from '../../../assets/Logo2BL.png'

// Styled-Components
import {NextGameComp, Team, TeamLogo, TeamName, Matchup, MatchupText, Placeholder, LeagueLogo} from '../Main.js'

class NextGame extends Component {
  render() {
    return (
      <NextGameComp>
        <LeagueLogo src={Logo2BL}/>
        <Team>
          <TeamLogo src={SCS}>
          </TeamLogo>
          <TeamName>
            SCS Berlin
          </TeamName>
        </Team>
        <Matchup>
          <MatchupText>
            SC Siemensstadt Boulstr. 14, 13629 Berlin
          </MatchupText>
          <MatchupText>
            Bully um 14:00
          </MatchupText>
          <Placeholder>
            - : -
          </Placeholder>
          <MatchupText>
            Samstag, 22.9.19
          </MatchupText>
        </Matchup>
        <Team>
          <TeamLogo src={Leipzig}>
          </TeamLogo>
          <TeamName>
            SC DHfK Leipzig
          </TeamName>
        </Team>
      </NextGameComp>
    );
  }
}

export default NextGame;
