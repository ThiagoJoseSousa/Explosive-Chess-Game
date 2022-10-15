import boardFactory from "./boardFactory";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
let white = boardFactory();
test("creates a player and board", () => {
  expect(white.playerFactory("white").color).toEqual("white");
});

test("checks squares values", () => {
  expect(white.squares[0][0]).toBe(undefined);
});
test("pieces are created", () => {
  expect(white.pieceFactory("knight", "white").color).toBe("white");
});
