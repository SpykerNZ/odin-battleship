import { Coordinate } from "../src/utils/coordinate";
import { ORIENTATION, Ship } from "../src/utils/ship";

let ship: Ship;

describe("A suite is just a function", function () {
  beforeEach(() => {
    const coord = new Coordinate(0, 0);
    const length = 3;
    const direction = ORIENTATION.HORIZONTAL;
    ship = new Ship(coord, length, direction);
  });

  it("check generated coordinates", function () {
    expect(ship.coordinatesArray[0]).toEqual(new Coordinate(0, 0));
    expect(ship.coordinatesArray[1]).toEqual(new Coordinate(1, 0));
    expect(ship.coordinatesArray[2]).toEqual(new Coordinate(2, 0));
  });
});
