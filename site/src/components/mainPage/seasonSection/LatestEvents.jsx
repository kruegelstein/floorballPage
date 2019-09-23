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
  Result,
  ResultImage,
  Versus
} from "../Main.js";

import { LatestResults } from "../../../constants/LatestResults";

class LatestEvents extends Component {
  render() {
    return (
      <div>
        <LatestTitle>Letzte Ergebnisse</LatestTitle>
        <LatestComp>
          {LatestResults.map(result => (
            <ResultComp>
              <Contest>
                <ContestImage src={result.contestImage} />
                <ResultText>{result.contest}</ResultText>
                <ResultText>|</ResultText>
                <ResultText>{result.date}</ResultText>
                <ResultText>|</ResultText>
              </Contest>
              <ResultHome>
                <HomeImage src={result.homeImage} />
                <ResultText>{result.home}</ResultText>
              </ResultHome>
              <Versus>
                <ResultText>vs.</ResultText>
              </Versus>
              <ResultAway>
                <AwayImage src={result.awayImage} />
                <ResultText>{result.away}</ResultText>
              </ResultAway>
              <Result>
                <ResultText bold>{result.result}</ResultText>
                <ResultImage>{result.resultImage}</ResultImage>
              </Result>
            </ResultComp>
          ))}
        </LatestComp>
      </div>
    );
  }
}

export default LatestEvents;
