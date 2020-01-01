import React from 'react';
import Screen from "./Screen/Screen.js";
import Buttons from "./Buttons/Buttons.js";

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      equation: '',
      result: 0
    }
    this.handleInput = this.handleInput.bind(this);
    
  }



  handleInput(event) {
    const pressedButton = event.target.innerHTML;

    switch (pressedButton) {

      case "AC":
        this.setState({result: 0, equation: ''});
        break;

      case "=": {
        if (this.state.equation !== '') {
          let ans = '';
          try {
            ans = eval(this.state.equation);

          } catch(error) {
            this.setState({result: "Math Error"})
          }

          if (ans === undefined) {
            this.setState({result: "Math error!"})
          } else {
            this.setState({result: ans, equation: ''})
          }
        }
        break;
      }

      default: {
        this.setState(prevState => {
          return {
            equation: prevState.equation += pressedButton,
            result: prevState.result
          }
        })
        break;
      }


    }
  }

  render() {
    return(
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result}/>
        <Buttons eventHandler={this.handleInput}/>
      </main>
    )
  }
}




export default Calculator;
