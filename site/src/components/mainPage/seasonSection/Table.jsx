import React, { Component } from "react";

// Styled-components
import {
  TableComp,
  TableBody,
  TableRow,
  TableCol,
  Text,
  ArrowContainer
} from "../Main.js";
import { Teams } from "../../../constants/Teams.js";

class Table extends Component {
  render() {
    return (
      <TableComp>
        <TableBody>
          <TableRow header>
            <TableCol headerLeft>
              <Text fontWeight={"bold"}>Platz</Text>
            </TableCol>
            <TableCol>
              <Text fontWeight={"bold"}>Mannschaft</Text>
            </TableCol>
            <TableCol>
              <Text fontWeight={"bold"}>Sp.</Text>
            </TableCol>
            <TableCol>
              <Text fontWeight={"bold"}>Tordiff.</Text>
            </TableCol>
            <TableCol headerRight>
              <Text fontWeight={"bold"}>Pkt.</Text>
            </TableCol>
          </TableRow>
          {Teams.map((team, index) => (
            <TableRow even={index % 2 === 1} key={index}>
              <TableCol>
                {(index === 0 || index === 1) && (
                  <ArrowContainer arrow>
                    <i
                      className="fas fa-arrow-up"
                      style={{ color: "#0f6b0f" }}
                    />
                  </ArrowContainer>
                )}
                {(index === 7 || index === 8) && (
                  <ArrowContainer arrow>
                    <i
                      className="fas fa-arrow-down"
                      style={{ color: "#c31b1b" }}
                    />
                  </ArrowContainer>
                )}
                {index === 6 && (
                  <ArrowContainer arrow>
                    <i
                      className="fas fa-arrow-right"
                      style={{ color: "#d2d22f" }}
                    />
                  </ArrowContainer>
                )}
                <Text fontWeight={team.own && "bold"}>{index + 1}</Text>
              </TableCol>
              <TableCol>
                <Text fontWeight={team.own && "bold"}>{team.name}</Text>
              </TableCol>
              <TableCol>
                <Text fontWeight={team.own && "bold"}>{team.spiele}</Text>
              </TableCol>
              <TableCol>
                <Text fontWeight={team.own && "bold"}>{team.diff}</Text>
              </TableCol>
              <TableCol>
                <Text fontWeight={team.own && "bold"}>{team.punkte}</Text>
              </TableCol>
            </TableRow>
          ))}
        </TableBody>
      </TableComp>
    );
  }
}

export default Table;
