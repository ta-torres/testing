import Player from "./Player.js";

test("Initialize a gameboard for player", () => {
  const player = Player();
  expect(player.board).toBeDefined();
});

test("Player can attack opponent board", () => {
  const player = Player();
  const opponent = Player();
  opponent.board.receiveAttack = jest.fn();
  player.attack(opponent.board, [0, 0]);
  expect(opponent.board.receiveAttack).toHaveBeenCalledWith([0, 0]);
});

test("computer generates random attacks", () => {
  const player = Player();
  const opponent = Player();
  opponent.board.receiveAttack = jest.fn();
  player.computerAttack(opponent.board);
  expect(opponent.board.receiveAttack).toHaveBeenCalled();
});

test("Player can receive attack", () => {
  const player = Player();
  player.receiveAttack = jest.fn();
  player.receiveAttack([0, 0]);
  expect(player.receiveAttack).toHaveBeenCalledWith([0, 0]);
});
