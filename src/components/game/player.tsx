import { Actor } from "excalibur";

class Player extends Actor {
  public health: number = 100;

  constructor() {
    super({ x: 10, y: 10 });
  }
}
