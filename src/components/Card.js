import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    const emojiName = this.props.emoji ? this.props.emoji : '';

    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <span className="card__content-emoji">{emoji.getUnicode(emojiName)}</span>
          <button
            type="button"
            aria-label="Delete"
            className="card__delete"
            onClick={() => this.props.onDeleteClickCallback(this.props.id)}
            >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
