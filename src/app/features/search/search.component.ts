import { Component, OnInit } from '@angular/core';
import { Edition } from '../../../model/edition';
import { Card } from '../../../model/card';
import { QueryCard } from '../../../model/queryCard';
import { EditionService } from '../edition/edition.service';
import { CardService } from '../card/card.service';
import { SearchService } from './search.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: QueryCard;
  types: any[];
  rarities: any[];
  editions: Edition[];
  results: Card[];
  dataSource: MatTableDataSource<Card>;
  displayedColumns: string[] = ['id', 'title', 'image', 'edition', 'commentary', 'mechanic', 'subType', 'codeName'];

  constructor(private editionService: EditionService,
    private cardService: CardService,
    private searchService: SearchService,
    private router: Router) { }

  ngOnInit() {

    this.query = new QueryCard();
    this.results = [];

    this.cardService.getTypes().subscribe(response => {
      this.types = <any>response;
    });

    this.cardService.getRarities().subscribe(response => {
      this.rarities = <any>response;
    });

    this.editionService.getEditions().subscribe(response => {
      this.editions = <any>response;
    });
  }

  search() {
    this.searchService.executeQuery(this.query).subscribe(response => {
      this.results = <any>response;
      this.dataSource = new MatTableDataSource<Card>(<any>response);
    });
  }

  reset() {
    this.query = new QueryCard();
    this.results = [];
    this.dataSource.data = this.results;
  }

  goTo(idCard: number){
    this.router.navigate(['admin/card/'+ idCard])
  }

}
