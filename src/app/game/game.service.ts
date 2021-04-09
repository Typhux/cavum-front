import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  newGame() {
    var id = 3;
    return this.http.get('/api/game/new/'  + id);
  }

  getGames(){
    return this.http.get('/api/game');
  }

  deleteGame(id: number){
    return this.http.delete('/api/game/' + id);
  }
}
