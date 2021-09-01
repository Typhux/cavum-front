import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient) { }

  getGame(id: number){
    return this.http.get('/api/game/' + id);
  }

  explore(id: number, guid: string){
    return this.http.get('/api/game/explore/' + id + '/' + guid);
  }

  goTo(id: number, guid: string){
    return this.http.get('/api/game/goto/' + id + '/' + guid);
  }

}
