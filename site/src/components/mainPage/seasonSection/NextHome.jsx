import React, { Component } from "react";

// Styled-Components
import {
  LatestTitle,
  NextComp,
  ResultComp,
  ContestNext,
  ResultText,
  ContestImage,
  NextHomeConatiner,
  HomeImage,
  NextHomeAway,
  AwayImage,
  Versus
} from "../Main.js";

import { NextHomeGames } from "../../../constants/NextHomeGames";

class NextHome extends Component {
  render() {
    return (
      <div>
        <LatestTitle>Nächste Heimspiele</LatestTitle>
        <NextComp>
          {NextHomeGames.map(game => (
            <ResultComp key={game.date}>
              <ContestNext>
                <ContestImage src={game.contestImage} />
                <ResultText>{game.contest}</ResultText>
                <ResultText>|</ResultText>
                <ResultText>{game.date}</ResultText>
                <ResultText>|</ResultText>
                <ResultText>{game.time}</ResultText>
                <ResultText>|</ResultText>
              </ContestNext>
              <NextHomeConatiner>
                <ResultText>{game.home}</ResultText>
                <HomeImage src={game.homeImage} />
              </NextHomeConatiner>
              <Versus>
                <ResultText>vs.</ResultText>
              </Versus>
              <NextHomeAway>
                <AwayImage src={game.awayImage} />
                <ResultText>{game.away}</ResultText>
              </NextHomeAway>
            </ResultComp>
          ))}
        </NextComp>
      </div>
    );
  }
}

export default NextHome;
