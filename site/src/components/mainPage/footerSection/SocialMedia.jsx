import React, { Component } from "react";

// Styled-components
import {SocialMediaComp, IconContainer, SocialText} from '../Main.js'

class SocialMedia extends Component {
  render() {
    return (
      <SocialMediaComp>
        <SocialText bold > Folge uns auf: </SocialText>
        <IconContainer>
          <a
            href="https://www.instagram.com/scs_berlin_floorball"
            target="_blank"
            className="instagram"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
            <span />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            href="https://www.facebook.com/Floorball-SCS-Berlin-245258032220296/"
            target="_blank"
            className="facebook"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
            <span />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            href="https://www.youtube.com/channel/UC7KPeJHqborujpQ56eOZVDQ"
            target="_blank"
            className="youtube"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" />
            <span />
          </a>
        </IconContainer>
        <IconContainer>
          <a
            href="https://www.spielerplus.de"
            target="_blank"
            className="spielerPlus"
            rel="noopener noreferrer"
          >
            <i className="fas fa-plus" />
            <span />
          </a>
        </IconContainer>
      </SocialMediaComp>
    );
  }
}

export default SocialMedia;
