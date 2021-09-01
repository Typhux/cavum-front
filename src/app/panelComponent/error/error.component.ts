import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent, DynamicData } from '../dynamic.component';

export interface DataError {
  message: string;
}

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends DynamicComponent implements OnInit  {

  @Input() data: DynamicData;
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  error: DataError;

  constructor() {
    super();
  }

  ngOnInit(){
    this.error = <DataError>JSON.parse(this.data.data);
  }

  done(){
    this.data.isTreated = true;
    this.result.emit(this.data);
  }
}
