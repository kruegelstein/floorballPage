import React, { Component } from "react";

// Styled-components
import {InlineContainer, FlexContainer, Partner, PartnerIcon, PartnerName, PartnerTitle, Text, BlockContainer, Divider} from "../Main.js";

import {Partners} from '../../../constants/Partners.js'
class PartnerSection extends Component {
  render() {
    return (
      <div>
      <PartnerTitle>
      Partner und Unterschützer der Floorball Abteilung des SCS Berlin
      </PartnerTitle>
      <BlockContainer margin={'0 auto 2rem auto'} width={'50%'}>
      <Text fontSize={'18px'} fontWeight={'bold'}>
      Wir bedanken uns bei unseren Partnern!
      </Text>
      </BlockContainer>
      <BlockContainer margin={'0 auto 2rem auto'} width={'50%'}>
      <Text fontSize={'16px'}>
      Der Aufstieg in die zweite Floorball-Bundesliga war ein großer Erfolg für den SC Siemensstadt. Mit der Aufnahme des Spielbetriebs auf nationaler Ebene kamen aber auch Herausforderungen auf die noch junge Abteilung des Vereins zu, die ohne Partner nicht zu stemmen gewesen wäre.
      Wir bedanken uns bei allen Unterstützenden, die unsere Ligateilnahme in der Saison 2018/2019 möglich gemacht haben.
      </Text>
      </BlockContainer>
      <Divider dark/>
      <FlexContainer>
      {Partners.filter((partner,index) => index < 3).map(partner => (
        <InlineContainer>
        <BlockContainer margin={'0 auto 1rem auto'} width={'20rem'}>
        <Text fontSize={'18px'} fontWeight={'bold'}>{partner.title}</Text>
        </BlockContainer>
        <BlockContainer margin={'0 auto 2rem auto'} width={'50%'}>
        <Text height={'6rem'} fontSize={'16px'} justify>{partner.text}</Text>
        </BlockContainer>
        <Partner>
        <PartnerIcon  src={partner.src} alt={partner.alt} height='8rem' width='8rem'/>
        <PartnerName
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        >
        {partner.link}
        </PartnerName>
        </Partner>
        </InlineContainer>
      ))}
      </FlexContainer>
      <Divider dark thin wide/>
      <FlexContainer>
      {Partners.filter((partner,index) => index > 2).map(partner => (
        <InlineContainer margin={'2rem'}>
        <BlockContainer margin={'0 auto 1rem auto'} width={'20rem'}>
        <Text fontSize={'18px'} fontWeight={'bold'}>{partner.title}</Text>
        </BlockContainer>
        <BlockContainer margin={'0 auto 2rem auto'} width={'50%'}>
        <Text height={'6rem'} fontSize={'16px'} justify>{partner.text}</Text>
        </BlockContainer>
        <Partner>
        <PartnerIcon  src={partner.src} alt={partner.alt} height='8rem' width='8rem'/>
        <PartnerName
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        >
        {partner.link}
        </PartnerName>
        </Partner>
        </InlineContainer>
      ))}
      </FlexContainer>
      </div>
    );
  }
}

export default PartnerSection;
