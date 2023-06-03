import { Gameboard } from "../src/utils/gameboard";

let gameboard: Gameboard;

describe("A suite is just a function", function () {
  beforeEach(() => {
    gameboard = new Gameboard(5, 5);
  });

  it("gameboard of size 5x5 is generated", function () {
    expect(gameboard.width).toBe(5);
    expect(gameboard.height).toBe(5);
  });

  it("place ship", function () {
    // place a ship at a coordinate on the board
    // can be placed horizontally or vertically
    // Need to check they don't collide with existing ships!
    // Need to check they don't go off edge of board!
  });

  it("receieve attack", function () {
    // receieve an attack and either hit or miss a ship
  });

  it("keep track of missed attacks", function () {
    // we need to keep track on any missed attacks
    // maintain a gameboard array
    // this will indicate pending, hit or missed
  });

  it("indicate all ships have been sunk", function () {
    // when all ships are sunk, we need to report this!
    // Iterate through all ships and check if sunk.
  });
});
