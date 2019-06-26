import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      messageChar: 0,
    };
  }

  handleChange = (e) => {
    // const that = this
    // debugger
    this.setState({
      message: e.target.value,
      messageChar: e.target.value.length
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        onChange={this.handleChange}
        value={this.state.message}
        name="message" id="message" 
        />
        <p>Remaining Characters: {this.props.maxChars - this.state.messageChar}</p>
        {/* or this without messageChar{this.props.maxChars-this.state.message.length}
         */}
      </div>
    );
  }
}

export default TwitterMessage;
