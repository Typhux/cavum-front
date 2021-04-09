export class QueryCard {

  public title: string;
  public type: number;
  public minBlueMana: number;
  public maxBlueMana: number;
  public minGreenMana: number;
  public maxGreenMana: number;
  public minWhiteMana: number;
  public maxWhiteMana: number;
  public minBlackMana: number;
  public maxBlackMana: number;
  public minRedMana: number;
  public maxRedMana: number;
  public minNeutralMana: number;
  public maxNeutralMana: number;
  public levelCard:  number;
  public rarity: number;
  public editionId: number;

  constructor() {
    this.minBlueMana = 0;
    this.maxBlueMana = 0;
    this.minGreenMana = 0;
    this.maxGreenMana = 0;
    this.minWhiteMana = 0;
    this.maxWhiteMana = 0;
    this.minBlackMana = 0;
    this.maxBlackMana = 0;
    this.minRedMana = 0;
    this.maxRedMana = 0;
    this.minNeutralMana = 0;
    this.maxNeutralMana = 0;
    this.levelCard = null;
  }
}
