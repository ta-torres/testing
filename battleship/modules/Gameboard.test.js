import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

test("Place ship horizontally", () => {
  const board = Gameboard();
  const ship = Ship(3);
  board.placeShip(ship, [0, 0], "horizontal");
  expect(board.ships[0].positions).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
});

test("Place ship vertically", () => {
  const board = Gameboard();
  const ship = Ship(3);
  board.placeShip(ship, [0, 0], "vertical");
  expect(board.ships[0].positions).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);
});

test("Ships cannot overlap", () => {
  const board = Gameboard();
  const ship1 = Ship(3);
  const ship2 = Ship(2);
  board.placeShip(ship1, [0, 0], "horizontal");
  expect(() => board.placeShip(ship2, [0, 1], "vertical")).toThrow(
    "Ships cannot overlap"
  );
});

test("Attack a ship", () => {
  const board = Gameboard();
  const ship = Ship(3);
  board.placeShip(ship, [0, 0], "horizontal");
  expect(board.receiveAttack([0, 1])).toBe("hit");
  expect(ship.hits).toBe(1);
});

test("Keep track of missed shots", () => {
  const board = Gameboard();
  expect(board.receiveAttack([5, 5])).toBe("miss");
  expect(board.missedShots).toContain("5,5");
});
