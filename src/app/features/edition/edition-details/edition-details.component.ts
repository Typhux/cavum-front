import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edition } from '../../../../model/edition';
import { EditionService } from '../edition.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-edition-details',
  templateUrl: './edition-details.component.html',
  styleUrls: ['./edition-details.component.scss']
})

export class EditionDetailsComponent implements OnInit {

  edition: Edition;
  update: boolean = false;
  private id: number;
  private isSorted: boolean = false;
  private research: string;
  displayedColumns: string[] = ['id', 'title', 'image', 'commentary', 'mechanic', 'subType', 'codeName'];
  dataSource: MatTableDataSource<Card>;
  display: boolean = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private editionService: EditionService, private activatedRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.editionService.getEdition(this.id).subscribe(response => {
        this.edition = <any>response;

        if(this.edition.cards.length > 0){
          this.display = true;
        }

        this.dataSource = new MatTableDataSource<Card>(this.edition.cards);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
    updateEdition(){
      this.editionService.updateEdition(this.edition).subscribe(() => {
        this.router.navigateByUrl('admin/edition');
      });
    }

    goTo(idCard: number){
      this.router.navigate(['admin/card/'+ idCard])
    }

    sortNotTreated(){
      if(!this.isSorted){
        this.dataSource = new MatTableDataSource<Card>(this.edition.cards.filter(c => c.isTreated == false));
        this.isSorted = true;
      }else{
        this.dataSource = new MatTableDataSource<Card>(this.edition.cards);
        this.isSorted = false;
      }
    }

    deleteEdition() {
      if (confirm('Are you sure to delete this edition ?')) {
        this.editionService.deleteEdition(this.id).subscribe(response => {
        this.router.navigateByUrl('admin/edition');
        });
      }
    }

    launchResearch(){
      this.display = false;
        this.editionService.launchResearch(this.id, this.research).subscribe(response => {
          var cards = <any>response;
          if(cards.length > 0){
            this.display = true;
          }
          this.dataSource = new MatTableDataSource<Card>(cards);
      });
    }
}

