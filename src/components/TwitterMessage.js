import React, {Component} from "react";

class TwitterMessage extends Component {
  state = {
    message: '',
    totalChars: 0
  }

  calculateCharsLeft = (e) => {
    let num = this.state.totalChars;
    this.setState({
      message: e.target.value,
      totalChars: num + 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.calculateCharsLeft} />
        {this.props.maxChars - this.state.totalChars} characters left
      </div>
    );
  }
}

export default TwitterMessage;
