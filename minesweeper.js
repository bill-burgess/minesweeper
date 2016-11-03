document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
function Cell(row, col, isMine){
  this.row = row;
  this.col = col;
  this.isMine = isMine;
  this.hidden = true;
}
var cell0 = new Cell(0, 0, false)
var cell1 = new Cell(1, 0, false)
var cell2 = new Cell(2, 0, false)
var cell3 = new Cell(0, 1, false)
var cell4 = new Cell(1, 1, false)
var cell5 = new Cell(2, 1, false)
var cell6 = new Cell(0, 2, false)
var cell7 = new Cell(1, 2, false)
var cell8 = new Cell(2, 2, false)

board.cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8,]

function startGame () {
  var cellNum = board.cells.length;
  for (var i = 0; i < cellNum; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  for(var i = 0; i < board.cells.length; i++){
    if(board.cells[i].isMine && !board.cells[i].isMarked){
      return;
    }else if(board.cells[i].isMine && !board.cells[i].hidden){
      return;
    }
    lib.displayMessage('You win!');
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine){
      count++;
    }
  }
  return count;
}
