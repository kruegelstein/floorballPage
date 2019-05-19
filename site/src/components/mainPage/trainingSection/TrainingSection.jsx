import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// Styled-Components
import {TrainingComp, Marker, MapContainer, InlineContainer, TrainingTextContainer, TrainingTitle, TrainingText, Divider} from '../Main.js'


const center = {
    lat: 52.54036,
    lng: 13.274020000000064
  }

const marker = {
    lat: 52.541584,
    lng: 13.274020000000064
  }

const zoom = 15


class TrainingSection extends Component {
  render() {
    return (
      <TrainingComp>
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAtpxyRH_TazeUdtVNxpqc-tglE8rjfGg0"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={marker.lat} lng={marker.lng} />
          </GoogleMapReact>
        </MapContainer>
        <InlineContainer>
          <TrainingTextContainer>
            <TrainingTitle>
              Training 2. Bundesliga - Herren
            </TrainingTitle>
            <TrainingText bold>
            Dienstags: 19:00
            </TrainingText>
            <TrainingText bold>
            Donnerstags: 19:30
            </TrainingText>
            <TrainingText bold>
            Ort: Jungfernheideweg 32-48, 13629 Berlin
            </TrainingText>
            <Divider />
            <TrainingText>
            Wir freuen uns über jeden, der die Bundesliga Mannschaft verstärken möchte.
            Wenn du Interesse an einem Probetraining hast, melde dich bei uns!
            </TrainingText>
            <Divider />
            <TrainingText>
            Kontakt: Alexander Jan
            </TrainingText>
            <TrainingText>
            Tel: 0162 4923904
            </TrainingText>
            <TrainingText>
            Mail: info@scs-floorball.de
            </TrainingText>
          </TrainingTextContainer>
        </InlineContainer>
      </TrainingComp>
    );
  }
}

export default TrainingSection;
