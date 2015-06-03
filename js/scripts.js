// check git log for functionality.

function Player(mark, isTurn) {
  this.mark = mark;
  this.isTurn = isTurn;
}


function Board() {
  this.spaces = [];
}

Board.prototype.populate = function() {
  for (var i = 1; i <= 3; i++ ) {
    var space = new Space(1,i);
    this.spaces.push(space);
  };
  for (var i = 1; i <= 3; i++ ) {
    var space = new Space(2,i);
    this.spaces.push(space);
  };
  for (var i = 1; i <= 3; i++ ) {
    var space = new Space(3,i);
    this.spaces.push(space);
  };
};

//puts spaces into the board array


function Space(xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.marked = "";
  this.coordinates = [xCoordinate,yCoordinate];
}

Space.prototype.markedBy = function(player) {
    var markedSpace =  player.mark;
    this.marked = markedSpace;
    return this.marked;
};

//allows player to mark a space

function Game() {
  this.winner = "";
}



Game.prototype.switchPlayer = function(player1, player2) {

  if (player1.isTurn === true) {
    player1.isTurn = false;
    player2.isTurn = true;
  } else {
    player1.isTurn = true;
    player2.isTurn = false;
  }
};

//switches player turn . not used yet but may be helpful later

Game.prototype.detectFullBoard = function(board) {
  var blankSpaces = [];
  for (var i = 0; i <= 8; i++) {
    if (board.spaces[i].marked === "") {
        blankSpaces.push(board.spaces[i]);
    }
  }

  if (blankSpaces.length > 0) {
    return false;
  } else {
    return true;
  }
};

//used for bottom function to detect if all spaces are marked

Game.prototype.determineWinner = function(board) {
  var finalWinner = "";

  if (board.spaces[0].marked === board.spaces[1].marked  && board.spaces[1].marked === board.spaces[2].marked) {
    finalWinner = board.spaces[0].marked;

  } else if (board.spaces[3].marked === board.spaces[4].marked  && board.spaces[4].marked === board.spaces[5].marked) {
    finalWinner = board.spaces[3].marked;

  } else if (board.spaces[6].marked === board.spaces[7].marked  && board.spaces[7].marked === board.spaces[8].marked) {
    finalWinner = board.spaces[6].marked;

  } else if (board.spaces[0].marked === board.spaces[4].marked  && board.spaces[4].marked === board.spaces[8].marked) {
    finalWinner = board.spaces[0].marked;

  } else if (board.spaces[6].marked === board.spaces[4].marked  && board.spaces[4].marked === board.spaces[2].marked) {
    finalWinner = board.spaces[6].marked;

  } else if (board.spaces[0].marked === board.spaces[3].marked  && board.spaces[3].marked === board.spaces[6].marked) {
    finalWinner = board.spaces[0].marked;

  } else if (board.spaces[1].marked === board.spaces[4].marked  && board.spaces[4].marked === board.spaces[7].marked) {
    finalWinner = board.spaces[1].marked;

  } else if (board.spaces[2].marked === board.spaces[5].marked  && board.spaces[5].marked === board.spaces[8].marked) {
    finalWinner = board.spaces[2].marked;

  } else if (this.detectFullBoard(board)) {
    finalWinner = "Tie";
  }
  this.winner = finalWinner;
  return finalWinner;
}

//function determines winner


// *** We decided to separate jQuery file from the JavaScript functions. jQuery is in jquery.js ***
