import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogPickSpell } from 'src/app/dialog/pickSpell/dialogPickSpell.component';
import { DialogWin } from 'src/app/dialog/win/dialogWin.component';
import { Card } from 'src/model/card';
import { Game } from 'src/model/game';
import { Tile } from 'src/model/tile';
import { FightService } from './fight.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  id: number;
  game: Game;
  pourcentageHp: number;
  guid: string;
  tile: Tile;
  logs: Array<string>;

  constructor(public dialog: MatDialog, private fightService: FightService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.logs = new Array<string>();
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.guid = params['guid'];
      this.fightService.beginFight(this.id, this.guid).subscribe(response => {
        this.setGame(response);
        });
      });
    }

  useArtifact(card: Card){
  }

  attack() {
    this.fightService.attack(this.game.id, this.game.settings.fight).subscribe(response => {
      this.setGame(response);
    });
  }

  nextAction(){

    var win = true;
    this.tile.event.forEach(eve => {
      if(eve.restingHealthPoint > 0){
        win = false;
      }
    });

    if(this.game.settings.character.isDead){
      alert("Your character is dead ! You have lost the game.");
      location.href= "./game/";
    }

    if(win){
      const dialogWin = this.dialog.open(DialogWin);

      dialogWin.afterClosed().subscribe(result => {
        if(result == 'power'){
          this.fightService.pickPower(this.id, this.guid).subscribe(response =>{
            this.setGame(response);
            location.href= "./game/" + this.game.id;
          });
        }else if(result == 'defense'){
          this.fightService.pickDefense(this.id, this.guid).subscribe(response =>{
            this.setGame(response);
            location.href= "./game/" + this.game.id;
          });;
        }else{
          const dialogPickSpell = this.dialog.open(DialogPickSpell, {data:{
            'idGame': this.id,
            'guid': this.guid
          }});
          dialogPickSpell.afterClosed().subscribe(result => {
            this.fightService.pickSpell(this.id, result, this.guid).subscribe(response => {
              this.setGame(response);
              location.href= "./game/" + this.game.id;
            });
          });
        }
      })
    }else{
      this.fightService.nextAction(this.game.id, this.game.settings.fight).subscribe(response => {
        this.setGame(response);
      });
    }

  }

  removeArtifact(card: Card){

  }

  setGame(response: Object){
    var resGame = <Game>response;
    if(resGame.settings.fight == this.guid){
    this.game = resGame;
    this.tile = this.game.settings.tiles.find(t => t.guid == this.guid);
    this.pourcentageHp = (100 * this.game.settings.character.restingHealthPoint) / this.game.settings.character.healthPoint;
    this.tile.event.forEach(e => {
       e.pourcentageHp= (100 * e.restingHealthPoint) / e.defense;
       e.stringType = e.subType.split(';');
      });
    this.logs = this.game.settings.logs;
    }else{
      location.href = './game/' + resGame.id + '/' + resGame.settings.fight;
    }
  }
}
