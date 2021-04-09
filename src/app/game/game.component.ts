import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';
import { Game } from '../../model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public games: Game[]

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  newGame(){
    this.gameService.newGame().subscribe(response => {
      var game = <Game>response;
      this.router.navigate(['game/'+ game.id])
    });
  }

  copyGuid(guid: string){
    const temp = document.createElement('textarea');
    temp.style.position = 'fixed';
    temp.style.left = '0';
    temp.style.top = '0';
    temp.style.opacity = '0';
    temp.value = guid;
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  }

  deleteGame(id: number){
    this.gameService.deleteGame(id).subscribe(response => {
      this.fetchData();
    });
  }

  fetchData(){
    this.gameService.getGames().subscribe(response => {
      this.games = <Game[]>response;
      this.games.forEach(game => {
        game.numberTiles = game.settings.tiles.length;
        game.level = game.settings.character.blueMana + game.settings.character.blackMana + game.settings.character.greenMana + game.settings.character.redMana + game.settings.character.whiteMana;
      });
    });
  }

}
