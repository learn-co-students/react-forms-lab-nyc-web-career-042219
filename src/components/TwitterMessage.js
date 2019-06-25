import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'You cannot hop in my car',
      maxChars: this.props.maxChars 
    };
  }

  handleChange = (e) => {
    const newMess = e.target.value
    const newCount = this.state.maxChars -= newMess.length
    this.setState({
      message: newMess,
      maxChars: newCount
      // charRemaining: newCount
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleChange}
          type="text" n
          ame="message" 
          id="message" 
          value={this.state.message}
        />
        <div>{this.state.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
