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
    player.king = true;
    // i will make an outter variable to take care of changing turns.
    return player;
  };
  // now gotta create pieces for each team
  const pieceFactory = (name, color) => {
    const piece = {};
    piece.color = color;
    piece.type = name;
    piece.img = `../public/images/pieces/${color} ${name}.png`;
    return piece;
  };
  // a function to set piece place
  const setPieceTo = (pieceObj, xSquare, ySquare, start) => {
    //marks if the piece is on start square
    pieceObj.start = false;
    if (start) {
      pieceObj.start = true;
    }
    squares[xSquare][ySquare] = pieceObj;
  };
  return { playerFactory, pieceFactory, squares, setPieceTo };
};
export default boardFactory;
