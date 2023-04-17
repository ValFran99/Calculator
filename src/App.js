import React from "react";
import KeyPad from "./KeyPad";
import Display from "./Display";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fullFormula: "",
      nowInput: "0",
      nowOperator: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(keyValue){
    if(this.state.nowInput.length >= 21 && !("AC+-*/=".includes(keyValue))){
      return undefined;
    }
    switch(keyValue){
      case "AC":
        this.setState({
          nowInput: "0",
          fullFormula: "",
          nowOperator: ""
        })
        break;

      case "+":
        if(this.state.nowInput === "+"){
          break;
        }
        this.setState({
          nowOperator: keyValue,
          nowInput: ""
        })
        break;
      case "-":
        if(this.state.nowOperator === "-"){
          this.setState({
            nowOperator: this.state.nowOperator + keyValue,
            nowInput: ""
          })
        }
        if(this.state.nowOperator.includes("-")){
          break;
        }
        this.setState({
          nowOperator: this.state.nowOperator + keyValue,
          nowInput: ""
        })
        break;
      case "*":
        if(this.state.nowInput === "*"){
          break;
        }
        this.setState({
          nowOperator: keyValue,
          nowInput: ""
        })
        break;
      case "/":
        if(this.state.nowInput === "/"){
          break;
        }
        this.setState({
          nowOperator: keyValue,
          nowInput: ""
        })
        break;
      case ".":
        if(this.state.nowInput.includes(".")){
          break;
        }
        this.setState({
          nowInput: this.state.nowInput + keyValue,
          fullFormula: this.state.fullFormula + this.state.nowOperator + "0" + keyValue,
          nowOperator: ""
        })
        break;

      case "0":
        if(this.state.nowInput === "0"){
          break;
        }
        this.setState({
          nowInput: this.state.nowInput + keyValue,
          fullFormula: this.state.fullFormula + this.state.nowOperator + keyValue,
          nowOperator: ""
        })
        break;
      case "=":
        // Primero hay que calcular el resultado, debería llamar a un método que lo haga
        if(this.state.fullFormula.includes(keyValue)){
          break;
        }
        this.setState({
          nowOperator: keyValue,
          fullFormula: this.state.fullFormula + keyValue,
          nowInput: ""
        })
        break;
      
      default:
        if(this.state.nowOperator === "+" || this.state.nowOperator === "*" ||
        this.state.nowOperator === "-" || this.state.nowOperator === "/" || this.state.nowOperator.includes("-")){
          this.setState({
            nowInput: keyValue,
            fullFormula: this.state.fullFormula + this.state.nowOperator + keyValue,
            nowOperator: ""
          });
          break;
        }
        if(this.state.nowInput === "0"){
          console.log("In here");
          this.setState({
            nowInput: keyValue,
            fullFormula: this.state.fullFormula.slice(0, -1) + keyValue,
            nowOperator: ""
          })
          break;
        }
        this.setState({
          nowInput: this.state.nowInput + keyValue,
          fullFormula: this.state.fullFormula + keyValue,
          nowOperator: ""
        })
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Display displayFormula={this.state.fullFormula + this.state.nowOperator} displayInput={this.state.nowInput + this.state.nowOperator}/>
        <KeyPad clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
