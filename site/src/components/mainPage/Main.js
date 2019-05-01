import styled from "styled-components";

import Hintergrund from "../../assets/Hintergrund2.png";
import SCSLogo from "../../assets/Logo.png";

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
  height: 4rem;
  width: 4rem;
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
  font-size: 24px;
  text-align: justify;
`;

export const SeasonComp = styled.div`
  width: 100%;
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
  color: black;
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
