import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.info,
    }
  }


  render() {

    const dataArray = this.state.quote.cards;

    const cardData = dataArray.map((value) => {
      console.log(value.text);
      let pic = value.emoji;
      let text = value.text;

      if (pic) {
        return <div className="card"> <p>{emoji.getUnicode(pic)}{text}</p></div>
      }
    });

    //
    // let icon = this.props.emoji;
    // if (icon !== undefined) {
    //   icon = emoji.getUnicode(icon);
    // }


    return (
      <section>
        {cardData}
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
