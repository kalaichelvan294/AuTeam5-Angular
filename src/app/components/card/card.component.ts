import { CardApiService } from './../../services/cardApi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // cardDataId and api response data id should match
  public cardStaticData = [
    {
      cardTitle:"Domestic",
      cardHint:"last hour",
      cardDataId : "domesticCount",
      cardContent:-1,
      cardIcon:"flight"
    },
    {
      cardTitle:"International",
      cardHint:"last hour",
      cardDataId : "internationalCount",
      cardContent:-1,
      cardIcon:"flight_takeoff"
    },
    {
      cardTitle:"Iterations",
      cardHint:"last hour",
      cardDataId : "iterationCount",
      cardContent:-1,
      cardIcon:"loop",
    }
  ];

  constructor(private _cardService: CardApiService) { }
  
  ngOnInit() {
    this.initCardContent();
  }

  initCardContent(){
    let promise = this._cardService.getCardContent().toPromise();
    promise.then( 
      (data) => {
        Object.entries(data).map((key, i)=> { this.assignCount(key[0], key[1]); });
        this.assignDefault();
      },
      (error) => {
        console.log("card data Fetch error:"+error);
        this.assignDefault();
      }
    );
  } // initCardContentEnd

  // Assign card data counts with cardId and cardDataId
  assignCount(cardId:string, count:number){
    for(let i=0; i < this.cardStaticData.length; i++ ){
      if(this.cardStaticData[i].cardDataId == cardId){
        this.cardStaticData[i].cardContent = count;
        break;
      }
    }
  }

  // Assign remaining card data counts to 0 to stop loading
  assignDefault(){
    for(let i=0; i < this.cardStaticData.length; i++ ){
      if(this.cardStaticData[i].cardContent == -1){ this.cardStaticData[i].cardContent = 0; }
    }
  }

}
