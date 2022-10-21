import boardFactory from "./boardFactory.js";
import possibleMoves from "./moves.js";
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
    //clear old rows.
    document.querySelector("#boardSquares").innerHTML = "";

    //creates each row
    gameBoard.forEach((row, x) => {
      let tableRow = document.createElement("tr");
      tableRow.setAttribute("class", "tableRow");

      //creates each square of that row
      for (let y = 0; y <= 7; y++) {
        let cell = document.createElement("td");
        cell.setAttribute("class", "boardSquare");
        //all squares must have coords!
        cell.setAttribute(`data-coords`, `${x}${y}`);
        // if there's a piece, add piece's image to it
        let square = row[y];
        if (square !== undefined) {
          let image = document.createElement("img");
          image.setAttribute("class", "pieceImg");
          image.setAttribute("src", square.img);
          image.setAttribute("alt", `${square.color} ${square.type}`);
          //identify what color the td is
          cell.setAttribute(`data-${square.color}`, "");
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

  // change turns based on color
  const changeTurn = (newX, newY) => {
    if (gameBoard[newX][newY].color === "white") {
      playerCanClick("black");
    } else {
      playerCanClick("white");
    }
  };
  //add listeners to the player pieces
  const playerCanClick = (color) => {
    let pieces = document.querySelectorAll(`[data-${color}]`);
    pieces.forEach((square) => {
      square.addEventListener("click", getPossibleMoves);
      square.classList.add("active");
    });
  };

  //after player click: return possible moves. Can't be an anonymous func because needs to be removed
  const getPossibleMoves = (e) => {
    clearAttacks(); // each click new possibilites should appear, and the olds removed
    e.target.setAttribute("id", "clickedPiece"); // marks the clicked piece
    //sends the coordinates (and game) to possible moves
    const availableSquares = possibleMoves(e.target.dataset.coords, game);
    displayPossibleMoves(availableSquares);
  };
  const displayPossibleMoves = (availableSquares) => {
    // each availablSsquares item is the possibility, second bracket is 0 for x or 1 for y
    availableSquares.forEach((coords) => {
      //creates a div that will make available squares grey
      let grey = document.createElement("div");
      grey.classList.add("grey");

      let possibleSquare = document.querySelector(
        `[data-coords="${coords[0]}${coords[1]}"]`
      );
      possibleSquare.classList.add("possibleMove");
      possibleSquare.appendChild(grey);
      possibleSquare.addEventListener("click", play);
    });
  };
  const play = (e) => {
    //move object
    let oldPiece = document.querySelector("#clickedPiece");

    let oldX = parseInt(oldPiece.dataset.coords[0], 10);
    let oldY = parseInt(oldPiece.dataset.coords[1], 10);
    let newX = parseInt(e.target.dataset.coords[0], 10);
    let newY = parseInt(e.target.dataset.coords[1], 10);
    console.log("I happened");

    // en pasant condition starter
    if (gameBoard[oldX][oldY].type === "pawn") {
      gameBoard[oldX][oldY].enpasant = false;
      //checks if 2 squares were advanced
      if (newY - oldY === 2 || oldY - newY === 2) {
        gameBoard[oldX][oldY].enpasant = true; //a problem here, enpasant should be true for one turn and not one move
        //dettecting if en pasant attack below
      } else if (oldX !== newX && gameBoard[newX][newY] === undefined) {
        gameBoard[newX][oldY] = undefined;
      }
    }

    // moves rook if castling
    if (gameBoard[oldX][oldY].type === "king" && gameBoard[oldX][oldY].start) {
      if (newX - oldX === 2) {
        game.setPieceTo(gameBoard[newX + 1][oldY], newX - 1, oldY);
        gameBoard[newX + 1][oldY] = undefined;
      } else if (newX - oldX === -2) {
        game.setPieceTo(gameBoard[newX - 2][oldY], newX + 1, oldY);
        gameBoard[newX - 2][oldY] = undefined;
      }
    }

    //checking if attacking king
    if (
      gameBoard[newX][newY] !== undefined &&
      gameBoard[newX][newY].type === "king"
    ) {
      game.setPieceTo(gameBoard[oldX][oldY], newX, newY);
      gameBoard[oldX][oldY] = undefined;
      clearAttacks();
      renderBoard();
      alert(`${gameBoard[newX][newY].color} won the game!`);
      return;
    }
    game.setPieceTo(gameBoard[oldX][oldY], newX, newY);
    console.log("I happened 2");
    gameBoard[oldX][oldY] = undefined;
    console.log("I happened 3");
    console.log(gameBoard[newX][newY]);
    clearAttacks();
    renderBoard();

    //if its not a pawn promoting, turns can change!
    if (gameBoard[newX][newY].type === "pawn") {
      if (newY === 7) {
        promotePawn.white(newX, newY);
      } else if (newY === 0) {
        promotePawn.black(newX, newY);
      } else {
        changeTurn(newX, newY);
      }
    } else {
      changeTurn(newX, newY);
    }
  };
  const clearAttacks = () => {
    // when move is done, forget about last piece clicked
    let clickedPiece = document.querySelector("#clickedPiece");
    if (clickedPiece !== null) {
      clickedPiece.removeAttribute("id");
    }
    document.querySelectorAll(".grey").forEach((item) => {
      let parentElement = item.parentElement;
      parentElement.classList.remove("possibleMove");
      parentElement.removeEventListener("click", play);
      parentElement.removeChild(item);
    });
  };

  const promotePawn = {
    white: function (newX, newY) {
      let promotionSquare = document.querySelector(
        `[data-coords="${newX}${newY}"]`
      );
      //gets the square promoted

      let wrapper = document.createElement("div");
      wrapper.classList.add("promoting");

      let queen = document.createElement("img");
      queen.setAttribute("src", "../public/images/pieces/white queen.png");
      queen.setAttribute("alt", "promote to queen");
      queen.addEventListener("click", (e) => {
        gameBoard[newX][newY] = game.pieceFactory("queen", "white");
        renderBoard();
        changeTurn(newX, newY);
      });
      queen.classList.add("active");

      let knight = document.createElement("img");
      knight.setAttribute("src", "../public/images/pieces/white knight.png");
      knight.setAttribute("alt", "promote to knight");
      knight.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("knight", "white");
        renderBoard();
        changeTurn(newX, newY);
      });
      knight.classList.add("active");

      let rook = document.createElement("img");
      rook.setAttribute("src", "../public/images/pieces/white rook.png");
      rook.setAttribute("alt", "promote to rook");
      rook.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("rook", "white");
        renderBoard();
        changeTurn(newX, newY);
      });
      rook.classList.add("active");

      let bishop = document.createElement("img");
      bishop.setAttribute("src", "../public/images/pieces/white bishop.png");
      bishop.setAttribute("alt", "promote to bishop");
      bishop.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("bishop", "white");
        renderBoard();
        changeTurn(newX, newY);
      });
      bishop.classList.add("active");

      let pawn = document.createElement("img");
      pawn.setAttribute("src", "../public/images/pieces/white pawn.png");
      pawn.setAttribute("alt", "promote to pawn");
      pawn.addEventListener("click", () => {
        renderBoard();
        changeTurn(newX, newY);
      });
      pawn.classList.add("active");

      wrapper.appendChild(queen);
      wrapper.appendChild(knight);
      wrapper.appendChild(rook);
      wrapper.appendChild(bishop);
      wrapper.appendChild(pawn);
      promotionSquare.appendChild(wrapper);
    },
    black: function (newX, newY) {
      let promotionSquare = document.querySelector(
        `[data-coords="${newX}${newY}"]`
      );
      //gets the square promoted

      let wrapper = document.createElement("div");
      wrapper.classList.add("promoting");

      let queen = document.createElement("img");
      queen.setAttribute("src", "../public/images/pieces/black queen.png");
      queen.setAttribute("alt", "promote to queen");
      queen.addEventListener("click", (e) => {
        gameBoard[newX][newY] = game.pieceFactory("queen", "black");
        renderBoard();
        changeTurn(newX, newY);
      });
      queen.classList.add("active");

      let knight = document.createElement("img");
      knight.setAttribute("src", "../public/images/pieces/black knight.png");
      knight.setAttribute("alt", "promote to knight");
      knight.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("knight", "black");
        renderBoard();
        changeTurn(newX, newY);
      });
      knight.classList.add("active");

      let rook = document.createElement("img");
      rook.setAttribute("src", "../public/images/pieces/black rook.png");
      rook.setAttribute("alt", "promote to rook");
      rook.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("rook", "black");
        renderBoard();
        changeTurn(newX, newY);
      });
      rook.classList.add("active");

      let bishop = document.createElement("img");
      bishop.setAttribute("src", "../public/images/pieces/black bishop.png");
      bishop.setAttribute("alt", "promote to bishop");
      bishop.addEventListener("click", () => {
        gameBoard[newX][newY] = game.pieceFactory("bishop", "black");
        renderBoard();
        changeTurn(newX, newY);
      });
      bishop.classList.add("active");

      let pawn = document.createElement("img");
      pawn.setAttribute("src", "../public/images/pieces/black pawn.png");
      pawn.setAttribute("alt", "promote to pawn");
      pawn.addEventListener("click", () => {
        renderBoard();
        changeTurn(newX, newY);
      });
      pawn.classList.add("active");

      wrapper.appendChild(queen);
      wrapper.appendChild(knight);
      wrapper.appendChild(rook);
      wrapper.appendChild(bishop);
      wrapper.appendChild(pawn);
      promotionSquare.appendChild(wrapper);
    },
  };

  return { placePieces, renderBoard, chooseSide, playerCanClick, game };
};

export default matchController;
