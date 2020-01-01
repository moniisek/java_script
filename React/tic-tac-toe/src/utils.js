export function findWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let result = {"winner": '', "position": []};

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    let current = [squares[a], squares[b], squares[c]];
    if (current.indexOf(null) === -1) {
      if ((squares[a] == squares[b]) && squares[b] == squares[c]) {
        result.winner = squares[a];
        result.position = lines[i];
        return result;
      }
    }
  }
  return null;
}
