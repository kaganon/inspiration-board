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

  deleteCard = (id) => {
    const cards = this.state.cards;
    console.log(id);

    cards.forEach((card) => {
      console.log(card);
      if (id === card.card.id ) {
        const cardIndex = cards.indexOf(card);
        cards.splice(cardIndex, 1);
        this.setState({cards: cards})
      };
    });
  };


  render() {
    const cardList = this.state.cards.map((card, i) => {
      const cardData = card.card;

      return (
        <Card
          key={i}
          {...cardData}
          onDeleteClickCallback={this.deleteCard}
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
