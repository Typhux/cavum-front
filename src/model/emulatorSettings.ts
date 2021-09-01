import { DynamicData } from "src/app/panelComponent/dynamic.component";
import { Card } from "./card";
import { Character } from "./character";

export class EmulatorSettings {

  public creatures: Array<Card>;
  public items: Array<Card>;
  public spells: Array<Card>;
  public character: Character;
  public logs: Array<string>;
  public currentTurn: number;
  public actionPanels: Array<DynamicData>;

  constructor() {  }
}
