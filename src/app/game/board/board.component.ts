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
        this.game = <Game>response;
        this.game.level = this.game.settings.character.blueMana + this.game.settings.character.blackMana + this.game.settings.character.greenMana + this.game.settings.character.redMana + this.game.settings.character.whiteMana;
        this.pourcentageHp = (100 * this.game.settings.character.restingHealthPoint) / this.game.settings.character.healthPoint;
      })
    })
  }

  explore(tile: Tile){

  }

  useArtifact(card: Card){

  }

  removeArtifact(card: Card){

  }
}
