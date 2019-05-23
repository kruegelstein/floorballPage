import React, { Component } from "react";

// Styled-components
import {
  InlineContainer,
  FlexContainer,
  Partner,
  PartnerIcon,
  PartnerName,
  PartnerTitle,
  Text,
  BlockContainer,
  Divider
} from "../Main.js";

import { Partners } from "../../../constants/Partners.js";
class PartnerSection extends Component {
  render() {
    return (
      <>
        <PartnerTitle>
          Partner und Unterschützer der Floorball Abteilung des SCS Berlin
        </PartnerTitle>
        <BlockContainer margin={"0 auto 2rem auto"} width={"50%"}>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            Wir bedanken uns bei unseren Partnern!
          </Text>
        </BlockContainer>
        <BlockContainer margin={"0 auto 2rem auto"} width={"50%"}>
          <Text fontSize={"16px"}>
            Der Aufstieg in die zweite Floorball-Bundesliga war ein großer
            Erfolg für den SC Siemensstadt. Mit der Aufnahme des Spielbetriebs
            auf nationaler Ebene kamen aber auch Herausforderungen auf die noch
            junge Abteilung des Vereins zu, die ohne Partner nicht zu stemmen
            gewesen wäre. Wir bedanken uns bei allen Unterstützenden, die unsere
            Ligateilnahme in der Saison 2018/2019 möglich gemacht haben.
          </Text>
        </BlockContainer>
        <Divider dark />
        <FlexContainer margin={"0 0 2rem 0"}>
          {Partners.filter((partner, index) => index < 3).map(
            (partner, index) => (
              <InlineContainer key={index}>
                <BlockContainer margin={"0 auto 1rem auto"} width={"20rem"}>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    {partner.title}
                  </Text>
                </BlockContainer>
                <BlockContainer margin={"0 auto 2rem auto"} width={"50%"}>
                  <Text height={"10rem"} fontSize={"16px"} justify>
                    {partner.text}
                  </Text>
                </BlockContainer>
                <Partner>
                  <PartnerIcon
                    src={partner.src}
                    alt={partner.alt}
                    height="8rem"
                    width="8rem"
                  />
                  <PartnerName
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {partner.link}
                  </PartnerName>
                </Partner>
              </InlineContainer>
            )
          )}
        </FlexContainer>
        <Divider dark thin wide />
        <FlexContainer>
          {Partners.filter((partner, index) => index > 2).map(
            (partner, index) => (
              <InlineContainer margin={"0 2rem 2rem 2rem"} key={index}>
                <BlockContainer margin={"0 auto 1rem auto"} width={"20rem"}>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    {partner.title}
                  </Text>
                </BlockContainer>
                <BlockContainer margin={"0 auto 2rem auto"} width={"40%"}>
                  <Text height={"10rem"} fontSize={"16px"} justify>
                    {partner.text}
                  </Text>
                </BlockContainer>
                <Partner>
                  <PartnerIcon
                    src={partner.src}
                    alt={partner.alt}
                    height="8rem"
                    width="8rem"
                  />
                  <PartnerName
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {partner.link}
                  </PartnerName>
                </Partner>
              </InlineContainer>
            )
          )}
        </FlexContainer>
        <BlockContainer>
          <PartnerTitle withTopMargin>
            Werden auch Sie ein Partner!{" "}
          </PartnerTitle>
          <BlockContainer margin={"0 auto 2rem auto"} width={"50%"}>
            <Text fontSize={"16px"}>
              Unsere Spielausrüstung, Hallenausstattung und unsere
              Kommunikationskanäle liefern zahlreiche Möglichkeiten, Sie und
              Ihre Marke zu präsentieren. Durch unsere Zuschauer in Berlin, den
              deutschlandweiten Ligabetrieb, aber auch unsere
              Marketingaktivitäten erreichen wir ein breites Publikum. Mit Ihrem
              Sponsoring unterstützen Sie unsere Mannschaft in der zweiten
              Bundesliga, die Aufrechterhaltung des kostspieligen Spielbetriebs
              sowie die Förderung unserer Hobby- und Jugendmannschaften.
              Sprechen Sie uns an – gerne finden wir gemeinsam mit Ihnen eine
              individuelle Lösung. Kontaktieren Sie uns unter
              info@scs-floorball.de
            </Text>
          </BlockContainer>
          <Divider dark />
          <BlockContainer margin={"0 auto 2rem auto"} width={"50%"}>
            <Text fontSize={"16px"}>
              Wir freuen uns auch über Unterstützung in kleinerem Rahmen – das
              ist zum Beispiel über Einkäufe über das Bonusprogramm{" "}
              <a
                id="klubkasseLink"
                href="https://www.klubkasse.de/verein/sc-siemensstadt-berlin-floorball.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Klubkasse
              </a>{" "}
              möglich.
            </Text>
          </BlockContainer>
        </BlockContainer>
      </>
    );
  }
}

export default PartnerSection;
