import React, { Component } from "react";

// Styled-components
import {InfosComp, InfosText} from '../Main.js'

class Infos extends Component {
  render() {
    return (
      <InfosComp>
        <InfosText>Eintrittsformular</InfosText>
        <InfosText>Impressum</InfosText>
      </InfosComp>
    );
  }
}

export default Infos;
