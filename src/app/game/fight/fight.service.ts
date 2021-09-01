import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FightService {

  constructor(private http: HttpClient) { }

  beginFight(id: number, guid: string){
    return this.http.get('/api/fight/start/' + id + '/' + guid);
  }

  nextAction(id: number, guid: string){
    return this.http.get('/api/fight/turn/' + id + '/' + guid);
  }

  attack(id: number, guid: string){
    return this.http.get('/api/fight/attack/' + id + '/' + guid);
  }

  pickPower(id: number, guid: string){
    return this.http.get('/api/fight/addPower/' + id + '/' + guid);
  }

  pickDefense(id: number, guid: string){
    return this.http.get('/api/fight/addDefense/' + id + '/' + guid);
  }

  pickSpell(id: number, cardId: number, guid: string){
    return this.http.get('/api/fight/addSpell/' + id  + '/' + cardId + '/' + guid);
  }

  getSpellsReward(id: number, guid:string){
    return this.http.get('/api/fight/getSpellRewards/' + id + '/' + guid);
  }
}
