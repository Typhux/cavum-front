import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../model/card';
import { CardService } from './card.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[];
  dataSource: MatTableDataSource<Card>;
  displayedColumns: string[] = ['id', 'title', 'image', 'edition', 'commentary', 'mechanic', 'subType', 'codeName'];

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(response => {
      this.dataSource = new MatTableDataSource<Card>(<any>response);
    });
  }

  goTo(idCard: number){
    this.router.navigate(['admin/card/'+ idCard])
  }

}
