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
