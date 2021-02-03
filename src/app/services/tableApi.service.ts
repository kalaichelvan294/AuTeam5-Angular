import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDataReleasedElement } from '../doa/FlightDataReleasedElement';
import { FlightDataScheduledElement } from '../doa/FlightDataScheduledElement';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  // dummy
  private _urlFlightReleasedTableData:string = "/assets/data/releasedTable.json";
  private _urlFlightScheduledTableData:string = "/assets/data/scheduledTable.json";

  // Original
  // private _urlFlightTableData:string = "/table/getData/"+filterObject;

  constructor(private http: HttpClient) { } 

  getFlightReleasedTableData(filterObject){
    // console.log(this._urlFlightTableData+'/'+filterObject);
    return this.http.get<FlightDataReleasedElement[]>(this._urlFlightReleasedTableData);
  }

  getFlightScheduledTableData(){
    // console.log(this._urlFlightTableData+'/'+filterObject);
    return this.http.get<FlightDataScheduledElement[]>(this._urlFlightScheduledTableData);
  }
  
}
