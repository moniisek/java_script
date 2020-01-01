import React from 'react';


function Square(props) {
  const highlightWin = props.isWinningPosition ? " winning-position" : "";
  return (
    <button
      className={"square" + highlightWin}
      id={props.id}
      onClick={props.onClick}
    >
    {props.value}
    </button>

  )
}

export default Square;
