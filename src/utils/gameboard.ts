import { Coordinate } from "./coordinate";

export enum CELL_STATE {
  EMPTY = 0,
  TARGET,
  MISS,
  HIT,
}

export class Gameboard {
  private width: number;
  private height: number;
  private boardState: CELL_STATE[][];
  private targetCount: number;
  private hitCount: number = 0;

  constructor(width: number, height: number, targets: Coordinate[]) {
    this.width = width;
    this.height = height;
    this.boardState = this.createBoard(width, height, CELL_STATE.EMPTY);
    this.targetCount = targets.length;
    targets.map((target) => {
      this.setCellState(target, CELL_STATE.TARGET);
    });
  }

  recieveAttack(coord: Coordinate) {
    const state = this.getCellState(coord);
    if (state === CELL_STATE.EMPTY) {
      this.setCellState(coord, CELL_STATE.MISS);
    } else if (state === CELL_STATE.TARGET) {
      this.setCellState(coord, CELL_STATE.HIT);
      this.hitCount++;
    }
  }

  isAttackValid(coord: Coordinate): boolean {
    const state = this.getCellState(coord);
    return state === CELL_STATE.EMPTY || state === CELL_STATE.TARGET;
  }

  allTargetsHit(): boolean {
    return this.hitCount >= this.targetCount;
  }

  private createBoard(width: number, height: number, value: CELL_STATE) {
    const array: CELL_STATE[][] = [];

    for (let i = 0; i < height; i++) {
      array[i] = [];
      for (let j = 0; j < width; j++) {
        array[i][j] = value;
      }
    }
    return array;
  }

  getCellState(coord: Coordinate): CELL_STATE {
    if (!this.isValidCoordinate(coord)) {
      return undefined;
    }
    return this.boardState[coord.X][coord.Y];
  }

  setCellState(coord: Coordinate, state: CELL_STATE) {
    if (!this.isValidCoordinate(coord)) {
      return;
    }
    this.boardState[coord.X][coord.Y] = state;
  }

  private isValidCoordinate(coord: Coordinate) {
    return (
      coord.X >= 0 &&
      coord.X < this.width &&
      coord.Y >= 0 &&
      coord.Y < this.height
    );
  }
}
