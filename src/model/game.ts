import { GameSettings } from "./gameSettings";

export class Game {

  public id: number;
  public guid: string;
  public settings: GameSettings;
  public editionName: string;
  public editionLogo: string;
  public date: string;
  public numberTiles: number;
  public level: number;

  constructor() {  }
}
