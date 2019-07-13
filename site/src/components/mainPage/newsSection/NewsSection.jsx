import React, { Component } from "react";

// Styled-Components
import {
  NewsComp,
  Card,
  NewsTitle,
  CardsComp
} from "../Main.js";

import { news } from "../../../constants/News.js";

class NewsSection extends Component {
  render() {
    return (
      <NewsComp>
      <NewsTitle>
        News zur Floorball Abteilung des SCS Berlin
      </NewsTitle>
      <CardsComp>
      {news.map((singleNews, index) =>
        <Card key={index}>

        </Card>
      )}
      </CardsComp>
      </NewsComp>
    );
  }
}

export default NewsSection;
