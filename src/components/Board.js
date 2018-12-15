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

  addCard = (newCard) => {
    const cards = this.state.cards;
    const card = {...newCard}
    const fullCard = `${card.text} ${card.emoji}`

    cards.push(fullCard);
    this.setState({cards: cards})
  }


  render() {

    const cardData = CARD_DATA.cards;

    const cardInfo = cardData.map((card) => {
      return <Card text={card.text} emoji={card.emoji}/>
    })

    console.log(CARD_DATA.cards);

    return (
      <div className="board">
        {cardInfo}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
