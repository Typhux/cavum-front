import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/model/game';
import { BoardService } from './board.service';
import {MatTableDataSource} from '@angular/material/table';
import { Tile } from 'src/model/tile';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  id : number;
  game: Game;
  pourcentageHp: number;

  constructor(private boardService: BoardService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.boardService.getGame(this.id).subscribe(response => {
        var resGame = <Game>response;
        if(resGame.settings.fight){
          location.href = './game/' + resGame.id + '/' + resGame.settings.fight;
        }else{
          this.game = resGame;
          this.pourcentageHp = (100 * this.game.settings.character.restingHealthPoint) / this.game.settings.character.healthPoint;
        }
      })
    })
  }

  explore(guid: string){
    this.boardService.explore(this.id, guid).subscribe(response => {
      this.game = <Game>response;
      location.href="./game/" + this.id + "/" + guid;
    })
  }

  goTo(guid: string){
    this.boardService.goTo(this.id, guid).subscribe(response => {
      this.game = <Game>response;
    })
  }

  useArtifact(card: Card){

  }

  removeArtifact(card: Card){

  }
}
