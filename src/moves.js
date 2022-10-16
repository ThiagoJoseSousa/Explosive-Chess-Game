// this module will run after clicking on an object. It'll calculate where the obj can go.

const possibleMoves = (clickedPiece, board) => {
  let x = clickedPiece.coordinates[0];
  let y = clickedPiece.coordinates[1];
  let possibilities = [];
  // Switch is replaced by an obj, since we have the string name
  // Should lessen the range of ifs depending if im just summing or subtracting
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
      //coords: right side x+1 y+2. x+1 y-2. x+2 y+1. x+2 y-1. leftside x-1 y+2. x-2 y+1. x-1 y-2. //x-2 y-1 (i'm using // to keep track)
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
      if (x - 1 >= 0 && y + 2 >= 0) {
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
      //left-down
      while (x - counter >= 0 && y - counter >= 0) {
        let newX = x + counter;
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
      if (clickedPiece.color === "white") {
        //if at starting point, can go 2 squares up
        if (clickedPiece.start) {
          possibilities.push([x, y + 2]);
          //setPiece should mark the y+1 square to make the en passant a possibility
        }

        //moving upwards
        if (y + 1 <= 7) {
          if (board.squares[x][y + 1] === undefined) {
            possibilities.push([x, y + 1]);
          }
          //attacking other pieces
          if (
            board.squares[x + 1][y + 1] !== undefined &&
            board.squares[x + 1][y + 1].color !== "white"
          ) {
            possibilities.push([x + 1, y + 1]);
          }
          if (
            board.squares[x - 1][y + 1] !== undefined &&
            board.squares[x + 1][y + 1].color !== "white"
          ) {
            possibilities.push([x - 1, y + 1]);
          }
        }
      } else {
        //else means color is black
        if (clickedPiece.start) {
          possibilities.push([x, y - 2]);
        }

        if (y - 1 >= 0) {
          if (board.squares[x][y - 1] === undefined) {
            possibilities.push([x, y - 1]);
          }
          //attacking other pieces
          if (
            board.squares[x + 1][y - 1] !== undefined &&
            board.squares[x + 1][y - 1].color !== "black"
          ) {
            possibilities.push([x + 1, y - 1]);
          }
          if (
            board.squares[x - 1][y - 1] !== undefined &&
            board.squares[x - 1][y - 1].color !== "black"
          ) {
            possibilities.push([x - 1, y - 1]);
          }
        }
      }
    },
  };
  identifyMove[clickedPiece.type]();

  return possibilities;
};

export default possibleMoves;
