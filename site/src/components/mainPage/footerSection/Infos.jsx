import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styled-components
import { InfosComp, InfosText, Download } from "../Main.js";
import Eintritt from "../../../assets/Eintritt.pdf";

class Infos extends Component {
  render() {
    return (
      <InfosComp>
        <Download href={Eintritt} download>
          <InfosText>Eintrittsformular</InfosText>
        </Download>
        <Link className="imprint" to="/imprint">
          <InfosText>Impressum</InfosText>
        </Link>
      </InfosComp>
    );
  }
}

export default Infos;
