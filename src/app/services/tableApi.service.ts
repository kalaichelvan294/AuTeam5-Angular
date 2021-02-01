import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDataElement } from '../doa/FlightDataElement';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  // dummy
  private _urlFlightTableData:string = "/assets/data/table.json";

  // Original
  // private _urlFlightTableData:string = "/table/getData/"+filterObject;

  constructor(private http: HttpClient) { } 

  getFlightTableData(filterObject){
    console.log(this._urlFlightTableData+'/'+filterObject);
    return this.http.get<FlightDataElement[]>(this._urlFlightTableData);
  }
  
}
