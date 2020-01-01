import React from 'react';

function Button(props) {
  return(
    <button onClick={props.eventHandler} id={props.id}>{props.label}</button>
  )
}

export default Button;
