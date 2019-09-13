import React, { Component } from "react";

// Styled-Components
import {
  PlayerComp,
  PlayerTitle,
  PlayerText,
  BlockContainer,
  PlayerTextContainer
} from "../Main.js";

class PlayerSection extends Component {
  render() {
    return (
      <PlayerComp>
        <PlayerTextContainer>
          <BlockContainer>
            >
            <PlayerTitle>
              Spieler gesucht – werde ein Teil des Teams!
            </PlayerTitle>
            <PlayerText>
              Unsere erste Mannschaft sucht nach Unterstützung für die nächste
              Saison. Du spielst schon einige Jahre Floorball, bist motiviert
              und hast Lust auf Floorball in der zweiten Bundesliga? Melde dich
              einfach zum Probetraining an und zeig uns, was du drauf hast.
            </PlayerText>
            <PlayerText>
              Anfänger? Hobbyspieler? Nachwuchstalent? Auch für unseren
              Spielbetrieb im Kleinfeld, in der Großfeld-Regionalliga und für
              unsere Jugendmannschaft suchen wir immer wieder neue Spieler.
              Sprich uns einfach an – wir freuen uns über jeden, der
              vorbeikommt!
            </PlayerText>
            <PlayerText>Mail: info@scs-floorball.de</PlayerText>
          </BlockContainer>
        </PlayerTextContainer>
      </PlayerComp>
    );
  }
}

export default PlayerSection;
