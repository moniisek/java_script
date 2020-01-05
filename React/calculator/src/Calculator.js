import React from 'react';
import Screen from "./Screen/Screen.js";
import Buttons from "./Buttons/Buttons.js";
import {buttonProps} from './Buttons/Buttons.js'

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      equation: '',
      result: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.keyboardInput = this.keyboardInput.bind(this);

  }

  keyboardInput(event) {
    let pressedKey = event.key.toLowerCase();
    pressedKey === "enter" ? pressedKey = "=" : null;
    const labels = buttonProps.map(obj => obj.label);
    const indexOfPressedKey = labels.indexOf(pressedKey)

    if (indexOfPressedKey > -1) {
      console.log('pressedKey',pressedKey)

      this.handleInput(buttonProps[indexOfPressedKey].id, buttonProps[indexOfPressedKey].label)
    }
  }

  handleInput(id, label) {
    switch(label) {
      default:
        this.setState(prevState => {
          return {
            result: prevState.result,
            equation: prevState.equation + label
          }
        })
        break;


      case "=":
        if (this.state.equation !== "") {
          try {
            const ans = eval(this.state.equation);
            this.setState({
              result: ans,
              equation: ''
            })
          } catch(error) {
            this.setState({
              result: "Math error!"
            })
          }
        }
         break;

    case "AC":
      this.setState({
        result: 0,
        equation: ""
      })
      break;
    }
  }







  render() {
    document.addEventListener('keydown', this.keyboardInput)
    console.log(this.state.result)
    return(
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result}/>
        <Buttons eventHandler={this.handleInput}/>
      </main>
    )
  }
}




export default Calculator;
