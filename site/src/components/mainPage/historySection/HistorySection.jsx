import React, { Component } from "react";

// Styled-Components
import {
  HistoryTitle,
  HistoryComp,
  TimeLine,
  TimeItemLeft,
  TimeItemRight,
  TimeItemContent
} from "../Main.js";

class HistorySection extends Component {
  render() {
    return (
      <HistoryComp>
        <HistoryTitle>Geschichte und Erfolge</HistoryTitle>
        <TimeLine>
          <TimeItemLeft>
            <TimeItemContent>
              <h2>2012</h2>
              <p>
                Die Geschichte der Floorball-Mannschaft des SCS Berlin startet
                eigentlich schon im Jahr 2012. Am 17. Juli des Jahres gründeten
                Big A, John, Andrey, Kovii und AJ das{" "}
                <b>Floorball Team Charlottenburg</b>, kurz FTC. Ende des Jahres
                2012 spielte das FTC sein erstes Spiel in der
                Kleinfeld-Regionalliga Berlin gegen den Berliner FK. Beni schoss
                das erste Tor der Mannschaft – zum Sieg reichte es aber leider
                nicht.{" "}
              </p>
            </TimeItemContent>
          </TimeItemLeft>
          <TimeItemRight>
            <TimeItemContent>
              <h2>2013</h2>
              <p>
                Die erste Saison endet erfolgreich: Der FTC wird
                Berlin-Brandenburgischer Vize-Landesmeister im Kleinfeld. Kurz
                darauf verpasst das Team knapp die Teilnahme an der Deutschen
                Meisterschaft.{" "}
              </p>
            </TimeItemContent>
          </TimeItemRight>
          <TimeItemLeft>
            <TimeItemContent>
              <h2>2014</h2>
              <p>
                Bereits in der zweiten Saison gewinnt der FTC die
                Berlin-Brandenburg Meisterschaft im Kleinfeld und schafft die
                Qualifikation zur Deutschen Meisterschaft.{" "}
              </p>
            </TimeItemContent>
          </TimeItemLeft>
          <TimeItemRight>
            <TimeItemContent>
              <h2>
                2016/2017 - Floorball beim SC Siemensstadt und der Weg in die
                zweite Liga
              </h2>
              <p>
                Im Jahr 2016 wird der FTC aufgelöst. Die aktiven Mitglieder
                bilden seither die Abteilung <i>Floorball/Hockey</i> im Berliner
                Verein <b>SC Siemensstadt</b>. Mittlerweile spielt die
                Mannschaft auch in der Berlin-Brandenburger Großfeldliga.
              </p>
            </TimeItemContent>
          </TimeItemRight>
          <TimeItemLeft>
            <TimeItemContent>
              <h2>2017/2018</h2>
              <p>
                Ziel der Saison für die Großfeldliga ist der Aufstieg in die
                zweite Bundesliga. Der SCS gewinnt die Meisterschaft und
                qualifiziert sich für die Aufstiegsplayoffs. Im ersten Spiel
                gewinnt der SCS Berlin gegen PSV Dessau Blackwolves, wird
                Ostdeutscher Meister der Regionalligen und zieht ins Halbfinale
                der Playoffs ein. Nach dem Sieg über die Lions aus Calw steht
                der SCS Berlin im Finale gegen Floorball Stern München. Der
                Finalsieg bringt die Siemensstädter eine Liga höher. Der SC
                Siemensstadt spielt jetzt in der 2. Floorball Bundesliga.
              </p>
            </TimeItemContent>
          </TimeItemLeft>
          <TimeItemRight>
            <TimeItemContent>
              <h2>2018/2019</h2>
              <p>
                Die erste Mannschaft des SCS Berlin beendet die Saison auf dem
                7. Tabellenplatz mit 17 Punkten aus 16 Spielen und schafft den
                Klassenerhalt.
              </p>
            </TimeItemContent>
          </TimeItemRight>
          <TimeItemLeft>
            <TimeItemContent>
              <h2>Und jetzt...</h2>
              <p>
                Nach erfolgreichem Klassenerhalt möchten wir unsere Position in
                der zweiten Bundesliga weiter festigen. Zusätzlich gilt es jetzt
                aber auch, die Abteilung im Verein weiter auszubauen und
                besonders unsere Nachwuchsarbeit zu fördern.{" "}
              </p>
            </TimeItemContent>
          </TimeItemLeft>
        </TimeLine>
      </HistoryComp>
    );
  }
}

export default HistorySection;
