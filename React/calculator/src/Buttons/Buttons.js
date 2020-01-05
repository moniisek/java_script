import React from 'react';
import Button from "./Button.js";

export const buttonProps = [
  {id: "clear", label: "AC"},
  {id: "divide", label: "/"},
  {id: "multiply", label: "*"},
  {id: "seven", label: "7"},
  {id: "eight", label: "8"},
  {id: "nine", label: "9"},
  {id: "substract", label: "-"},
  {id: "four", label: "4"},
  {id: "five", label: "5"},
  {id: "six", label: "6"},
  {id: "add", label: "+"},
  {id: "one", label: "1"},
  {id: "two", label: "2"},
  {id: "three", label: "3"},
  {id: "zero", label: "0"},
  {id: "decimal-point", label: "."},
  {id: "enter", label: "="}
];

function Buttons(props) {


  function renderButton(id, label) {
    return <Button key={id} eventHandler={props.eventHandler} id={id} label={label}/>

  }
  return(
    <div className="all-buttons">
    {buttonProps.map(p => renderButton(p.id, p.label))}
    {/*
      // <Button eventHandler={props.eventHandler} id="clear" label={"AC"} />
      // <Button eventHandler={props.eventHandler} id="divide" label={"/"} />
      // <Button eventHandler={props.eventHandler} id="multiply" label={"*"} />
      // <Button eventHandler={props.eventHandler} id="seven" label={"7"} />
      // <Button eventHandler={props.eventHandler} id="eight" label={"8"} />
      // <Button eventHandler={props.eventHandler} id="nine" label={"9"} />
      // <Button eventHandler={props.eventHandler} id="substract" label={"-"} />
      // <Button eventHandler={props.eventHandler} id="four" label={"4"} />
      // <Button eventHandler={props.eventHandler} id="five" label={"5"} />
      // <Button eventHandler={props.eventHandler} id="six" label="6" />
      // <Button eventHandler={props.eventHandler} id="add" label="+" />
      // <Button eventHandler={props.eventHandler} id="one" label="1" />
      // <Button eventHandler={props.eventHandler} id="two" label="2" />
      // <Button eventHandler={props.eventHandler} id="three" label="3" />
      // <Button eventHandler={props.eventHandler} id="zero" label="0"/>
      // <Button eventHandler={props.eventHandler} id="decimal-point" label="." />
      // <Button eventHandler={props.eventHandler} id="enter" label="=" />
      */}

    </div>
  )
}

export default Buttons;
