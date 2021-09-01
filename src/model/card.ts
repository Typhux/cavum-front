export class Card {

  public id: number;
  public title: string;
  public type: number;
  public subType: string;
  public blueMana: number;
  public greenMana: number;
  public whiteMana: number;
  public blackMana: number;
  public redMana: number;
  public neutralMana: number;
  public rarity: number;
  public mechanic: string;
  public codeName: string;
  public power: number;
  public defense: number;
  public editionId: number;
  public commentary: string;
  public urlImage: string;
  public isTreated: boolean;
  public editionLogo: string;
  public editionName: string;
  public restingHealthPoint: number;
  public pourcentageHp: number;
  public stringType: Array<string>;
  public skill: Array<string>;
  public uniqueId: string;
  public resolved: Card;
  public rewarded: string;

  constructor() {
  }
}
