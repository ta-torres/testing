const Gameboard = () => {
  const ships = [];
  const occupiedPositions = new Set();
  const missedShots = new Set();

  const isPositionAvailable = (positions) => {
    return positions.every(
      (pos) => !occupiedPositions.has(`${pos[0]},${pos[1]}`)
    );
  };

  const placeShip = (ship, start, orientation) => {
    const positions = [];
    const [x, y] = start;

    for (let i = 0; i < ship.length; i++) {
      const newPos = orientation === "horizontal" ? [x, y + i] : [x + i, y];
      positions.push(newPos);
    }

    if (!isPositionAvailable(positions)) {
      throw new Error("Ships cannot overlap");
    }

    positions.forEach((pos) => occupiedPositions.add(`${pos[0]},${pos[1]}`));
    ships.push({ ship, positions });
  };

  const receiveAttack = (coords) => {
    const coordKey = `${coords[0]},${coords[1]}`;
    if (missedShots.has(coordKey)) {
      throw new Error("Invalid attack");
    }

    // check if the attack hits a ship
    for (const { ship, positions } of ships) {
      for (const pos of positions) {
        if (pos[0] === coords[0] && pos[1] === coords[1]) {
          ship.hit();
          return "hit";
        }
      }
    }

    missedShots.add(coordKey);
    return "miss";
  };

  const allShipsSunk = () => {
    return ships.every(({ ship }) => ship.isSunk());
  };

  return {
    ships,
    missedShots,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

export default Gameboard;
