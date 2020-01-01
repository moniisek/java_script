import React from 'react';
import Square from './Square';
import {findWinner} from './utils';

class Board extends React.Component {

  
  onClick = i => e => {
    this.props.onClick(i);
  }

  renderSquare = i => {
    // () after return for readability
    // so that JS doesn't insert ; after return
    // so we can split into more lines
    let isWinningPosition = false;
    if (this.props.winningPosition) {
      isWinningPosition = this.props.winningPosition.indexOf(i) !== -1 ? true : false;
    }

    return(
      <Square
        key={i}
        isWinningPosition={isWinningPosition}
        value={this.props.squares[i]}
        id={`${i+1}`}
        onClick={this.onClick(i)}
      />
    )
  }



  render(){
    const squares = [];
    for (let i = 0; i< 9; i++) {
      squares.push(this.renderSquare(i))
    }

    return(
      <div>
        <div className="board">
        {squares}
        </div>
      </div>
    )

  }
}

export default Board;
