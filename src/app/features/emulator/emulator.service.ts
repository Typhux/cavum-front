import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmulatorSettings } from 'src/model/emulatorSettings';
import { DynamicData } from 'src/app/panelComponent/dynamic.component';

@Injectable()
export class EmulatorService {

  constructor(private http: HttpClient) { }

  newEmulator(codeName: string) {
      var id = 3;
      return this.http.get('/api/emulator/new/' + id + '/' + codeName);
  }

  getEmulators(){
    return this.http.get('/api/emulator');
  }

  deleteEmulator(id: number){
    return this.http.delete('/api/emulator/' + id);
  }

  getEmulator(id: number){
    return this.http.get('/api/emulator/' + id);
  }

  nextTurn(id: number){
    return this.http.get('/api/emulator/turn/' + id);
  }

  endFight(id: number){
    return this.http.get('/api/emulator/endfight/' + id);
  }

  reset(id: number){
    return this.http.get('/api/emulator/reset/' + id);
  }

  attack(id: number){
    return this.http.get('/api/emulator/attack/' + id);
  }

  playSpell(id: number, guid: string){
    return this.http.get('/api/emulator/playspell/' + id + '/' + guid);
  }

  addEnemy(id: number, codeName: string){
    return this.http.get('/api/emulator/addEnemy/' + id + '/' + codeName);
  }

  addAlly(id: number, codeName: string){
    return this.http.get('/api/emulator/addAlly/' + id + '/' + codeName);
  }

  addArtefact(id: number, codeName: string){
    return this.http.get('/api/emulator/addArtefact/' + id + '/' + codeName);
  }

  equipArtifact(id: number, codeName: string, slot: number){
    return this.http.get('/api/emulator/equipArtifact/' + id + '/' + codeName + '/' + slot);
  }

  unEquipArtifact(id: number, slot: number){
    return this.http.get('/api/emulator/unequipartifact/' + id + '/' + slot);
  }

  addSpell(id: number, codeName: string){
    return this.http.get('/api/emulator/addSpell/' + id + '/' + codeName);
  }

  getCodeNameCard(){
    return this.http.get('/api/emulator/getCodeNameCard');
  }

  changeValue(id: number, settings: EmulatorSettings){
    return this.http.post('/api/emulator/changeValue/' + id, settings)
  }

  treatPanel(id: number, actionPanel: DynamicData){
    return this.http.post('/api/emulator/treatPanel/' + id, actionPanel)
  }

  vampire(id: number, guid: string){
    return this.http.get('/api/emulator/vampire/' + id + '/' + guid);
  }
}
