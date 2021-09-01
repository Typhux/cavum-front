import { Card } from "./card";
import { Tile } from "./tile";
import { Character } from "./character";

export class GameSettings {

  public tiles: Array<Tile>;
  public items: Array<Card>;
  public spells: Array<Card>;
  public character: Character;
  public fight: string;
  public logs: Array<string>;
  public currentTurn: number;

  constructor() {  }
}
