import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/model/card';
import { DynamicComponent, DynamicData } from '../dynamic.component';

export interface DataSelect {
  message: string;
  cards: Array<Card>;
  spell: Card;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends DynamicComponent implements OnInit  {

  @Input() data: DynamicData;
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  items: DataSelect;

  constructor() {
    super();
  }

  ngOnInit(){
    this.items = <DataSelect>JSON.parse(this.data.data);
  }

  select(card: Card){
    this.data.isTreated = true;
    this.items.spell.resolved = card;
    this.data.data = JSON.stringify(this.items);
    this.result.emit(this.data);
  }

  cancel(){
    this.data.isTreated = true;
    this.result.emit(this.data);
  }
}
