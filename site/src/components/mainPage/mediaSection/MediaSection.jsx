import React from "react";

import Videoplayback from "../../../assets/Videoplayback.mp4";

// Styled-components
import {MediaComp, Videos, Video, BlockContainer, Button} from "../Main.js";

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
    this.setState({
      ...this.state,
      isPlaying: !this.state.isPlaying
    }, () => {
      this.state.isPlaying ?
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
      <BlockContainer>
      <Video id="video_1"><source  src={Videoplayback} type="video/mp4"/></Video>
      <Button onClick={this.toggleVideo}>{this.state.isPlaying ? 'Pause' : 'Play'}</Button>
      </BlockContainer>
      </Videos>
      </>
    );
  }
  }

export default MediaSection;
