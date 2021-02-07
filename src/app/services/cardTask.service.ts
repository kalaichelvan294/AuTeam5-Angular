import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTaskService {

constructor() { }

// Assign card data counts with cardId and cardDataId
assignCount(cardStaticData, cardId:string, count:number){
  for(let i=0; i < cardStaticData.length; i++ ){
    if(cardStaticData[i].cardDataId == cardId){
      cardStaticData[i].cardContent = count.toString();
      break;
    }
  }
}

// Assign remaining card data counts from -1 to 0 -> stops loading
assignDefault(cardStaticData){
  for(let i=0; i < cardStaticData.length; i++ ){
    if(cardStaticData[i].cardContent == '-1'){ cardStaticData[i].cardContent = '0'; }
  }
}

}
