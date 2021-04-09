import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edition } from '../../../../model/edition';
import { CardService } from '../card.service';
import { EditionService } from '../../edition/edition.service';
import { Card } from '../../../../model/card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  id: number;
  card: Card;
  type: any;
  rarity: any;
  edition: Edition;
  redMana: Array<Number>;
  blackMana: Array<Number>;
  whiteMana: Array<Number>;
  greenMana: Array<Number>;
  blueMana: Array<Number>;

  constructor(private cardService: CardService,
    private editionService: EditionService,
     private activatedRoute: ActivatedRoute,
      private router: Router) {
   }

  ngOnInit() {
    // Refacto todo here
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cardService.getCard(this.id).subscribe(response => {
        this.card = <any>response;
        this.redMana = Array(this.card.redMana).fill(0);
        this.blackMana = Array(this.card.blackMana).fill(0);
        this.whiteMana = Array(this.card.whiteMana).fill(0);
        this.greenMana = Array(this.card.greenMana).fill(0);
        this.blueMana = Array(this.card.blueMana).fill(0);
        this.editionService.getEdition(this.card.editionId).subscribe(edition => {
          this.edition = <any>edition;
        });
        this.cardService.getType(this.card.type).subscribe(type => {
          this.type = <any>type;
        });
        this.cardService.getRarity(this.card.rarity).subscribe(rarity => {
          this.rarity = <any>rarity;
        });
      });
    });
  }

    deleteCard() {
      if (confirm('Are you to delete this Card ?')) {
        this.cardService.deleteCard(this.id).subscribe(response => {
          this.router.navigateByUrl('admin/card');
      });
    }
    }
  }
