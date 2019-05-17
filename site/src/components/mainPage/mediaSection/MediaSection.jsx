import React from "react";

import Videoplayback from "../../../assets/Videoplayback.mp4";

// Styled-components
import {MediaComp, Videos, Divider, Text, PartnerTitle, Video, BlockContainer, Button} from "../Main.js";

class MediaSection extends React.Component {
  state = {
    video_1: {
      node: null,
      isPlaying: false
    },
    video_2: {
      node: null,
      isPlaying: false
    },
    video_3: {
      node: null,
      isPlaying: false
    },
    video_4: {
      node: null,
      isPlaying: false
    },
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      video_1: {
        ...this.state.video_1,
        node: document.getElementById("video_1")
      },
      video_2: {
        ...this.state.video_2,
        node: document.getElementById("video_2")
      },
      video_3: {
        ...this.state.video_3,
        node: document.getElementById("video_3")
      },
      video_4: {
        ...this.state.video_4,
        node: document.getElementById("video_4")
      },
    })
  }

  playVideo = (id) => {
    // Pause other video if playing
    this.state['video_1'].node.pause()
    this.state['video_2'].node.pause()
    this.state['video_3'].node.pause()
    this.state['video_4'].node.pause()
    this.setState({
      ...this.state,
      'video_1': {
        node: this.state['video_1'].node,
        isPlaying: false
      },
      'video_2': {
        node: this.state['video_2'].node,
        isPlaying: false
      },
      'video_3': {
        node: this.state['video_3'].node,
        isPlaying: false
      },
      'video_4': {
        node: this.state['video_4'].node,
        isPlaying: false
      }
    }, () => {
      this.state[id].node.play();
      this.setState({
        ...this.state,
        [id]: {
          ...this.state[id],
          isPlaying: true
        }
      })
    })
  }

  pauseVideo = (id) => {
    this.state[id].node.pause();
    this.setState({
      ...this.state,
      [id]: {
        ...this.state[id],
        isPlaying: false
      }
    })
  }

  resetVideo = (id) => {
    const video = this.state[id].node;
    video.pause();
    video.currentTime = 0;
    this.setState({
      ...this.state,
      [id]: {
        ...this.state[id],
        isPlaying: false
      }
    })
  }

  toggleVideo =(id)=>{
    const isPlaying = this.state[id].isPlaying
      isPlaying ?
      this.pauseVideo(id) : this.playVideo(id)
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
        <Video id="video_1" onEnded={() => this.resetVideo('video_1')}><source  src={Videoplayback} type="video/mp4" /></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Halbfinale: SCS v. UHC</Text>
        </BlockContainer>
        <Button onClick={() => this.toggleVideo('video_1')}>{this.state['video_1'].isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <Divider dark thin wide/>
      <BlockContainer>
        <Video id="video_2"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Halbfinale: Turtles v. Eisbären Juniors</Text>
        </BlockContainer>
        <Button onClick={() => this.toggleVideo('video_2')}>{this.state['video_2'].isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <Divider dark thin wide/>
      <BlockContainer>
        <Video id="video_3"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Spiel um Platz 3: UHC v. Eisbären Juniors</Text>
        </BlockContainer>
        <Button onClick={() => this.toggleVideo('video_3')}>{this.state['video_3'].isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      <Divider dark thin wide/>
      <BlockContainer margin={'0 0 2rem 0'}>
        <Video id="video_4"><source  src={Videoplayback} type="video/mp4"/></Video>
        <BlockContainer margin={'0 0 1rem 0'}>
        <Text fontSize={'16px'} fontWeight={'bold'}>Finale: SCS v. Turtles</Text>
        </BlockContainer>
        <Button onClick={() => this.toggleVideo('video_4')}>{this.state['video_4'].isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      </Videos>
      </>
    );
  }
  }

export default MediaSection;
