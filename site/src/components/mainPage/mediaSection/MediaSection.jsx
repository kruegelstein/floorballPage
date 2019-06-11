import React from "react";
import YouTube from 'react-youtube';

import Videoplayback from "../../../assets/Videoplayback.mp4";

// Styled-components
import {
  MediaComp,
  Videos,
  Divider,
  Text,
  PartnerTitle,
  Video,
  BlockContainer
} from "../Main.js";

class MediaSection extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
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
              -- Playoffs Regionalliga Kleinfeld --{" "}
            </Text>
            <Divider dark thin />
            <BlockContainer>
            <BlockContainer margin={"0 0 1rem 0"}>
            <Text fontSize={"16px"} fontWeight={"bold"}>
            Relegation: Tegel v. BAT
            </Text>
            </BlockContainer>
            <YouTube
        videoId="V1wFiMaTbRA"
        opts={opts}
      />
            </BlockContainer>
            <Divider dark thin wide />
            <BlockContainer>
            <BlockContainer margin={"0 0 1rem 0"}>
            <Text fontSize={"16px"} fontWeight={"bold"}>
            Halbfinale: SCS v. UHC
            </Text>
            </BlockContainer>
            <YouTube
        videoId="KZZ__r5LlgE"
        opts={opts}
      />
            </BlockContainer>
            <Divider dark thin wide />
            <BlockContainer>
            <BlockContainer margin={"0 0 1rem 0"}>
            <Text fontSize={"16px"} fontWeight={"bold"}>
            Halbfinale: Turtles v. Eisbären Juniors
            </Text>
            </BlockContainer>
            <YouTube
        videoId="EZq_6DWtXwY"
        opts={opts}
      />
            </BlockContainer>
            <Divider dark thin wide />
            <BlockContainer margin={"0 0 2rem 0"}>
            <BlockContainer margin={"0 0 1rem 0"}>
            <Text fontSize={"16px"} fontWeight={"bold"}>
            Finale: SCS v. Turtles
            </Text>
            </BlockContainer>
            <YouTube
        videoId="1ZljLv5VtxA"
        opts={opts}
      />
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
            <YouTube
        videoId="fVDnV88Ol7w"
        opts={opts}
      />
            </BlockContainer>
          </Videos>

      </>
    );
  }
}

export default MediaSection;
