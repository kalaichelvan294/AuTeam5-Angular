import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDataReleasedElement } from '../models/FlightDataReleasedElement';
import { FlightDataScheduledElement } from '../models/FlightDataScheduledElement';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  // dummy
  // private _urlFlightReleasedTableData:string = "/assets/data/releasedTable.json";
  // private _urlFlightScheduledTableData:string = "/assets/data/scheduledTable.json";

  // Original
  private _urlFlightReleasedTableData:string = "/table/getFilterData";
  private _urlFlightScheduledTableData:string = "/table/getNotReleasedData";

  constructor(private http: HttpClient) { }

  getFlightReleasedTableData(filterObject){
    // console.log(this._urlFlightTableData+'/'+filterObject);
    return this.http.post<FlightDataReleasedElement[]>(this._urlFlightReleasedTableData,filterObject);
  }

  getFlightScheduledTableData(){
    // console.log(this._urlFlightTableData+'/'+filterObject);
    return this.http.get<FlightDataScheduledElement[]>(this._urlFlightScheduledTableData);
  }

}
