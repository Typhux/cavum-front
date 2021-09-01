import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FightService } from 'src/app/game/fight/fight.service';
import { GameService } from 'src/app/game/game.service';
import { Card } from 'src/model/card';
import { Game } from 'src/model/game';

export interface DialogData {
  idGame: number;
  guid: string;
}

@Component({
  selector: 'app-dialogPickSpell',
  templateUrl: './dialogPickSpell.component.html',
  styleUrls: ['./dialogPickSpell.component.scss']
})
export class DialogPickSpell implements OnInit{

  spells: Array<Card>;
  id: number;
  game: Game;
  guid: string;


  constructor(private fightService: FightService, private gameService: GameService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(){
      this.fightService.getSpellsReward(this.data.idGame, this.data.guid).subscribe(result =>{
        this.spells = <Array<Card>>result;
      });
      this.gameService.getGame(this.data.idGame).subscribe(result => {
        this.game = <Game>result;
      });
  }
}
