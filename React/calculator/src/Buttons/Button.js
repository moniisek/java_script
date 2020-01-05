import React from 'react';

function Button(props) {
  return(
    <button onClick={() => {props.eventHandler(props.id, props.label)}} id={props.id}>{props.label}</button>
  )
}

export default Button;
