import React, { Component } from "react";

// Styled-Components
import {
  PlayerComp,
  TrainingTitle,
  TrainingText,
  BlockContainer,
  TrainingTextContainer,
  Divider
} from "../Main.js";

class PlayerSection extends Component {
  render() {
    return (
      <PlayerComp>
      <TrainingTextContainer>
      <BlockContainer>
      <TrainingTitle>Spieler gesucht – werde ein Teil des Teams</TrainingTitle>
      <TrainingText>Unsere erste Mannschaft sucht nach Unterstützung für die nächste Saison. Du spielst schon einige Jahre Floorball, bist motiviert und hast Lust auf Floorball in der zweiten Bundesliga? Melde dich einfach zum Probetraining an und zeig uns, was du drauf hast.</TrainingText>
      <TrainingText >Anfänger? Hobbyspieler? Nachwuchstalent? Auch für unseren Spielbetrieb im Kleinfeld, in der Großfeld-Regionalliga und für unsere Jugendmannschaft suchen wir immer wieder neue Spieler. Sprich uns einfach an – wir freuen uns über jeden, der vorbeikommt!</TrainingText>
      <TrainingText >Mail: info@scs-floorball.de</TrainingText>
      </BlockContainer>
      <Divider />
      <BlockContainer>
      <TrainingTitle>Neue Spieler zur Saison 19/20</TrainingTitle>
      <NewPlayers src={newPlayers} />
      </BlockContainer>
      </TrainingTextContainer>
      </PlayerComp>
    );
  }
}

export default PlayerSection;
