import { Coordinate } from "../src/utils/coordinate";
import { CELL_STATE, Gameboard } from "../src/utils/gameboard";

let gameboard: Gameboard;

describe("3x3 gameboard tests", function () {
  beforeEach(() => {
    const targets: Coordinate[] = [new Coordinate(1, 1), new Coordinate(0, 0)];
    gameboard = new Gameboard(3, 3, targets);
  });

  it("can't attack outside game board", function () {
    expect(gameboard.isAttackValid(new Coordinate(0, 3))).toBe(false);
    expect(gameboard.isAttackValid(new Coordinate(3, 0))).toBe(false);
  });

  it("receieve attack and ship is missed", function () {
    const attackCoord = new Coordinate(2, 2);
    gameboard.recieveAttack(attackCoord);
    expect(gameboard.getCellState(attackCoord)).toBe(CELL_STATE.MISS);
  });

  it("receieve attack and ship is hit", function () {
    const attackCoord = new Coordinate(1, 1);
    gameboard.recieveAttack(attackCoord);
    expect(gameboard.getCellState(attackCoord)).toBe(CELL_STATE.HIT);
  });

  it("indicate all ships have been sunk", function () {
    gameboard.recieveAttack(new Coordinate(0, 0));
    gameboard.recieveAttack(new Coordinate(1, 1));
    expect(gameboard.allTargetsHit()).toBe(true);
  });
});
