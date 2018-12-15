import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '',
    }
  }

  render() {

    console.log(this.props.text);

    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <span className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</span>
        </div>

      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
