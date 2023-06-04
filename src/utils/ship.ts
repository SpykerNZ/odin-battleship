import { Coordinate } from "./coordinate";

export enum ORIENTATION {
  HORIZONTAL = 0,
  VERTICAL,
}

export class Ship {
  public coordinatesArray: Coordinate[] = [];

  constructor(coord: Coordinate, length: number, orientation: ORIENTATION) {
    let x_incr = orientation === ORIENTATION.HORIZONTAL ? 1 : 0;
    let y_incr = orientation === ORIENTATION.VERTICAL ? 1 : 0;
    for (let i = 0; i < length; i++) {
      this.coordinatesArray.push(
        new Coordinate(coord.X + x_incr * i, coord.Y + y_incr * i)
      );
    }
  }
}
