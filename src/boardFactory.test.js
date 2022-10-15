import boardFactory from "./boardFactory";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
let board = boardFactory();
test("creates a player and board", () => {
  expect(board.playerFactory("white").color).toEqual("white");
});

test("checks squares values", () => {
  expect(board.squares[0][0]).toBe(undefined);
});
test("pieces are created", () => {
  expect(board.pieceFactory("knight", "white").color).toBe("white");
});

test ("pieces can be placed", ()=>{
  board.setPieceTo(board.pieceFactory("knight", "white"), 0,0)
  expect(typeof board.squares[0][0]).toBe("object")
})