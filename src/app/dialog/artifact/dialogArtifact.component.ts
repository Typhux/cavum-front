import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Card } from 'src/model/card';

export interface DialogArtifact {
  firstArtifact: Card;
  secondArtifact: Card;
  idGame: number;
}

@Component({
  selector: 'app-dialogArtifact',
  templateUrl: './dialogArtifact.component.html',
  styleUrls: ['./dialogArtifact.component.scss']
})
export class DialogArtifact{

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogArtifact) {}
}
