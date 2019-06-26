import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetMessage: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      tweetMessage: event.target.value,
      maxChars: (this.state.maxChars - 1)
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.tweetMessage} />
        <p>Characters remaining: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
