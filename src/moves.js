// this module will run after clicking on an object. It'll calculate where the obj can go.

const possibleMoves = (coords, board) => {
  /*
  let x = clickedPiece.coordinates[0];
  let y = clickedPiece.coordinates[1];
   */
  let possibilities = [];
  let x = parseInt(coords[0], 10);
  let y = parseInt(coords[1], 10);
  console.log(typeof x, `${x}`, "testing type of x ");
  console.log(typeof y, `${y}`, "testing type of y ");

  let clickedPiece = board.squares[x][y];
  console.log(clickedPiece, "testing board values");
  // There's a big object below containing rules that runs depending on the clicked piece.
  const identifyMove = {
    knight: function () {
      //coords: x+1, y+2. x+2,y+1. x-1,y+2. x-2, y+1. x+1, y-2. x+2, y-1. x-2, y-1. x-1, y-2.
      // check if square is inside the board and if there's no piece of the same color on the place.
      if (x + 1 <= 7 && y + 2 <= 7) {
        const newX = x + 1;
        const newY = y + 2;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x + 2 <= 7 && y + 1 <= 7) {
        const newX = x + 2;
        const newY = y + 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (y + 2 <= 7 && x - 1 >= 0) {
        const newX = x - 1;
        const newY = y + 2;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (y + 1 <= 7 && x - 2 >= 0) {
        const newX = x - 2;
        const newY = y + 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x + 1 <= 7 && y - 2 >= 0) {
        const newX = x + 1;
        const newY = y - 2;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x + 2 <= 7 && y - 1 >= 0) {
        const newX = x + 2;
        const newY = y - 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x - 2 >= 0 && y - 1 >= 0) {
        const newX = x - 2;
        const newY = y - 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x - 1 >= 0 && y - 2 >= 0) {
        const newX = x - 1;
        const newY = y - 2;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
    },
    king: function () {
      //castling possibility: if both king and rook is at start position and there's no pieces between them

      if (
        clickedPiece.start &&
        board.squares[x + 3][y] !== undefined &&
        board.squares[x + 3][y].start &&
        board.squares[x + 1][y] === undefined &&
        board.squares[x + 2][y] === undefined
      ) {
        possibilities.push([x + 2, y]);
      }
      if (
        clickedPiece.start &&
        board.squares[x - 4][y] !== undefined &&
        board.squares[x - 4][y].start &&
        board.squares[x - 1][y] === undefined &&
        board.squares[x - 2][y] === undefined &&
        board.squares[x - 3][y] === undefined
      ) {
        possibilities.push([x - 2, y]);
      }

      //coords: right: x+1, y. x+1, y+1. x,y-1. left: x-1,y. x-1, y+1. x-1, y-1. up and down: x, y+1. x, y-1.
      if (x + 1 <= 7) {
        const newX = x + 1;
        const newY = y;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (x + 1 <= 7 && y + 1 <= 7) {
        const newX = x + 1;
        const newY = y + 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (y - 1 >= 0) {
        const newX = x;
        const newY = y - 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }

      if (x - 1 >= 0) {
        const newX = x - 1;
        const newY = y;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }

      if (x - 1 >= 0 && y + 1 <= 7) {
        const newX = x - 1;
        const newY = y + 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }

      if (x - 1 >= 0 && y - 1 >= 0) {
        const newX = x - 1;
        const newY = y - 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }

      if (y + 1 <= 7) {
        const newX = x;
        const newY = y + 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
      if (y - 1 >= 0) {
        const newX = x;
        const newY = y - 1;
        if (
          board.squares[newX][newY] === undefined ||
          (board.squares[newX][newY] !== undefined &&
            board.squares[newX][newY].color !== clickedPiece.color)
        ) {
          possibilities.push([newX, newY]);
        }
      }
    },
    rook: function () {
      //must create 4 loops that represents each direction the rook could go
      let counter = 1;
      // go right
      while (x + counter <= 7) {
        if (board.squares[x + counter][y] === undefined) {
          possibilities.push([x + counter, y]);
          counter++;
        } else if (clickedPiece.color === board.squares[x + counter][y].color) {
          // if a piece is found colors are equal, stop loop and dont push
          counter = 8;
        } else {
          possibilities.push([x + counter, y]);
          counter = 8;
        }
      }
      // go up
      counter = 1;
      while (y + counter <= 7) {
        if (board.squares[x][y + counter] === undefined) {
          possibilities.push([x, y + counter]);
          counter++;
        } else if (clickedPiece.color === board.squares[x][y + counter].color) {
          // if colors are equal, stop loop and dont push. Else, push and stop loop
          counter = 8;
        } else {
          possibilities.push([x, y + counter]);
          counter = 8;
        }
      }
      counter = 1;
      // go left
      while (x - counter >= 0) {
        if (board.squares[x - counter][y] === undefined) {
          possibilities.push([x - counter, y]);
          counter++;
        } else if (clickedPiece.color === board.squares[x - counter][y].color) {
          counter = 8;
        } else {
          possibilities.push([x - counter, y]);
          counter = 8;
        }
      }
      counter = 1;
      // go down
      while (y - counter >= 0) {
        if (board.squares[x][y - counter] === undefined) {
          possibilities.push([x, y - counter]);
          counter++;
        } else if (clickedPiece.color === board.squares[x][y - counter].color) {
          counter = 8;
        } else {
          possibilities.push([x, y - counter]);
          counter = 8;
        }
      }
    },
    bishop: function () {
      //must create 4 loops for each bishop direction
      let counter = 1;
      //up-right
      while (x + counter <= 7 && y + counter <= 7) {
        let newX = x + counter;
        let newY = y + counter;
        if (board.squares[newX][newY] === undefined) {
          counter++;
          possibilities.push([newX, newY]);
        } else if (board.squares[newX][newY].color === clickedPiece.color) {
          counter = 8;
        } else {
          possibilities.push([newY, newX]);
          counter = 8;
        }
      }
      counter = 1;
      //right-down
      while (x + counter <= 7 && y - counter >= 0) {
        let newX = x + counter;
        let newY = y - counter;
        if (board.squares[newX][newY] === undefined) {
          counter++;
          possibilities.push([newX, newY]);
        } else if (board.squares[newX][newY].color === clickedPiece.color) {
          counter = 8;
        } else {
          possibilities.push([newY, newX]);
          counter = 8;
        }
      }
      counter = 1;
      //left-up
      while (x - counter >= 0 && y + counter <= 7) {
        let newX = x - counter;
        let newY = y + counter;
        if (board.squares[newX][newY] === undefined) {
          counter++;
          possibilities.push([newX, newY]);
        } else if (board.squares[newX][newY].color === clickedPiece.color) {
          counter = 8;
        } else {
          possibilities.push([newY, newX]);
          counter = 8;
        }
      }
      counter = 1;
      //left-down
      while (x - counter >= 0 && y - counter >= 0) {
        let newX = x - counter;
        let newY = y - counter;
        if (board.squares[newX][newY] === undefined) {
          possibilities.push([newX, newY]);
          counter++;
        } else if (board.squares[newX][newY].color === clickedPiece.color) {
          counter = 8;
        } else {
          possibilities.push([newY, newX]);
          counter = 8;
        }
      }
    },
    queen: function () {
      this.rook();
      this.bishop();
    },
    pawn: function () {
      //white and black moves different directions
      // I didnt check if between bounds
      if (clickedPiece.color === "white") {
        console.log("I happened");
        // en passant rule, if the pawn at your side has pasant property, you can capture It.
        if (
          x + 1 <= 7 &&
          board.squares[x + 1][y] !== undefined &&
          board.squares[x + 1][y].enpasant
        ) {
          possibilities.push([x + 1, y + 1]);
        }
        console.log("I happened 2");
        if (
          x - 1 >= 0 &&
          board.squares[x - 1][y] !== undefined &&
          board.squares[x - 1][y].enpasant
        ) {
          possibilities.push([x - 1, y + 1]);
        }
        console.log("I happened 3");
        //if at starting point, can go 2 squares up
        if (
          y + 2 <= 7 &&
          clickedPiece.start &&
          board.squares[x][y + 1] === undefined &&
          board.squares[x][y + 2] === undefined
        ) {
          possibilities.push([x, y + 2]);
          //setPiece should mark the y+1 square to make the en passant a possibility
        }
        console.log("I happened 4");

        //white moving upwards
        if (y + 1 <= 7 && board.squares[x][y + 1] === undefined) {
          possibilities.push([x, y + 1]);

          console.log("I happened 5");
        }
        //attacking other pieces
        if (
          x + 1 <= 7 &&
          y + 1 <= 7 &&
          board.squares[x + 1][y + 1] !== undefined &&
          board.squares[x + 1][y + 1].color !== "white"
        ) {
          possibilities.push([x + 1, y + 1]);
        }
        console.log("I happened 6");
        if (
          x - 1 >= 0 &&
          y + 1 <= 7 &&
          board.squares[x - 1][y + 1] !== undefined &&
          board.squares[x - 1][y + 1].color !== "white"
        ) {
          possibilities.push([x - 1, y + 1]);
        }
        console.log("Sucess");
      } else {
        //else means color is black
        console.log("I happened");
        // en passant rule, if the pawn at your side has pasant property, you can capture It.
        if (
          x + 1 <= 7 &&
          board.squares[x + 1][y] !== undefined &&
          board.squares[x + 1][y].enpasant
        ) {
          possibilities.push([x + 1, y - 1]);
        }
        console.log("I happened 2");
        if (
          x - 1 >= 0 &&
          board.squares[x - 1][y] !== undefined &&
          board.squares[x - 1][y].enpasant
        ) {
          possibilities.push([x - 1, y - 1]);
        }
        console.log("I happened 3");
        //if at starting point, can go 2 squares down
        if (
          y - 2 >= 0 &&
          clickedPiece.start &&
          board.squares[x][y - 1] === undefined &&
          board.squares[x][y - 2] === undefined
        ) {
          possibilities.push([x, y - 2]);
          //setPiece should mark the y-1 square to make the en passant a possibility
        }
        console.log("I happened 4");

        //black moving downwards
        if (y - 1 >= 0 && board.squares[x][y - 1] === undefined) {
          possibilities.push([x, y - 1]);

          console.log("I happened 5");
        }
        //attacking other pieces
        if (
          x + 1 <= 7 &&
          y - 1 >= 0 &&
          board.squares[x + 1][y - 1] !== undefined &&
          board.squares[x + 1][y - 1].color !== "black"
        ) {
          possibilities.push([x + 1, y - 1]);
        }
        console.log("I happened 6");
        if (
          x - 1 >= 0 &&
          y - 1 >= 0 &&
          board.squares[x - 1][y - 1] !== undefined &&
          board.squares[x - 1][y - 1].color !== "black"
        ) {
          possibilities.push([x - 1, y - 1]);
        }
        console.log("Sucess");
      }
    },
  };
  identifyMove[clickedPiece.type]();

  return possibilities;
};

export default possibleMoves;
