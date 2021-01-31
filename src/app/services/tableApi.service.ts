import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDataElement } from '../dataStructures/FlightDataElement';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  private _urlFlightTableData:string = "/assets/data/table.json";

  constructor(private http: HttpClient) { } 

  getFlightTableData(hr){
    console.log(this._urlFlightTableData+'/'+hr);
    return this.http.get<FlightDataElement[]>(this._urlFlightTableData);
  }
}
