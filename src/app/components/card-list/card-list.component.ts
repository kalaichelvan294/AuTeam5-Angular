import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/services/cardApi.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

// cardDataId and api response data id should match
public cardHint:string = "Last Hour";
public cardStaticData = [
  {
    cardTitle:"Domestic",
    cardHint: this.cardHint,
    cardDataId : "domesticCount",
    cardContent:'-1',
    cardIcon:"flight"
  },
  {
    cardTitle:"International",
    cardHint: this.cardHint,
    cardDataId : "internationalCount",
    cardContent:'-1',
    cardIcon:"flight_takeoff"
  },
  {
    cardTitle:"Iterations",
    cardHint: this.cardHint,
    cardDataId : "iterationCount",
    cardContent:'-1',
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
      this.cardStaticData[i].cardContent = count.toString();
      break;
    }
  }
}

// Assign remaining card data counts to 0 to stop loading
assignDefault(){
  for(let i=0; i < this.cardStaticData.length; i++ ){
    if(this.cardStaticData[i].cardContent == '-1'){ this.cardStaticData[i].cardContent = '0'; }
  }
}

}
