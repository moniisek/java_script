import React from 'react';
import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";

function Screen(props) {
  return(
    <section className="screen">
      <ResultScreen result={props.result}/>
      <ComputationScreen equation={props.equation}/>
    </section>
  )
}

export default Screen;
