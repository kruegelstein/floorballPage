import React, { Component } from "react";

// Styled-components
import {PartnerComp, Partner, PartnerIcon, PartnerName, PartnerTitle} from "../Main.js";

import {Partners} from '../../../constants/Partners.js'
class PartnerSection extends Component {
  render() {
    return (
      <div>
      <PartnerTitle>
      Partner und Unterschützer der Floorball Abteilung des SCS Berlin
      </PartnerTitle>
      <PartnerComp>
        {Partners.map(partner =>
          <Partner wide={partner.wide}>
          <PartnerIcon  src={partner.src} alt={partner.alt}/>
          <PartnerName
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          >
          {partner.name}
          </PartnerName>
          </Partner>
        )}
      </PartnerComp>
      </div>
    );
  }
}

export default PartnerSection;
