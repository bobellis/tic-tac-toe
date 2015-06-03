describe('Player', function(){
  it('creates player', function(){
    var player = new Player("x");
    expect(player.mark).to.equal("x");
  });
});

describe('Board', function(){
  it('creates a blank play board', function(){
    var board = new Board();
    expect(board.spaces.length).to.equal(0);
  });
  it('creates spaces on board', function(){
    var board = new Board();
    board.populate();
    expect(board.spaces.length).to.equal(9);
    expect(board.spaces[0].coordinates).to.eql([1,1])
  });

});


describe('Space', function(){
  it('tells what space is marked', function(){
    var space = new Space(1,1);
    var player1 = new Player("x");
    expect(space.markedBy(player1)).to.equal("x");

  });


  it('creates a space board', function(){
    var space = new Space(1,1);
    expect(space.coordinates).to.eql([1,1]);
  });
});

describe('Game', function(){
  it('determines winner of game', function(){
    var game = new Game();
    var player1 = new Player("x");
    var player2 = new Player("o");
    var board = new Board();
    board.populate();
    board.spaces[0].markedBy(player1)
    board.spaces[1].markedBy(player1)
    board.spaces[2].markedBy(player1)
    expect(game.determineWinner(board)).to.equal('x');
  });
  it('determines Cats Game', function(){
    var game = new Game();
    var player1 = new Player("x");
    var player2 = new Player("o");
    var board = new Board();
    board.populate();
    board.spaces[0].markedBy(player1);
    board.spaces[1].markedBy(player2);
    board.spaces[2].markedBy(player1);
    board.spaces[3].markedBy(player1);
    board.spaces[4].markedBy(player2);
    board.spaces[5].markedBy(player1);
    board.spaces[6].markedBy(player2);
    board.spaces[7].markedBy(player1);
    board.spaces[8].markedBy(player2);
    expect(game.determineWinner(board)).to.equal('Tie');
  });

  it('switches player turn', function(){
    var game = new Game();
    var player1 = new Player("x", true);
    var player2 = new Player("o", false);
    game.switchPlayer(player1, player2);
    expect(player1.isTurn).to.equal(false);
    expect(player2.isTurn).to.equal(true);
  });
});
