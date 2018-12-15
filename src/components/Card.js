import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.text,
      emoji: this.props.emoji,
    }
  }



  render() {

    const emojiName = this.state.emoji ? this.state.emoji : '';

    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.state.text}</p>
          <span className="card__content-emoji">{emoji.getUnicode(emojiName)}</span>
        </div>

      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
