import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarChartApiService {

  // dummy url
  public _urlBarChart = "/assets/data/barChartContent.json";

  constructor(private http: HttpClient) { }
  
  getBarChartContent(destination:string){
    // console.log(this._urlBarChart+'/'+destination);
    
    return this.http.get<any>(this._urlBarChart);
    // return this.http.get<any>(this._urlBarChart+'/'+destination);
  }

}
