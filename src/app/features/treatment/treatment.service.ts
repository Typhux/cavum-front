import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TreatmentService {

  constructor(private http: HttpClient) { }

  treatEdition() {
    return this.http.get('/api/treatment/all');
  }

  treatCard(codeName) {
    return this.http.get('/api/treatment/' + codeName);
  }

  setAllAsNotTreated(){
    return this.http.get('/api/treatment/setAllAsNotTreated');
  }
}
