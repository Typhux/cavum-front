import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/model/card';
import { DialogNewEmulator } from 'src/app/dialog/newEmulator/newEmulator.component';
import { Emulator } from 'src/model/emulator';
import { EmulatorService } from '../emulator.service';
import { DialogPanel } from 'src/app/dialog/panel/panel.component';
import { DynamicData } from 'src/app/panelComponent/dynamic.component';
import { DialogArtifact } from 'src/app/dialog/artifact/dialogArtifact.component';

@Component({
  selector: 'app-emulatorFight',
  templateUrl: './emulatorFight.component.html',
  styleUrls: ['./emulatorFight.component.scss']
})
export class EmulatorFightComponent implements OnInit {

  id: number;
  emulator: Emulator

  constructor(public dialog: MatDialog, private emulatorService: EmulatorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.fetchData();
  }

  playSpell(card: Card){
    this.emulatorService.playSpell(this.id, card.uniqueId).subscribe(response =>{
      this.emulator = <Emulator>response;
      this.callPanel();
    })
  }

  endFight() {
    this.emulatorService.endFight(this.id).subscribe(response => {
      this.emulator = <Emulator>response;
      this.callPanel();
    });
  }

  attack() {
    this.emulatorService.attack(this.id).subscribe(response => {
      this.emulator = <Emulator>response;
      this.callPanel();
    });
  }

  nextAction(){
    this.emulatorService.nextTurn(this.id).subscribe(response =>{
      this.emulator = <Emulator>response;
      this.callPanel();
    })
  }

  reset(){
    this.emulatorService.reset(this.id).subscribe(response =>{
      this.emulator = <Emulator>response;
      this.callPanel();
    })
  }

  save(){
    this.emulator.settings.character.level = this.emulator.settings.character.blueMana + this.emulator.settings.character.greenMana + this.emulator.settings.character.blackMana + this.emulator.settings.character.redMana + this.emulator.settings.character.whiteMana;
    this.emulatorService.changeValue(this.id, this.emulator.settings).subscribe(response => {});
  }

  fetchData(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.emulatorService.getEmulator(this.id).subscribe(response => {
         this.emulator = <Emulator>response;
         this.callPanel();
      })
    })
  }

  addEnemy(){
    const dialogNewEmulator = this.dialog.open(DialogNewEmulator, {data:{title: "Add an enemy"}});

    dialogNewEmulator.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.addEnemy(this.id, result).subscribe(response => {
          this.emulator = <Emulator>response;
          this.callPanel();
        })
      }
    });
  }

  removeEnemy(index: number){
    this.emulator.settings.creatures.splice(index, 1);
    this.save();
  }

  addAlly(){
    const dialogNewEmulator = this.dialog.open(DialogNewEmulator, {data:{title: "Add an ally"}});

    dialogNewEmulator.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.addAlly(this.id, result).subscribe(response => {
          this.emulator = <Emulator>response;
          this.callPanel();
        })
      }
    });
  }

  removeAlly(index: number){
    this.emulator.settings.character.allies.splice(index, 1);
    this.save();
  }

  addArtefact(){
    const dialogNewEmulator = this.dialog.open(DialogNewEmulator, {data:{title: "Add an artifact"}});

    dialogNewEmulator.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.addArtefact(this.id, result).subscribe(response => {
          this.emulator = <Emulator>response;
          this.callPanel();
        })
      }
    });
  }

  equipArtifact(card: Card){
    const dialogArtifact = this.dialog.open(DialogArtifact, {data:{
      'firstArtifact': this.emulator.settings.character.firstArtifact,
      'secondArtifact': this.emulator.settings.character.secondArtifact
    }});
    dialogArtifact.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.equipArtifact(this.id, card.codeName, result).subscribe(response => {
          this.emulator = <Emulator>response;
          this.callPanel();
        })
      }
    });
  }

  unEquipArtifact(slot: number){
    this.emulatorService.unEquipArtifact(this.id, slot).subscribe(response => {
      this.emulator = <Emulator>response;
      this.callPanel();
    })
  }

  removeArtifact(index: number){
    this.emulator.settings.items.splice(index, 1);
    this.save();
  }

  addSpell(){
    const dialogNewEmulator = this.dialog.open(DialogNewEmulator, {data:{title: "Add a spell"}});

    dialogNewEmulator.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.addSpell(this.id, result).subscribe(response => {
          this.emulator = <Emulator>response;
          this.callPanel();
        })
      }
    });
  }

  callPanel(){
    if(this.emulator.settings.actionPanels.length > 0){
      const panel = this.dialog.open(DialogPanel, {data: this.emulator.settings.actionPanels[0]})

      panel.afterClosed().subscribe(result => {
        var actionPanel = <DynamicData>result;
        if(actionPanel && actionPanel.isTreated){
          this.emulatorService.treatPanel(this.id, actionPanel).subscribe(response =>{
         this.emulator = <Emulator>response;
         this.callPanel();
          })
        }else{
          this.fetchData();
        }
      })
    }
  }

  vampire(card: Card){
    this.emulatorService.vampire(this.id, card.uniqueId).subscribe(response =>{
      this.emulator = <Emulator>response;
      this.callPanel();
    })
  }
}
