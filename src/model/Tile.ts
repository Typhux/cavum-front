import { Card } from "./card";

export class Tile {

  public land: string;
  public latitude: number;
  public longitude: number;
  public event: Card;
  public isExplored: boolean;
  public isStart: boolean;

  constructor() {  }
}
