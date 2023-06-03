export class Ship {
  public length: number;
  public damage: number = 0;

  constructor(length: number) {
    this.length = length;
  }

  hit() {
    this.damage++;
  }

  isSunk() {
    return this.damage >= this.length;
  }
}
