$(document).ready(function(){
  var player1;
  var player2;
  var game;
  var board;

  $("#begin").click(function(){
    //create players
    player1 = new Player("X", true);
    player2 = new Player("O", false);

    //create game
    game =  new Game();
    board = new Board();
    board.populate();

    //set mark for players
    $(".mark1").text(player1.mark);
    $(".mark2").text(player2.mark);

    //show marks for players
    $(".player1-mark").show();
    $(".player2-mark").show();

    // show player1 form once begin game is clicked
    if (player1.isTurn === true) {
      $("#player1-form").show();
    }
  });


  //player 1 always starts a game and this is the form that player 1 will submit.
  // checks for winner every time the form is submitted.
  $("form#player1-form").submit(function(event){
    event.preventDefault();
    var inputtedMove = parseInt($("input#player1-space").val());
    board.spaces[inputtedMove-1].markedBy(player1);
    $("span.pos" + inputtedMove).text("X");


    game.determineWinner(board);
      if (game.winner === "") {
        game.switchPlayer(player1, player2);
        $("#player1-form").hide();
        $("#player2-form").show();
      } else {
        alert(game.winner);
        $("#player1-form").hide();
        $("#player2-form").hide();
      }

      $("input#player1-space").val("")
  });


//player 2 form.
  $("form#player2-form").submit(function(event){
    event.preventDefault();
    var inputtedMove = parseInt($("input#player2-space").val());
    board.spaces[inputtedMove-1].markedBy(player2);
    $("span.pos" + inputtedMove).text("O");

    if (game.winner === "") {
      game.switchPlayer(player1, player2);
      $("#player1-form").show();
      $("#player2-form").hide();
    } else {
      alert(game.winner);
    }
    $("input#player2-space").val("")

  });
});
