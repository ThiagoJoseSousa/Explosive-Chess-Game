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
    const piece = {};
    piece.color = color;
    piece.type = name;
    return piece;
  };
  // a function to set piece place
  const setPieceTo = (pieceObj, xSquare, ySquare, start) => {
    pieceObj.coordinates = [xSquare, ySquare];
    //marks if the piece is on start square
    if (start) {
      pieceObj.start = true;
    }
    squares[xSquare][ySquare] = pieceObj;
  };
  return { playerFactory, pieceFactory, squares, setPieceTo };
};
export default boardFactory;
