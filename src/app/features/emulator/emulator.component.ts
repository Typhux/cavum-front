import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogNewEmulator } from 'src/app/dialog/newEmulator/newEmulator.component';
import { Emulator } from 'src/model/emulator';
import { EmulatorService } from './emulator.service';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.scss']
})
export class EmulatorComponent implements OnInit  {

  emulators : Emulator[];

  constructor(public dialog: MatDialog, private emulatorService: EmulatorService, private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  newEmulator(){

    const dialogNewEmulator = this.dialog.open(DialogNewEmulator, {data:{title: "New Emulator"}});

    dialogNewEmulator.afterClosed().subscribe(result => {
      if(result){
        this.emulatorService.newEmulator(result).subscribe(response => {
          if(response != null){
            var emulator = <Emulator>response;
            this.router.navigate(['./admin/emulator/'+ emulator.id])
          }
        })
      }
    });
  }

  deleteEmulator(id: number){
    this.emulatorService.deleteEmulator(id).subscribe(response => {
      this.fetchData();
    })
  }

  fetchData(){
    this.emulatorService.getEmulators().subscribe(response => {
      this.emulators = <Emulator[]>response;
    })
  }
}
