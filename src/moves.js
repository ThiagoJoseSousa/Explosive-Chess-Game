// this module will run after clicking on an object. It'll calculate where the obj can go.

const possibleMoves= (clickedPiece, board)=>{
  let x=clickedPiece.coordinates[0];
  let y=clickedPiece.coordinates[1];
  let possibilities=[];
    switch(clickedPiece.name) {
        case 'knight':
          //coords: x+1, y+2. x+2,y+1. x-1,y+2. x-2, y+1. x+1, y-2. x+2, y-1. x-2, y-1. x-1, y-2. 
          // check if square is inside the board and if there's no piece of the same color on the place.
          if (x+1<=7 && y+2<=7 && x+1>=0  && y+2>=0) {
            const newX=x+1; const newY=y+2;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x+2<=7 && y+1<=7 && x+2>=0  && y+1>=0) {
            const newX=x+2; const newY=y+1;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x-1<=7 && y+2<=7 && x-1>=0  && y+2>=0) {
            const newX=x-1; const newY=y+2;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x-2<=7 && y+1<=7 && x-2>=0  && y+1>=0) {
            const newX=x-2; const newY=y+1;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x+1<=7 && y-2<=7 && x+1>=0  && y-2>=0) {
            const newX=x+1; const newY=y-2;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x+2<=7 && y-1<=7 && x+2>=0  && y-1>=0) {
            const newX=x+2; const newY=y-1;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x-2<=7 && y-1<=7 && x-2>=0  && y-1>=0) {
            const newX=x-2; const newY=y-1;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          if (x-1<=7 && y-2<=7 && x-1>=0  && y-2>=0) {
            const newX=x-1; const newY=y-2;
            if (board.squares[newX][newY]===undefined || (board.squares[newX][newY]!==undefined && board.squares[newX][newY].color!==clickedPiece.color)) {
              possibilities.push([newX, newY])
            }
          }
          break;
        case 'king':
          
          
          break;
        default:
          
      }
return possibilities
}

export default possibleMoves