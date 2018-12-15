import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log("The component did mount");
    const GET_ALL_CARDS_URL = `${this.props.url}katrina/cards`;
    console.log(GET_ALL_CARDS_URL);

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  addCard = (newCard) => {
    const cards = this.state.cards;
    const card = {...newCard}
    console.log(card);
    const fullCard = `${card.text} ${card.emoji}`

    cards.push(fullCard);
    this.setState({cards: cards})
  }


  render() {
    const cardList = this.state.cards.map((card, i) => {
      const cardData = card.card;

      return (
        <Card
          key={i}
          id={cardData.id}
          text={cardData.text}
          emoji={cardData.emoji}
          />
      )
    });

    return (
      <div className="board">
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
