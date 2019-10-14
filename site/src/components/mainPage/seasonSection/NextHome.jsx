import React, { Component } from "react";

// Styled-Components
import {
  LatestTitle,
  LatestComp,
  ResultComp,
  Contest,
  ResultText,
  ContestImage,
  ResultHome,
  HomeImage,
  ResultAway,
  AwayImage,
  Versus
} from "../Main.js";

import { NextHomeGames } from "../../../constants/NextHomeGames";

class NextHome extends Component {
  render() {
    return (
      <div>
        <LatestTitle>Nächste Heimspiele</LatestTitle>
        <LatestComp>
          {NextHomeGames.map(game => (
            <ResultComp key={game.date}>
              <Contest>
                <ContestImage src={game.contestImage} />
                <ResultText>{game.contest}</ResultText>
                <ResultText>|</ResultText>
                <ResultText>{game.date}</ResultText>
                <ResultText>|</ResultText>
              </Contest>
              <ResultHome>
                <HomeImage src={game.homeImage} />
                <ResultText>{game.home}</ResultText>
              </ResultHome>
              <Versus>
                <ResultText>vs.</ResultText>
              </Versus>
              <ResultAway>
                <AwayImage src={game.awayImage} />
                <ResultText>{game.away}</ResultText>
              </ResultAway>
            </ResultComp>
          ))}
        </LatestComp>
      </div>
    );
  }
}

export default NextHome;
