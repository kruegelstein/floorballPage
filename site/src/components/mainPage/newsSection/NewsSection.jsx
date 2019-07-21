import React, { Component } from "react";

// Styled-Components
import {
  NewsComp,
  Card,
  NewsTitle,
  CardsComp,
  CardTitle
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
        <Card key={index} background={singleNews.image}>
          <CardTitle >
            {singleNews.title}
          </CardTitle>
        </Card>
      )}
      </CardsComp>
      </NewsComp>
    );
  }
}

export default NewsSection;
