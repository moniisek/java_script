import React from 'react';
import Button from "./Button.js";

function Buttons(props) {
  return(
    <div className="all-buttons">
    <Button eventHandler={props.eventHandler} id="clear" label={"AC"} />
    <Button eventHandler={props.eventHandler} id="divide" label={"/"} />
    <Button eventHandler={props.eventHandler} id="multiply" label={"*"} />
    <Button eventHandler={props.eventHandler} id="seven" label={"7"} />
    <Button eventHandler={props.eventHandler} id="eight" label={"8"} />
    <Button eventHandler={props.eventHandler} id="nine" label={"9"} />
    <Button eventHandler={props.eventHandler} id="substract" label={"-"} />
    <Button eventHandler={props.eventHandler} id="four" label={"4"} />
    <Button eventHandler={props.eventHandler} id="five" label={"5"} />
    <Button eventHandler={props.eventHandler} id="six" label="6" />
    <Button eventHandler={props.eventHandler} id="add" label="+" />
    <Button eventHandler={props.eventHandler} id="one" label="1" />
    <Button eventHandler={props.eventHandler} id="two" label="2" />
    <Button eventHandler={props.eventHandler} id="three" label="3" />
    <Button eventHandler={props.eventHandler} id="zero" label="0"/>
    <Button eventHandler={props.eventHandler} id="decimal-point" label="." />
    <Button eventHandler={props.eventHandler} id="enter" label="=" />
    </div>
  )
}

export default Buttons;
