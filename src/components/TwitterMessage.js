import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      msg: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e => this.setState({msg: e.target.value})} value={this.state.msg} name="message" id="message" />
        <strong>
          {this.props.maxChars - this.state.msg.length}
        </strong>
      </div>
    );
  }
}

export default TwitterMessage;
