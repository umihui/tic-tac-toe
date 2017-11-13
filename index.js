var Board = function () {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.count = 0;
  this.togglePlayer = true;
  this.currentPlayer = this.togglePlayer ? 'x' : 'o';
}

Board.prototype.player = function (currentPlayer, row, col) {
  this.board[row][col] = currentPlayer;
  if (isWinning()) {
    alert(`play ${currentPlayer} won`);
    return;
  } else {
    if (this.count === 9) {
      alert('draw');
      return
    } else {
      this.togglePlayer = !this.togglePlayer;
    }
  }
  
}

Board.prototype.isWinning = function () {
  var isEqual = function([a, b, c]) {
    return a === b && b === c;
  }
  var leftDiagonal = [];
  for (var i = 0; i < 3; i++) {
    if (isEqual(getRows(this.board, i))) {
      return true;
    }
    if (isEqual(getCols(this.board, i))) {
      return true;
    }
    leftDiagonal.push(this.board[i][i])
  }
  var rightDiagonal = [];
  for (var i = 0, j = 2; i < 3 && j >= 0; i++, j--) {
    rightDiagonal.push(this.board[i][j]);
  }
  if (isEqual(leftDiagonal) || isEqual(rightDiagonal)) {
    return true;
  } 
  return false;
}

var getRows = function (board, row) {
  var link = []
  for (var j = 0; j < board[row].length; j++) {
    link.push(board[row][i]);
  }
  return link;
}

var getCols = function (board, col) {
  var link = []
  for (var j = 0; j < board.length; j++) {
    link.push(board[j][col]);
  }
  return link;
}





