import React from "react";
import KeyPad from "./KeyPad";
import Display from "./Display";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fullFormula: "",
      nowInput: "0",
      nowOperator: "",
      operatorStack: [],
      result: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.computeResult = this.computeResult.bind(this);
  }

  computeResult(){
    var numbersArr = this.state.fullFormula.match(/(\d+)\.?(\d+)?/g);
    var actualNumbers = numbersArr.map(number => number.includes(".")? parseFloat(number) : parseInt(number));
    var result = actualNumbers.shift();
    while(actualNumbers.length > 0){
      console.log(actualNumbers);
      var operator = this.state.operatorStack.shift();
      var num2 = actualNumbers.shift();

      switch(operator){
        case "+":
          console.log(num2);
          result += num2;
          console.log(result);
          break;
        case "-":
          result -= num2;
          break;
        case "*":
          result *= num2;
          break;
        case "/":
          result /= num2;
          break;
        case "+-":
          result -= num2;
          break;
        case "--":
          result += num2;
          break;
        case "*-":
          result *= (num2)*-1;
          break;
        case "/-":
          result /= (num2)*-1;
          break;
      }
    }
    console.log(result);
    return result.toString();
  }

  handleClick(keyValue){
    if(this.state.nowInput.length >= 21 && !("AC+-*/=".includes(keyValue))){
      return undefined;
    }

    if(this.state.result !== ""){
      this.setState({
        fullFormula: this.state.result
      })
    }

    switch(keyValue){
      case "AC":
        this.setState({
          nowInput: "0",
          fullFormula: "",
          nowOperator: "",
          result: "",
          operatorStack: []
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

        if(this.state.result != "" && this.state.nowOperator === ""){
          this.setState({
            fullFormula: "0" + keyValue,
            result: "",
            nowInput: "0" + keyValue
          })
          break;
        }

        if(this.state.nowInput.includes(".")){
          break;
        }
        if(this.state.nowInput === "0" && this.state.fullFormula.charAt(this.state.fullFormula.length - 1) !== "0"){
          this.setState({
            fullFormula: this.state.fullFormula + "0" + keyValue,
            nowInput: "0" + keyValue
          })
          break;
        }
        if(this.state.nowInput === "" || this.state.nowOperator !== ""){
          this.state.operatorStack.push(this.state.nowOperator);
          this.setState({
            nowInput: this.state.nowInput + "0" + keyValue,
            fullFormula: this.state.fullFormula + this.state.nowOperator + "0" + keyValue,
            nowOperator: ""
          });
          break;
        }
        this.setState({
          nowInput: this.state.nowInput + keyValue,
          fullFormula: this.state.fullFormula + this.state.nowOperator + keyValue
        });
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
        if(this.state.fullFormula === "" || this.state.nowInput === this.state.result){
          this.setState({
            fullFormula: this.state.result
          })
          break;
        }
        var result = this.computeResult();
        this.setState({
          nowOperator: "",
          fullFormula: this.state.fullFormula + keyValue + result,
          nowInput: result,
          operatorStack: [],
          result: result
        })
        break;
      
      default:
        if(this.state.nowOperator === "+" || this.state.nowOperator === "*" ||
        this.state.nowOperator === "/" || this.state.nowOperator.includes("-")){
          this.state.operatorStack.push(this.state.nowOperator);
          this.setState({
            nowInput: keyValue,
            fullFormula: this.state.fullFormula + this.state.nowOperator + keyValue,
            nowOperator: "",
            result: ""
          });
          break;
        }
        
        if(this.state.nowInput === "0"){
          this.setState({
            nowInput: keyValue,
            fullFormula: this.state.fullFormula.slice(0, -1) + keyValue,
            nowOperator: "",
            result: ""
          })
          break;
        }

        // if(this.state.nowOperator === "="){
        //   this.setState({
        //     nowInput: keyValue,
        //     fullFormula: keyValue,
        //     nowOperator: ""
        //   });
        //   this.state.operatorStack.length = 0;
        //   console.log(this.state.operatorStack);
        //   break;
        // }

        if(this.state.result != ""){
          this.setState({
            fullFormula: "" + keyValue,
            result: "",
            nowInput: "" + keyValue
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
