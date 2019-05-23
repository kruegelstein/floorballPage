import styled from "styled-components";

import Hintergrund from "../../assets/Hintergrund1.jpg";
import SCSLogo from "../../assets/Logo.png";
import MapMarker from "../../assets/MapMarker.png";

export const MainComp = styled.div`
  color: #2c2c2f;
  @media only screen (max-width: 600px) {
    width: 100vh;
    height: 100vh;
  }
`;

export const HeaderComp = styled.div`
  height: 40rem;
  width: 100%;
  background: url(${Hintergrund}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media only screen (max-width: 600px) {
    max-width: 100%;
  }
`;

export const MediaComp = styled.video`
  height: 40rem;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  height: 5rem;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Logo = styled.div`
  height: 8rem;
  width: 8rem;
  position: absolute;
  margin: 0.5rem 2rem;
  background: url(${SCSLogo}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
`;

export const HeaderTextComp = styled.div`
  text-align: center;
  color: #e0e0e0;
  width: 50%;
  margin: 10rem auto 0 auto;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 36px;
`;

export const HeaderTextSection = styled.p`
  font-size: 22px;
  text-align: justify;
`;

export const SeasonComp = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const InlineContainer = styled.div`
  width: 50%;
  display: inline-block;
  margin: ${props => (props.margin ? props.margin : "")};
`;

export const TableComp = styled.table`
  color: #e0e0e0;
  border: 1px solid #8c96a0;
  box-shadow: 10px 10px 10px #8c96a0;
  border-radius: 10px;
  margin: auto;
  height: auto;
  width: 50%;
  border-collapse: unset;
  border-spacing: unset;
  @media (max-width: 700px) {
    font-size: x-small;
  }
`;

export const TableBody = styled.tbody``;

export const TableCol = styled.th`
  ${props => (props.arrow ? "display: inline-flex;" : "")};
  ${props => (props.arrow ? "position: absolute" : "position: relative")};
  ${props => (props.arrow ? "left: 10px;" : "")};
  ${props => (props.headerLeft ? "border-top-left-radius: 10px;" : "")};
  ${props => (props.headerRight ? "border-top-right-radius: 10px;" : "")};
`;

export const TableRow = styled.tr`
  text-align: ${props => (props.header ? "center" : "")};
  margin-bottom: 0.2rem;
  background-color: ${props => (props.even ? "#dedede" : "")};
  background-color: ${props => (props.header ? "#868686" : "")};
  height: ${props => (props.header ? "2.5rem" : "2rem")};
  font-size: ${props => (props.header ? "20px" : "16px")};
  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const Text = styled.span`
  color: ${props => (props.color ? props.color : "#2c2c2f")};
  ${props => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${props => (props.italic ? `font-style: italic` : "")};
  ${props =>
    props.fontWeight
      ? `font-weight: ${props.fontWeight}`
      : "font-weight: normal"};
  ${props => (props.padding ? `padding: ${props.padding}` : "padding: 0")};
  display: inline-block;
  vertical-align: middle;
  margin: auto;
  ${props => (props.justify ? "text-align: justify" : "")}
  ${props => (props.width ? `width: ${props.width}` : "")};
  ${props => (props.height ? `height: ${props.height}` : "")};
  &:hover {
    ${props => (props.hoverEffect ? "cursor: pointer" : "")};
  }
`;
export const BlockContainer = styled.div`
  ${props => (props.margin ? `margin: ${props.margin}` : "")};
  ${props => (props.width ? `width: ${props.width}` : "")};
`;

export const TrainingComp = styled.div`
  background-color: #3d4d64;
  height: 40rem;
  width: 100%;
  display: inline-flex;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Marker = styled.div`
  width: 2rem;
  height: 3rem;
  background-image: url(${MapMarker});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const MapContainer = styled.div`
  height: 35rem;
  width: 50%;
  margin: auto 1rem;
  display: inline-block;
`;

export const TrainingTextContainer = styled.div`
  width: 30rem;
  textalign: center;
  margin: 5rem auto 0;
`;

export const TrainingTitle = styled.h2`
  color: #e0e0e0;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 3rem;
`;

export const TrainingText = styled.p`
  color: #e0e0e0;
  margin: 1rem 0;
  font-size: 20px;
  text-align: justify;
  ${props => (props.bold ? "font-weight: bold" : "")}
`;

export const IconContainer = styled.div``;

export const SocialMediaComp = styled.div`
  display: inline-flex;
  margin: 0 2rem;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const PartnerComp = SeasonComp.extend`
  display: inline-flex;
  height: 20rem;
`;

export const FooterComp = TrainingComp.extend`
  height: 7rem;
  position: relative;
  background-color: #3b3b3c;
`;

export const Partner = styled.div`
  width: 15rem;
  height: 10rem;
  margin: auto;
  text-align: center;
`;

export const PartnerIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const PartnerName = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  &: visited {
    color: #2c2c2f;
  }
`;

export const PartnerTitle = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 3rem;
`;

export const NextGameComp = styled.div`
  height: 20rem;
  display: inline-flex;
  margin: 2rem auto;
  border-bottom: 1px solid grey;
`;

export const Team = styled.div`
  width: 11rem;
  height: 11rem;
  margin: 0 2rem;
`;

export const TeamLogo = styled.img`
  height: 100%;
  width: 100%;
  border: 2px solid #3d4d64;
  border-radius: 50%;
`;

export const TeamName = styled.h3`
  color: #8c96a0;
`;

export const Matchup = styled.div``;

export const MatchupText = styled.p`
  color: #8c96a0;
  font-size: 20px;
`;

export const Placeholder = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

export const LeagueLogo = styled.img`
  width: 8rem;
  height: 5rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

export const Divider = styled.div`
  width: ${props => (props.wide ? "60%" : "8rem")};
  border: ${props => (props.thin ? ".5px" : "1.5px")} solid
    ${props => (props.dark ? "#2c2c2f" : "#e0e0e0")};
  margin: 2rem auto;
`;

export const FlexContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 24rem;
  margin: 2rem 0;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Videos = styled.div`
  height: auto;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Video = styled.video`
  height: 20rem;
  display: block;
  margin: 2rem auto;
  border-radius: 2px;
`;

export const Button = styled.button`
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
  background-color: {
    props=> props.light ? '#e0e0e0' : "transparent";
  }
  color: rgb(53, 53, 53);
  border-radius: 20px;
  padding: 10px 24px;
  margin: 0px;
  transition: all 300ms ease 0s;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(53, 53, 53);
  border-image: initial;
  &:active {
    background-color: #3d4d64;
    border-color: rgb(53, 53, 53);
  }
  &:hover {
    background-color: #3d4d64;
    color: #e0e0e0;
    box-shadow: none;
    border-color: rgb(53, 53, 53);
  }
  &:focus {
    outline: none;
  }
`;

export const TimeLine = styled.div`
  box-sizing: border-box;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #e0e0e0;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

export const TimeItemLeft = styled.div`
  box-sizing: border-box;
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 0;
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #e0e0e0;
    border: 4px solid #8c949e;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #e0e0e0;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #e0e0e0;
  }
`;

export const TimeItemRight = styled.div`
  box-sizing: border-box;
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #e0e0e0;
    border: 4px solid #8c949e;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;
  }
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #e0e0e0;
    border-width: 10px 10px 10px 0;
    border-color: transparent #e0e0e0 transparent transparent;
  }
`;

export const TimeItemContent = styled.div`
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #e0e0e0;
  position: relative;
  border-radius: 12px;
  box-shadow: 5px 5px 8px #8c96a0;
`;

export const HistoryComp = styled.div`
  background-color: #3d4d64;
  height: auto;
  width: 100%;
  margin: 2rem 0 0 0;
  padding-bottom: 2rem;
  display: block;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const HistoryTitle = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  padding-top: 2rem;
  color: #e0e0e0;
`;

export const SocialText = styled.p`
  color: #e0e0e0;
  margin-right: 1.5rem;
  font-size: 20px;
  text-align: justify;
  ${props => (props.bold ? "font-weight: bold" : "")}
  vertical-align: middle;
  line-height: 40px;
`;

export const LinksComp = styled.div`
  display: inline-flex;
  margin: 0 2rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const InfosComp = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
`;

export const InfosText = styled.span`
  cursor: pointer;
  font-size: 18px;
  margin: 0 1rem;
  color: #e0e0e0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Download = styled.a`
  text-decoration: none;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: 0;
  margin-left: 1rem;
`;

export const ImprintContainer = styled.div`
  background-color: #3d4d64;
  color: #e0e0e0;
  padding: 2rem;
`;
