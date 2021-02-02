import { FlightDataElement } from '../../doa/FlightDataElement';
import { TableApiService } from './../../services/tableApi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public originalData;
  public dataSource;
  public tableColumns = [
    'flightNo', 
    'flightDate', 
    'legNo', 
    'origin', 
    'destination', 
    'releaseNumber', 
    'releaseTime'
  ];
  public rowPerPage;
  public timeFilters;
  public isTableDataLoading:boolean;
  public isTableDataValid:boolean;
  public filterOrigin:string;
  public filterDestination:string;
  public filterStartDate:Date;
  public filterEndDate:Date;
  public filterFlightNo:string;
  public filterLegNo:string;

  constructor(private _tableService:TableApiService, private _snackBar: MatSnackBar) {
    this.rowPerPage = [5, 10, 20, 40, 80, 100]; // mat paginator

    this.timeFilters = [ 1, 3, 6, 12, 24 ]; // Last 'x' hours
    this.isTableDataLoading = true;
    this.isTableDataValid = false;
    this.filterStartDate = new Date();
    this.filterEndDate = new Date();
    this.filterDestination = "";
    this.filterOrigin = "";
    this.filterFlightNo = "";
    this.filterLegNo = "";
  }

  ngOnInit() {
    this.initTableData();
  }

  initTableData(){
    // var bb = this.validateFilterObject(); // under dev
    let filterObject = this.getFilterObject();
    const promise = this._tableService.getFlightTableData(filterObject).toPromise();
    promise.then(
      (data) => {
        this.resetTableData(data);
        this.isTableDataLoading = false;
        this.isTableDataValid = true;
      },
      (error) => { 
        console.log(error);
        this.isTableDataLoading = false;
        this.isTableDataValid = false;
      }
    );
  } // initTableDataEnd

  resetTableData(data:FlightDataElement[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  } // resetTableDataEnd

  getFormattedDate(date:Date):string{
    return date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate();
  }

  validateFilterObject(){ // under dev
    if(this.filterOrigin.match(/^[A-Z]+$/)){
      console.log("trigger");
      this._snackBar.open('Origin must contain only Alphabets!', 'close', {
        duration: 500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return false;
    }
    return true;
  }

  // Prepare filterObject for API Call
  getFilterObject(){
    return {
      "flightNo":this.filterFlightNo,
      "legNo": this.filterLegNo,
      "origin": this.filterOrigin,
      "destination":this.filterDestination,
      "startDate": this.getFormattedDate(this.filterStartDate),
      "endDate": this.getFormattedDate(this.filterEndDate)
    };
  }

  resetFilter(){
    this.filterOrigin = "";
    this.filterDestination = "";
    this.filterFlightNo = "";
    this.filterLegNo = "";
    this.filterStartDate = new Date();
    this.filterEndDate = new Date();
    // call iff filterObject is set
    this.initTableData();
  }

}