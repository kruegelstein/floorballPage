import React, { Component } from "react";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";

// Styled-components

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.9;
  z-index: 999;
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 20px 20px;
  transform: translateX(-20%);
  background-color: #0b0a3a;
`;

const NavigationItem = styled.div`
  display: inline-block;
  color: #e8e8e8;
  font-size: 20px;
  cursor: pointer;
  padding: 16px;
  font-weight: bold;
`;

class Navigation extends Component {
  scrollTo(id) {
    const yOffset = -80;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
  render() {
    return (
      <NavigationContainer>
        <NavigationItem onClick={() => this.scrollTo("about")}>
          Über uns
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("news")}>
          News
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("season")}>
          Aktuelle Saison
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("training")}>
          Training
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("videos")}>
          Videos
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("history")}>
          Erfolge
        </NavigationItem>
        <NavigationItem onClick={() => this.scrollTo("partner")}>
          Partner
        </NavigationItem>
      </NavigationContainer>
    );
  }
}

export default Navigation;
