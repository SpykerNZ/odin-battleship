export class GameboardSetup {
  public width: number;
  public height: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  placeShip(): boolean {
    // Adds a ship of the game board
    // Ensure is a valid placement
    // Ensure does not intersect with existing pieces
    // returns if placement was valid or not
    return true;
  }

  getTargets() {
    // Returns a list of coordinates, indicating all gameboard targets
  }
}
