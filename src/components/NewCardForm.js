import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: ''
    };
  }



  onInputChange = (event) => {
    console.log("In input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;

    this.setState(newState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const hasEmoji = this.state.emoji ? this.state.emoji : '';

    const newCard = {
      text: this.state.text,
      emoji: hasEmoji,
    };

    this.setState({
      text: '',
      emoji: ''
    });

    this.props.addCardCallback(newCard);
  };


  render() {
    return (
      <form
        className="new-card-form"
        >
        <h3 className="new-card-form__header">Add a Card </h3>
        <div>
          <form
            className="new-card-form"
            onSubmit={this.onFormSubmit}
            >
          <label htmlFor="text" className="new-card-form__form-label">
            Text
          </label>
          <textarea
            name="text"
            value={this.state.text}
            className="new-card-form__form"
            />
        </form>
        </div>
      </form>

    )
  }



}

export default NewCardForm;
