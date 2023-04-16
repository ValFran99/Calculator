import React from "react";
import Key from "./Key";

class KeyPad extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="keypad" disabled={this.props.disabled}>
        <Key keyValue="AC" keyId="clear" clickHandler={this.props.clickHandler}/>
        <Key keyValue="/" keyId="divide" clickHandler={this.props.clickHandler}/>
        <Key keyValue="*" keyId="multiply" clickHandler={this.props.clickHandler}/>
        <Key keyValue="7" keyId="seven" clickHandler={this.props.clickHandler}/>
        <Key keyValue="8" keyId="eight" clickHandler={this.props.clickHandler}/>
        <Key keyValue="9" keyId="nine" clickHandler={this.props.clickHandler}/>
        <Key keyValue="-" keyId="substract" clickHandler={this.props.clickHandler}/>
        <Key keyValue="4" keyId="four" clickHandler={this.props.clickHandler}/>
        <Key keyValue="5" keyId="five" clickHandler={this.props.clickHandler}/>
        <Key keyValue="6" keyId="six" clickHandler={this.props.clickHandler}/>
        <Key keyValue="+" keyId="add" clickHandler={this.props.clickHandler}/>
        <Key keyValue="1" keyId="one" clickHandler={this.props.clickHandler}/>
        <Key keyValue="2" keyId="two" clickHandler={this.props.clickHandler}/>
        <Key keyValue="3" keyId="three" clickHandler={this.props.clickHandler}/>
        <Key keyValue="." keyId="decimal" clickHandler={this.props.clickHandler}/>
        <Key keyValue="0" keyId="zero" clickHandler={this.props.clickHandler}/>
        <Key keyValue="=" keyId="equals" clickHandler={this.props.clickHandler}/>
      </div>
    );
  }
}

export default KeyPad;