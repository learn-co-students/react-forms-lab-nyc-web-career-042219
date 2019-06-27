import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentChars: '',
      currentCharsLength: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      currentChars: e.target.value,
      currentCharsLength: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.currentChars} />
        <span>{this.props.maxChars - this.state.currentCharsLength}</span>
      </div>
    );
  }
}

export default TwitterMessage;
