import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  handleChange = (event) => 
  {

    if (event.target.value.length < 141)
    {
      console.log(event.target.value)
      this.setState ({
        inputValue: event.target.value 
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange = {event => this.handleChange(event)} type="text" name="message" id="message" value = {this.state.inputValue } />
        {140- this.state.inputValue.length}
      </div>
    );
  }
}

export default TwitterMessage;
