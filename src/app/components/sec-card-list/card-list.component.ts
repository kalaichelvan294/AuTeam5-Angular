import { CardTaskService } from './../../services/cardTask.service';
import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/services/cardApi.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

// cardDataId and api response data id should match
public cardHint:string;
// Card data 
// -1 indicates data has been loading...
public cardStaticData:object[];

constructor(private _cardService: CardApiService, private _cardTask: CardTaskService) {
  this.cardHint = "Last Hour";
  this.cardStaticData = [
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
 }

ngOnInit() {
  this.initCardContent();
}

// initialize card contents on page load
initCardContent(){
  this._cardService.getCardContent().subscribe(
    (data) => {
      Object.keys(data).forEach(key => { this._cardTask.assignCount(this.cardStaticData, key, data[key]); });
      this._cardTask.assignDefault(this.cardStaticData);
    },
    (error) => {
      console.log("card data Fetch error:"+error);
      this._cardTask.assignDefault(this.cardStaticData);
    }
  );
} // initCardContentEnd

}
