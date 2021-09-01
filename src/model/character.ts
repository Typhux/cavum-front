import { Card } from "./card";

export class Character {

  public redMana: number;
  public greenMana: number;
  public blackMana: number;
  public blueMana: number;
  public whiteMana: number;
  public firstArtifact: Card;
  public secondArtifact: Card;
  public healthPoint: number;
  public restingHealthPoint: number;
  public power: number;
  public allies: Array<Card>;
  public level: number;
  public waiting: boolean;
  public isDead: boolean;
  public isStun: boolean;
  public enchantements: Array<Card>;
  public skill: Array<string>;


  constructor() {  }
}
