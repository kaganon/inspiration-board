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

    const url = `${this.props.url}/boards/katrina/cards`;

    axios.get(url)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      const errors = error.response.data.errors.text;
      this.setState({
        error: errors,
      });
    });
  };


  deleteCard = (id) => {

    const url = `${this.props.url}/cards/${id}`;

    axios.delete(url)
    .then(() => {
      const updatedCardsList = this.state.cards;
      updatedCardsList.forEach((card, i) => {
        if (id === card.card.id) {
          updatedCardsList.splice(i, 1);
        };
      });
      this.setState({
        cards: updatedCardsList
      });
    })
    .catch((error) => {
      const errors = error.response.data.errors.text;
      this.setState({
        error: errors,
      });
    });
  };


  addCard = (cardData) => {

    const url = `${this.props.url}/boards/katrina/cards`;

    axios.post(url, cardData)
    .then((response) => {
      const updatedCardsList = [...this.state.cards, response.data]
      this.setState({
        cards: updatedCardsList,
      });
    })
    .catch((error) => {
      const errors = error.response.data.errors.text;
      this.setState({
        error: errors,
      });
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


    const errorMessages = this.state.error ? this.state.error.map((message, i) => {
      return (<h3><li key={i}>{message}</li></h3>) }) : '';


    return (
      <section>
        <header className="validation-errors-display">
          <ul className="validation-errors-display__list">
            {errorMessages}
          </ul>
        </header>
        <div className="board">
          {cardList}
        </div>
        <NewCardForm addCardCallback={this.addCard} />
      </section>
    )
  }

}


Board.propTypes = {
  cards: PropTypes.array,
};

export default Board;
