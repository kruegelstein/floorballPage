import React, { Component } from "react";

// Styled-Components
import {
  NewsComp,
  Card,
  NewsTitle,
  CardsComp,
  CardTitle,
  CardTitleComp,
  CardTextComp,
  CardText
} from "../Main.js";

import { news } from "../../../constants/News.js";

class NewsSection extends Component {
  state = {
    selectedIndex: null
  };

  selectNews = index => {
    this.setState({ selectedIndex: index });
  };

  deselectNews = () => {
    this.setState({ selectedIndex: null });
  };

  render() {
    return (
      <NewsComp id="news">
        <NewsTitle>What's new</NewsTitle>
        <CardsComp>
          {news
            .map((singleNews, index) => (
              <Card
                key={index}
                background={singleNews.image}
                onClick={() => this.selectNews(index)}
                onMouseEnter={() => this.selectNews(index)}
                onMouseLeave={this.deselectNews}
              >
                {this.state.selectedIndex !== index ? (
                  <CardTitleComp>
                    <CardTitle>{singleNews.title}</CardTitle>
                  </CardTitleComp>
                ) : (
                  <CardTextComp>
                    <CardText>{singleNews.text}</CardText>
                  </CardTextComp>
                )}
              </Card>
            ))
            .reverse()}
        </CardsComp>
      </NewsComp>
    );
  }
}

export default NewsSection;
