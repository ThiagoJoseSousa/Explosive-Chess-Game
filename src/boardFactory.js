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
    piece.alive = true;
    return piece;
  };

  return { playerFactory, pieceFactory, squares };
};
export default boardFactory;
