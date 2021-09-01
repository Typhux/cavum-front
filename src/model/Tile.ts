import { Card } from "./card";

export class Tile {

  public land: string;
  public latitude: number;
  public longitude: number;
  public event: Array<Card>;
  public isExplored: boolean;
  public isStart: boolean;
  public guid: string;
  public isActual: boolean;

  constructor() {  }
}
