import boardFactory from "./boardFactory.js";
// This module will start the match, say whose turn is, and tell wether a move is an attack or not. And end.

//take the user input to decide which side to begin

//first I want the possibleMoves to have event listeners, but It cant happen before each square is a div. So my priority is starting the game

//priority is rendering the board

const matchController = () => {
  let game = boardFactory();
  let gameBoard = game.squares;

  const placePieces = () => {
    //each object must be different, or if one dies all dies.
    //putting white pawns on board
    for (let x = 0; x <= 7; x++) {
      game.setPieceTo(game.pieceFactory("pawn", "white"), x, 1, true);
    }
    //putting black pawns on board
    for (let x = 0; x <= 7; x++) {
      game.setPieceTo(game.pieceFactory("pawn", "black"), x, 6, true);
    }
    // putting all 4 rooks on board
    game.setPieceTo(game.pieceFactory("rook", "white"), 0, 0, true);
    game.setPieceTo(game.pieceFactory("rook", "white"), 7, 0, true);
    game.setPieceTo(game.pieceFactory("rook", "black"), 0, 7, true);
    game.setPieceTo(game.pieceFactory("rook", "black"), 7, 7, true);

    //putting all 4 knights on board
    game.setPieceTo(game.pieceFactory("knight", "white"), 1, 0);
    game.setPieceTo(game.pieceFactory("knight", "white"), 6, 0);
    game.setPieceTo(game.pieceFactory("knight", "black"), 1, 7);
    game.setPieceTo(game.pieceFactory("knight", "black"), 6, 7);

    //putting all 4 bishops on board
    game.setPieceTo(game.pieceFactory("bishop", "white"), 2, 0);
    game.setPieceTo(game.pieceFactory("bishop", "white"), 5, 0);
    game.setPieceTo(game.pieceFactory("bishop", "black"), 2, 7);
    game.setPieceTo(game.pieceFactory("bishop", "black"), 5, 7);

    //putting queens on board
    game.setPieceTo(game.pieceFactory("queen", "white"), 3, 0);
    game.setPieceTo(game.pieceFactory("queen", "black"), 3, 7);
    //putting kings on board
    game.setPieceTo(game.pieceFactory("king", "white"), 4, 0, true);
    game.setPieceTo(game.pieceFactory("king", "black"), 4, 7, true);
  };
  const renderBoard = () => {
    //create a variable to fill square colors;
    let green = false;
    //creates each row
    gameBoard.forEach((row, x) => {
      let tableRow = document.createElement("tr");
      tableRow.setAttribute("class", "tableRow");

      //creates each square of that row
      for (let y = 0; y <= 7; y++) {
        let cell = document.createElement("td");
        cell.setAttribute("class", "boardSquare");
        // if there's a piece, add piece's image to it
        let square = row[y];
        if (square !== undefined) {
          let image = document.createElement("img");
          image.setAttribute("class", "pieceImg");
          image.setAttribute("src", square.img);
          image.setAttribute("alt", `${square.color} ${square.type}`);
          //identify what color the td is
          cell.setAttribute(`data-${square.color}`,'true')
          cell.appendChild(image);
        }
        //make squares green or white
        if (green === true) {
          green = false;
          cell.classList.add("green");
        } else {
          green = true;
        }
        tableRow.appendChild(cell);
      }

      //green must be the opposite value as before
      if (green !== true) {
        green = true;
      } else {
        green = false;
      }
      //event listener should be added depending on whose turn it's

      //append row to table
      document.getElementById("boardSquares").appendChild(tableRow);
    });
  };
  //here the player will chose their color at the start of the game
  const chooseSide = (side) => {
    let player1 = game.playerFactory("white");
    let player2 = game.playerFactory("black");
    if (side === "1") {
      player1.human = true;
    } else {
      player2.human = true;
    }
    return { player1, player2 };
  };
  // we'll now start the turns.
  const startTurns= (player1,player2) =>{
    let turn=1;
    //while king is alive
    while (player1.king && player2.king){
      if (turn===1 && player1.human) { // i can check who is human just one time. 

        //white can move
        turn=2;
      } else if (player2.human){
        //black can move
        turn=1;} else {
          //if its computer turn just skip
          turn=1;}
    }

  }
  //add listeners to the player pieces
  const playerCanClick= (color) => {
        let pieces= document.querySelectorAll(`[data-${color}='true']`)
        pieces.forEach((item)=> {
          item.addEventListener('click', ()=> {
            console.log("I'm working!")
          })
        item.classList.add('active')
        })

  }
  return { placePieces, renderBoard, chooseSide, playerCanClick };
};

export default matchController;
