import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:'',
      maxChars:this.props.maxChars
    };
  }

  handleMessageChange=(event)=>{
    this.setState({
      input:event.target.value,
      maxChars:this.props.maxChars-event.target.value.length
    })
    
  }


  render() {
    return (
      <div>
        <strong>Characters remaining :{this.state.maxChars}</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" />
       
      </div>
    );
  }
}

export default TwitterMessage;
