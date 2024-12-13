import Game from "./GameLogic.js";
import Player from "./Player.js";

test("alternate turn between players", () => {
  const player1 = Player();
  const player2 = Player();
  const game = Game(player1, player2);
  expect(game.currentPlayer).toBe(player1);
  game.nextTurn();
  expect(game.currentPlayer).toBe(player2);
});

test("end game when all ships are sunk", () => {
  const player1 = Player();
  const player2 = Player();
  player2.board.allShipsSunk = jest.fn(() => true);
  const game = Game(player1, player2);
  expect(game.isGameOver()).toBe(true);
});

test("Prevents repeated moves", () => {
  const player = Player();
  const opponent = Player();
  player.attack(opponent.board, [0, 0]);
  expect(() => player.attack(opponent.board, [0, 0])).toThrow("Invalid attack");
});
