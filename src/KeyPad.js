import React from "react";
import Key from "./Key";

class KeyPad extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event){

    switch(event.key){
      case "1":
        this.props.clickHandler("1")
        break;
      case "2":
        this.props.clickHandler("2")
        break;
      case "3":
        this.props.clickHandler("3")
        break;
      case "4":
        this.props.clickHandler("4")
        break;
      case "5":
        this.props.clickHandler("5")
        break;
      case "6":
        this.props.clickHandler("6")
        break;
      case "7":
        this.props.clickHandler("7")
        break;
      case "8":
        this.props.clickHandler("8")
        break;
      case "9":
        this.props.clickHandler("9")
        break;
      case "0":
        this.props.clickHandler("0")
        break;
      case "/":
        this.props.clickHandler("/")
        break;
      case "*":
        this.props.clickHandler("*")
        break;
      case "-":
        this.props.clickHandler("-")
        break;
      case "+":
        this.props.clickHandler("+")
        break;
      case ".":
        this.props.clickHandler(".")
        break;
      case "Enter":
        this.props.clickHandler("=")
        break;
      case "Backspace":
        this.props.clickHandler("AC")
        break;
      default:
        break;
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  render(){
    return(
      <div className="keypad">
        <Key keyValue="AC" keyId="clear" clickHandler={this.props.clickHandler}/>
        <Key keyValue="/" keyId="divide" clickHandler={this.props.clickHandler}/>
        <Key keyValue="*" keyId="multiply" clickHandler={this.props.clickHandler}/>
        <Key keyValue="7" keyId="seven" clickHandler={this.props.clickHandler}/>
        <Key keyValue="8" keyId="eight" clickHandler={this.props.clickHandler}/>
        <Key keyValue="9" keyId="nine" clickHandler={this.props.clickHandler}/>
        <Key keyValue="-" keyId="subtract" clickHandler={this.props.clickHandler}/>
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