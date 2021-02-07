import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarChartApiService {

  // dummy url
  // public _urlBarChart = "/assets/data/barChartContent.json";

  // Original
  public _urlBarChart = "/card/getAlternateLocation/";

  constructor(private http: HttpClient) { }

  getBarChartContent(destination:string){
    // return this.http.get<any>(this._urlBarChart);

  return this.http.get(this._urlBarChart+destination)
    .pipe(
      map(
        (data:{count:string,location:string}[])=>{
          let chartLabels = [];
          let chartDataValues = [];
          data.forEach(i=>{
                chartLabels.push(i.location);
                chartDataValues.push(i.count);
          })
        return  {
          chartLabels ,
          chartDataValues
        };
        }
      )
    );


  }

}

