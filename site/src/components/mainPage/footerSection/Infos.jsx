import React, { Component } from "react";

// Styled-components
import {InfosComp, InfosText, Download} from '../Main.js'
import Eintritt from "../../../assets/Eintritt.pdf";

class Infos extends Component {
  render() {
    return (
      <InfosComp>
        <Download href={Eintritt} download><InfosText>Eintrittsformular</InfosText></Download>
        <InfosText>Impressum</InfosText>
      </InfosComp>
    );
  }
}

export default Infos;
