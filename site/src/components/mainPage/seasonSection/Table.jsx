import React, { Component } from "react";

// Styled-components
import {TableComp, TableBody, TableRow, TableCol, Text} from "../Main.js";
import {Teams} from '../../../constants/Teams.js'

class Table extends Component {
  render() {
    return (
      <TableComp>
        <TableBody>
          <TableRow header>
            <TableCol>
              <Text>Platz</Text>
            </TableCol>
            <TableCol>
              <Text>Mannschaft</Text>
            </TableCol>
            <TableCol>
              <Text>Sp.</Text>
            </TableCol>
            <TableCol>
              <Text>Tordiff.</Text>
            </TableCol>
            <TableCol>
              <Text>Pkt.</Text>
            </TableCol>
          </TableRow>
          {Teams.map((team, index) =>
            <TableRow top={index + 1 === 1} down={index + 1 === 8 || index + 1 === 9}>
              <TableCol>
                <Text>{index + 1}</Text>
              </TableCol>
              <TableCol>
                <Text>{team.name}</Text>
              </TableCol>
              <TableCol>
                <Text>{team.spiele}</Text>
              </TableCol>
              <TableCol>
                <Text>{team.diff}</Text>
              </TableCol>
              <TableCol>
                <Text>{team.punkte}</Text>
              </TableCol>
            </TableRow>
          )}
        </TableBody>
      </TableComp>
    );
  }
}

export default Table;
