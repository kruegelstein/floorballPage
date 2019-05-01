import styled from "styled-components";

import Hintergrund from "../../assets/Hintergrund2.png";
import SCSLogo from "../../assets/Logo.png";
import MapMarker from "../../assets/MapMarker.png";

export const MainComp = styled.div`
  height: 100%;
  width: 100%;
`;

export const HeaderComp = styled.div`
  height: 35rem;
  width: 100%;
  background: url(${Hintergrund}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const HeaderContainer = styled.div`
  height: 5rem;
  width: 100%;
`;

export const Logo = styled.div`
  height: 6rem;
  width: 6rem;
  position: absolute;
  margin: .5rem 2rem;
  background: url(${SCSLogo}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const HeaderTextComp = styled.div`
  text-align: center;
  color: white;
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
  position: relative;
`;

export const InlineContainer = styled.div`
  width: 50%;
  display: inline-block;
`;

export const TableComp = styled.table`
  color: #fff;
  margin: auto;
  height: calc(100% - 3rem);
  width: 95%;
  border-collapse: collapse;
  @media (max-width: 700px) {
    font-size: x-small;
  }
`;

export const TableBody = styled.tbody``;

export const TableCol = styled.th`
  text-decoration: ${props => (props.header ? "underline" : "")};
`;

export const TableRow = styled.tr`
  text-align: ${props => (props.header ? "center" : "")};
  margin-bottom: 0.2rem;
  background-color: ${props => (props.relegation ? "#a9a939" : "")};
  background-color: ${props => (props.down ? "#b54343" : "")};
  background-color: ${props => (props.top ? "#419241" : "")};
  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const Text = styled.span`
  color: ${props => props.color ? props.color : 'black'};
  ${props => (props.fontSize ? `font-size: ${props.fontSize}` : "12px")};
  ${props => (props.italic ? `font-style: italic` : "")};
  ${props =>
    props.fontWeight ? `font-weight: ${props.fontWeight}` : "normal"};
  ${props => (props.padding ? `padding: ${props.padding}` : "0")};
  display: inline-block;
  vertical-align: middle;
  &:hover {
    ${props => (props.hoverEffect ? "cursor: pointer" : "")};
  }
`;

export const TrainingComp = styled.div`
  background-color: #3d4d64;
  height: 34rem;
  width: 100%;
  display: inline-flex;
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
  height: 30rem;
  width: 50%;
  margin: auto 1rem;
  display: inline-block;
`;

export const TrainingTextContainer = styled.div`
  width: 30rem;
  textAlign: center;
  margin: 5rem auto 0;
`;

export const TrainingTitle = styled.h2`
  color: white
`;

export const TrainingText = styled.p`
  color: white;
  margin: 1rem 0;
  font-size: 20px;
  text-align: justify;
`;

export const IconContainer = styled.div`
`;

export const SocialMediaComp = styled.div`
  display: inline-flex;
`;

export const PartnerComp = SeasonComp.extend`
  display: inline-flex;
  height: 30rem;
`;

export const FooterComp = TrainingComp.extend`
  height: 10rem;
`;

export const Partner = styled.div`
  height: 10rem;
  width: ${props => props.wide ? '20rem' : '8rem'};
`;

export const PartnerIcon = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const PartnerName = styled.a`
  display: block;
`;

export const PartnerTitle = styled.h2`
`;

export const NextGameComp = styled.div`
  height: 20rem;
  display: inline-flex;
  margin: 2rem auto;
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
  color: #8C96A0;
`;

export const Matchup = styled.div`

`;

export const MatchupText = styled.p`
  color: #8C96A0;
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
