import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/model/card';
import { DynamicComponent, DynamicData } from '../dynamic.component';

export interface DataReward {
  card: Card;
}

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent extends DynamicComponent implements OnInit  {

  @Input() data: DynamicData;
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  reward: DataReward;

  constructor() {
    super();
  }

  ngOnInit(){
    this.reward = <DataReward>JSON.parse(this.data.data);
  }

  select(rewardString: string){
    this.data.isTreated = true;
    this.reward.card.rewarded = rewardString;
    this.data.data = JSON.stringify(this.reward);
    this.result.emit(this.data);
  }
}
