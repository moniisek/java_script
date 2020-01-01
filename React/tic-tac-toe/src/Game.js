import React from 'react';
import Board from './Board';
import {findWinner} from './utils';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      xIsNext: true,
      moveNumber: 0
    }

  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.moveNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // if we click on an already full field, do nothing
    if (findWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "x": "o";
    this.setState(
      {
        history: history.concat([{squares: squares}]),
        xIsNext: !this.state.xIsNext,
        moveNumber: history.length
      }
    );
  }



  jumpTo = move => e => {
    this.setState({
      moveNumber: move,
      xIsNext: (move % 2) === 0
    })
  }



  render() {
    const history = this.state.history;
    const current = history[this.state.moveNumber];
    const gameResult = findWinner(current.squares);
    const winningPosition = gameResult ? gameResult.position : null;
    const moves = history.map((step, move) => {
      // step is the {} object
      // move is the index
      // arr.map(function callback(currentValue, index*)) index being optional

      const description = move !== 0 ? "Go to move #" + move : "Go to game start";
      let currentMoveStyle = "";
      if (move === this.state.moveNumber) {
        currentMoveStyle = " current-move-style";
      }
      return (
        <li key={move}>
          <button onClick={this.jumpTo(move)} className={"go-to-move" + currentMoveStyle}>{description}</button>
        </li>
      )
    })

    let status;
    if (gameResult !== null) {
      status = "Winner: " + gameResult.winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "x": "o");
    }

    if (current.squares.indexOf(null) === -1) {
      status = "It's a draw!";
    }

    return(
      <div className="game-container">
        <div className="status-area">
          <div>{status}</div>
          <ol>{moves}</ol> {/* moves is an array and each item is a <li> element */}
        </div>
        <Board squares={current.squares} onClick={this.handleClick} winningPosition={winningPosition}/>
      </div>
    )
  }
}

export default Game;
