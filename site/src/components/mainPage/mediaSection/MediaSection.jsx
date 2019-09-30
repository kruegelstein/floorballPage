import React from "react";
import YouTube from "react-youtube";

import Videoplayback from "../../../assets/Videoplayback.mp4";

// Styled-components
import {
  MediaComp,
  Videos,
  Divider,
  Text,
  PartnerTitle,
  BlockContainer
} from "../Main.js";

class MediaSection extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <>
        <MediaComp autoPlay muted loop>
          <source src={Videoplayback} type="video/mp4" />
        </MediaComp>

        <Videos>
          <PartnerTitle>
            Aktuelle Videos der Floorball Abteilung des SC Siemensstadt
          </PartnerTitle>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            -- 2. Floorball Bundesliga 19/20 --{" "}
          </Text>
          <Divider dark thin />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                2. Spieltag - USV Halle Saalebiber v. SCS Berlin
              </Text>
            </BlockContainer>
            <YouTube videoId="Bdo_I7NCsiE" opts={opts} />
          </BlockContainer>
          <Divider dark thin />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                1. Spieltag - SCS v. Floorball Ingolstadt/Nordheim
              </Text>
            </BlockContainer>
            <YouTube videoId="JasaZ1DC6a4" opts={opts} />
          </BlockContainer>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            -- Floorball Deutschland Pokal 19/20 --{" "}
          </Text>
          <Divider dark thin />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                1. Runde: UHC Elster v. SCS
              </Text>
            </BlockContainer>
            <YouTube videoId="wrKlO4_0VyU" opts={opts} />
          </BlockContainer>
          <Divider dark thin wide />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                1. Runde: SG SCS/Eisbären Juniors v. TV Dinklage 04
              </Text>
            </BlockContainer>
            <YouTube videoId="CQcHG0Y-rKI" opts={opts} />
          </BlockContainer>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            -- Playoffs Regionalliga Kleinfeld --{" "}
          </Text>
          <Divider dark thin />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                Finale: SCS v. Turtles
              </Text>
            </BlockContainer>
            <YouTube videoId="1ZljLv5VtxA" opts={opts} />
          </BlockContainer>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            -- Qualifikation Deutsche Meisterschaft Kleinfeld --{" "}
          </Text>
          <Divider dark thin />
          <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                Qualifikation: SCS v. Schkeuditz
              </Text>
            </BlockContainer>
            <YouTube videoId="fVDnV88Ol7w" opts={opts} />
          </BlockContainer>
        </Videos>
      </>
    );
  }
}

export default MediaSection;
