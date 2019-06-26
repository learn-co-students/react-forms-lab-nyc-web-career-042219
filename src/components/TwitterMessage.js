import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: 0
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      counter: this.state.counter += 1
    })
  }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        value={this.state.value}
        onChange={this.handleChange}/>
        {this.props.maxChars - this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
