import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private _urlDomestic:string = "/assets/data/cardDomestic.json";
  private _urlInternational:string = "/assets/data/cardInter.json";
  private _urlIterations:string = "/assets/data/cardIterations.json";

  constructor(private http: HttpClient) { } 

  getCardDomestic(){
    return this.http.get(this._urlDomestic);
  }
  getCardInternational(){
    return this.http.get(this._urlInternational);
  }
  getCardIterations(){
    return this.http.get(this._urlIterations);
  }
}
