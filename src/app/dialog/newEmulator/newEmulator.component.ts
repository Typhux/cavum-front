import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { EmulatorService } from 'src/app/features/emulator/emulator.service';

@Component({
  selector: 'app-newEmulator',
  templateUrl: './newEmulator.component.html',
  styleUrls: ['./newEmulator.component.scss']
})
export class DialogNewEmulator implements OnInit  {

  control = new FormControl();
  codeName: string;
  options: Array<string>;
  filteredOptions: Observable<Array<string>>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string}, private emulatorService: EmulatorService,) { }

  ngOnInit() {
    this.emulatorService.getCodeNameCard().subscribe(response =>{
      this.options = <Array<string>>response;
      this.filteredOptions = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })

  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.options.filter(o => this._normalizeValue(o).includes(filterValue)).slice(0, 4);
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
