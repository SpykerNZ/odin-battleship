import { Coordinate } from "../src/utils/coordinate";
import { GameboardSetup } from "../src/utils/setup";
import { ORIENTATION, Ship } from "../src/utils/ship";

let setup: GameboardSetup;

describe("3x3 gameboard tests", function () {
  beforeEach(() => {
    setup = new GameboardSetup(3, 3);
  });

  it("gameboard is of size 3x3", function () {
    expect(setup.width).toEqual(3);
    expect(setup.height).toEqual(3);
  });

  it("place ship on board", function () {
    const ship = new Ship(new Coordinate(0, 0), 2, ORIENTATION.VERTICAL);
    let success = setup.placeShip(ship);
    expect(success).toEqual(true);
  });

  it("can't place outside board range", function () {
    const ship = new Ship(new Coordinate(2, 2), 2, ORIENTATION.VERTICAL);
    const success = setup.placeShip(ship);
    expect(success).toEqual(false);
  });

  it("can't place on top of existing ship", function () {
    const ship1 = new Ship(new Coordinate(0, 1), 2, ORIENTATION.HORIZONTAL);
    const ship2 = new Ship(new Coordinate(1, 0), 2, ORIENTATION.VERTICAL);
    setup.placeShip(ship1);
    const result = setup.placeShip(ship2);
    expect(result).toEqual(false);
  });
});
