const Game = (player1, player2) => {
  return {
    currentPlayer: player1,
    nextTurn() {
      this.currentPlayer = this.currentPlayer === player1 ? player2 : player1;
    },
    isGameOver() {
      return player1.board.allShipsSunk() || player2.board.allShipsSunk();
    },
  };
};

export default Game;
