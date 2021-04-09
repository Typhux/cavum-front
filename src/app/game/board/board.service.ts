import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoardService {

  constructor(private http: HttpClient) { }

  getGame(id: number){
    return this.http.get('/api/game/' + id);
  }

}
