import React from "react";

import Videoplayback from "../../../assets/Videoplayback.mp4";

// Styled-components
import {MediaComp, Videos, Divider, Text, PartnerTitle, Video, BlockContainer, Button} from "../Main.js";

class MediaSection extends React.Component {
  state = {
    isPlaying: false,
    video: null
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      video: document.getElementById("video_1")
    })
  }

  playVideo = () => {
        this.state.video.play();
    }

  pauseVideo = () => {
      this.state.video.pause();
  }
  toggleVideo =()=>{
    const isPlaying = this.state.isPlaying
    this.setState({
      ...this.state,
      isPlaying: !this.state.isPlaying
    }, () => {
      isPlaying ?
      this.pauseVideo() : this.playVideo()
    })

  }
  render() {

    return (
      <>
      <MediaComp autoPlay muted loop>
      <source src={Videoplayback} type="video/mp4"/>
      </MediaComp>
      <Videos>
      <PartnerTitle>
      Aktuelle Videos der Floorball Abteilung des SC Siemensstadt
      </PartnerTitle>
      <Text fontSize={'18px'} fontWeight={'bold'}>-- Playoffs Regionalliga Kleinfeld -- </Text>
      <BlockContainer>
        <Video id="video_1"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Halbfinale: SCS v. UHC</Text>
        </BlockContainer>
        <Button onClick={this.toggleVideo}>{this.state.isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <Divider dark thin wide/>
      <BlockContainer>
        <Video id="video_1"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Halbfinale: Turtles v. Eisbären Juniors</Text>
        </BlockContainer>
        <Button onClick={this.toggleVideo}>{this.state.isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <Divider dark thin wide/>
      <BlockContainer>
        <Video id="video_1"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Spiel um Platz 3: UHC v. Eisbären Juniors</Text>
        </BlockContainer>
        <Button onClick={this.toggleVideo}>{this.state.isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <BlockContainer margin={'0 0 2rem 0'}>
        <Video id="video_1"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Finale: SCS v. Turtles</Text>
        </BlockContainer>
        <Button onClick={this.toggleVideo}>{this.state.isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      </Videos>
      </>
    );
  }
  }

export default MediaSection;
