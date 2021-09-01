import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: ''
})
export class DynamicComponent {
  @Input() data: DynamicData;
  @Output('result') result: EventEmitter<any> = new EventEmitter();
  constructor() {}
}

export interface DynamicData {
  id: string;
  data: string;
  isTreated: boolean;
  component: string;
}
