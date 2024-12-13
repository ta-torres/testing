import Gameboard from './Gameboard.js';

const Player = (name) => {
    return {
        name,
        board: Gameboard(),
        ships: [],
        turn: true,
        attack: (opponent, coords) => opponent.receiveAttack(coords),
        computerAttack: (opponent) => {
            const randomCoords = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
            opponent.receiveAttack(randomCoords);
        },
        receiveAttack: (coords) => {
            if (!turn) {
                throw new Error('Not your turn');
            }
            turn = false;
            return this.attack(this.board, coords);
        },
    };
};

export default Player;
