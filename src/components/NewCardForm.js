import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "poop", "cookie", "doughnut" ];


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  };


  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const conditionalValue = field === "emoji" ? emoji.getName(value) : value;
  
    const newState = {};
    newState[field] = conditionalValue;

    this.setState(newState);
  };


  onFormSubmit = (event) => {
    event.preventDefault();

    const { id, text, emoji } = this.state;

    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
    });
  };


  render() {

    const dropDownEmoji = EMOJI_LIST.map((emojiIcon, i) => {
      return (
        <option key={i}>{emoji.getUnicode(emojiIcon)}</option>
        );
    });

    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Give me some inspo!</h3>
        <div>

          <form
            className="new-card-form__form"
            onSubmit={this.onFormSubmit}
            >

          <div>
            <label htmlFor="text" className="new-card-form__form-label">
              Text
            </label>
          </div>

          <textarea
            name="text"
            value={this.state.text}
            className="new-card-form__form-textarea"
            onChange={this.onInputChange}
            />

          <label htmlFor="emoji-select">Emoji</label>

          <select
            id="emoji-select"
            className="new-card-form__form-select"
            onChange={this.onInputChange}
            name="emoji"
            >
            {dropDownEmoji}
          </select>

          <input className="new-card-form__form-button" type="submit" name="submit" value="Add Card" />
        </form>
      </div>
    </div>
    )
  };

};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};


export default NewCardForm;
