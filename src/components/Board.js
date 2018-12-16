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
    const GET_ALL_CARDS_URL = `${this.props.url}/boards/katrina/cards`;
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
        error: `Error: ${error.message}`,
      });
    });
  }

  deleteCard = (id) => {
    console.log(this.state.cards);

    const url = `${this.props.url}/cards/${id}`;

    axios.delete(url)
    .then(() => {
      const updatedCardsList = this.state.cards;
      console.log(updatedCardsList);
      updatedCardsList.forEach((card, i) => {
        if (id === card.card.id) {
          updatedCardsList.splice(i, 1);
        };
      });
      this.setState({cards: updatedCardsList})
      console.log(this.state.cards);
    })
    .catch((error) => {
      this.setState({
        error: `Error: ${error.message}`,
      });
    });
    console.log("Cards after deleting");
    console.log(this.state.cards);
  };

  addCard = (cardData) => {
    console.log("add card");
    console.log(cardData);
    const cardObj = {
      card: cardData
    };
    console.log(cardData);

    axios.post(`${this.props.url}/boards/katrina/cards`, cardData)
    .then((response) => {
      const updatedCardsList = [...this.state.cards, response.data]
      this.setState({
        cards: updatedCardsList,
      });
      console.log("Cards after adding:");
      console.log(this.state.cards);
    })
    .catch((error) => {
      this.setState({
        error: `Error: ${error.message}`,
      });
      console.log(this.state.error);
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

    const hasErrors = this.state.error ? this.state.error : '';

    return (
      <section>
        <header className="validation-errors-display">
          <h3>
            {hasErrors}
          </h3>
        </header>
        <div className="board">
          {cardList}
          <NewCardForm addCardCallback={this.addCard} />
        </div>
      </section>
    )
  }

}


Board.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Board;
