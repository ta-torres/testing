import Ship from "./Ship.js";

test("Initializes with correct length and zero hits", () => {
  const ship = Ship(3);
  expect(ship.length).toBe(3);
  expect(ship.hits).toBe(0);
});

test("Increments hits when hit() is called", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Ship is not sunk", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("Ship is sunk", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
