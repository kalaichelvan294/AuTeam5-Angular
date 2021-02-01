import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  //dummy
  private _urlCardContent:string = "/assets/data/cardContent.json";

  //Original
  // private _urlCardContent:string = "/card/getCardContent";

  constructor(private http: HttpClient) { } 

  getCardContent(){
    return this.http.get(this._urlCardContent);
  }

}
