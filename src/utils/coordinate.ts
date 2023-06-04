export class Coordinate {
  public X: number;
  public Y: number;
  constructor(X: number, Y: number) {
    this.X = X;
    this.Y = Y;
  }
}

export function coordinateMatch(c1: Coordinate, c2: Coordinate) {
  return c1.X === c2.X && c1.Y === c2.Y;
}

export function coordinatesAnyMatch(arr1: Coordinate[], arr2: Coordinate[]) {
  return arr1.some((coord1) =>
    arr2.some((coord2) => coordinateMatch(coord1, coord2))
  );
}

export class Range {
  min_x: number;
  max_x: number;
  min_y: number;
  max_y: number;

  constructor(min_x: number, max_x: number, min_y: number, max_y: number) {
    this.min_x = min_x;
    this.max_x = max_x;
    this.min_y = min_y;
    this.max_y = max_y;
  }
}

function coordinateOutsideRange(c: Coordinate, range: Range): boolean {
  return (
    c.X < range.min_x ||
    c.X >= range.max_x ||
    c.Y < range.min_y ||
    c.Y >= range.max_y
  );
}

export function coordinatesAnyOutsideRange(arr: Coordinate[], range: Range) {
  return arr.some((coord) => {
    return coordinateOutsideRange(coord, range);
  });
}
