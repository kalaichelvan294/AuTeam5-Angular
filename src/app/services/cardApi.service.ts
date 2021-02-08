import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  //dummy
  // private _urlCardContent:string = "/assets/data/cardContent.json";
  // private _urlCard2Content:string = "/assets/data/card2Content.json";

  //Original
  private _urlCardContent:string = "/card/getCardData"
  private _urlCard2Content:string = "/card/getNotReleased";

  constructor(private http: HttpClient) { }

  getCardContent(){
    return this.http.get(this._urlCardContent);
  }
  getCard2Content(){
    return this.http.get(this._urlCard2Content);
  }

}
