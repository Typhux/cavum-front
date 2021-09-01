import { Component, OnInit } from '@angular/core';
import { TreatmentService } from './treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent {

  public codeName = '';

  constructor(private treatmentService: TreatmentService) { }

  treatCodeName() {
   this.treatmentService.treatCard(this.codeName).subscribe(response =>{
     console.log("Treatment done.")
   });
  }

  treatAll() {
    this.treatmentService.treatEdition();
  }

  setAllAsNotTreated() {
    if(confirm("All reset ?")){
      this.treatmentService.setAllAsNotTreated();
    }
  }

}
