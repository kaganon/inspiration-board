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
        error: error.message
      });
    });
  }



  deleteCard = (id) => {

    const updatedCardsList = this.state.cards;
    console.log("Deleting a card");

    const url = `${this.props.url}/cards/${id}`;

    axios.delete(url)
    .then(() => {
      updatedCardsList.forEach((card, i) => {
        if (id === card.card.id) {
          updatedCardsList.splice(i, 1);
          this.setState({cards: updatedCardsList})
        };
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
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
