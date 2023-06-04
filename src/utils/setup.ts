import {
  Coordinate,
  Range,
  coordinatesAnyMatch,
  coordinatesAnyOutsideRange,
} from "./coordinate";
import { Ship } from "./ship";

export class GameboardSetup {
  public width: number;
  public height: number = 0;
  public shipsArray: Ship[] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  placeShip(ship: Ship): boolean {
    // Ensure does not intersect with existing pieces
    const intersect = this.shipsArray.some((placedShip) => {
      return coordinatesAnyMatch(
        placedShip.coordinatesArray,
        ship.coordinatesArray
      );
    });
    // Does not placed outside the board
    const outside = coordinatesAnyOutsideRange(
      ship.coordinatesArray,
      new Range(0, this.width, 0, this.height)
    );
    // Don't place ship if it intersects or outside region
    if (intersect || outside) {
      return false;
    } else {
      this.shipsArray.push(ship);
      return true;
    }
  }

  getTargets(): Coordinate[] {
    const targets: Coordinate[] = [];
    this.shipsArray.map((ship) => {
      targets.push(...ship.coordinatesArray);
    });
    return targets;
  }
}
