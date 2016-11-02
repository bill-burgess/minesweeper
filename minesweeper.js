document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
var cell1 = {
  row: 1,
  col: 1,
  isMine: false,
  hidden: true
}
var cell2 = {
  row: 2,
  col: 1,
  isMine: false,
  hidden: true
}
var cell3 = {
  row: 3,
  col: 1,
  isMine: false,
  hidden: true
}
var cell4 = {
  row: 1,
  col: 2,
  isMine: false,
  hidden: true
}
var cell5 = {
  row: 2,
  col: 2,
  isMine: false,
  hidden: true
}
var cell6 = {
  row: 3,
  col: 2,
  isMine: false,
  hidden: true
}
var cell7 = {
  row: 1,
  col: 3,
  isMine: false,
  hidden: true
}
var cell8 = {
  row: 2,
  col: 3,
  isMine: false,
  hidden: true
}
var cell9 = {
  row: 3,
  col: 3,
  isMine: false,
  hidden: true
}

board.cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}
