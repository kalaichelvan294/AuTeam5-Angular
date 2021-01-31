import { CardApiService } from './../../services/cardApi.service';
import { MatIconModule } from '@angular/material/icon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('cardData')
  cardData;

  constructor(private _cardService: CardApiService) { }
  
  ngOnInit() {
    this.initCardContent();
  }

  initCardContent(){
    var promise;
    switch(this.cardData.cardTitle){
      case "Domestic":
        promise = this._cardService.getCardDomestic().toPromise();
        break;
      case "International":
        promise = this._cardService.getCardInternational().toPromise();
        break;
      case "Iterations":
        promise = this._cardService.getCardIterations().toPromise();
        break;
      default:
        promise = this._cardService.getCardDomestic().toPromise();
        break;
    }
    promise.then( 
      (data) => {
        this.cardData['cardContent'] = data.cardContent || "Error";
      },
      (error) => {
        this.cardData['cardContent'] = "Error";
      }
    );
  } // initCardContentEnd


}
