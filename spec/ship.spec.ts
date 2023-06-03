import { Ship } from "../src/utils/ship";

let ship: Ship;

describe("A suite is just a function", function () {
  beforeEach(() => {
    ship = new Ship(3);
  });

  it("ship length is 3", function () {
    expect(ship.length).toBe(3);
  });

  it("ship starts undamaged", function () {
    expect(ship.damage).toBe(0);
  });

  it("ship is hit and takes 1 damage", function () {
    ship.hit();
    expect(ship.damage).toBe(1);
  });

  it("ship is sunk after 3 hits", function () {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
