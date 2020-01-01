import {extractNumber} from './utils/extract-number.js';
import "./style.css"
import React from 'react'
import ReactDOM from 'react-dom'
import HelloReact from './react-components/HelloReact.jsx'

ReactDOM.render(<HelloReact />, document.getElementById('root'));

const inputElOne = document.getElementById("input-one");
const inputElTwo = document.getElementById("input-two");
const addValuesBtn = document.querySelector("button");
const resultSpan = document.getElementById("result-display");
let result = "";

const parseInputs = (input) => {
  return input.map(str => parseInt(extractNumber(str)));
};

addValuesBtn.addEventListener("click", () => {
  const inputs = [inputElOne.value, inputElTwo.value];
  const parsedInputs = parseInputs(inputs);
  result = parsedInputs[0] + parsedInputs[1];
  resultSpan.innerText = result;
});
