const boardFactory = () => {
  let squares = [
    new Array(8),
    new Array(8),
    new Array(8),
    new Array(8),
    new Array(8),
    new Array(8),
    new Array(8),
    new Array(8),
  ];

  const playerFactory = (color) => {
    const player = {};
    player.color = color;
    player.human = false;
    // i will make an outer variable to take care of changing turns.
    return player;
  };
  // now gotta create pieces for each team
  const pieceFactory = (name, color) => {
    const piece = {}
    piece.color = color;
    piece.type = name;
    piece.alive = true;
    return piece;
  };
  // a function to set piece place
  const setPieceTo=(pieceObj, xSquare, ySquare)=> {
    pieceObj.coordinates=[xSquare,ySquare]
    squares[xSquare][ySquare]=pieceObj;
  }
  return { playerFactory, pieceFactory, squares, setPieceTo };
};
export default boardFactory;
