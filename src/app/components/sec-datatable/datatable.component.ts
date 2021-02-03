import { FlightScheduledTableComponent } from './FlightScheduledTable/FlightScheduledTable.component';
import { FlightReleasedTableComponent } from './FlightReleasedTable/FlightReleasedTable.component';
import { TableApiService } from './../../services/tableApi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {style, animate, transition, trigger} from '@angular/animations';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate('600ms ease-in', style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('600ms ease-in', style({opacity:0})) 
      ])
    ])
  ]
})
export class DatatableComponent implements OnInit {


  // View childs of sub table components to set pagination and sorting to data source from here
  @ViewChild(FlightReleasedTableComponent) releasedTableChild: FlightReleasedTableComponent;
  @ViewChild(FlightScheduledTableComponent) scheduledTableChild: FlightScheduledTableComponent;
  @ViewChild('tabGroup') tabGroup;

  public dataSource = [];
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
  
  public isTableDataLoading:boolean[];
  public isTableDataValid:boolean[];

  public showFilter:boolean = true;
  public filterOrigin:string;
  public filterDestination:string;
  public filterStartDate:Date;
  public filterEndDate:Date;
  public filterFlightNo:string;
  public filterLegNo:string;

  constructor(private _tableService:TableApiService) {
    this.rowPerPage = [5, 10, 20, 40, 80, 100]; // mat paginator
    this.filterStartDate = new Date();
    this.filterEndDate = new Date();
    this.filterDestination = "";
    this.filterOrigin = "";
    this.filterFlightNo = "";
    this.filterLegNo = "";
    this.isTableDataLoading = [true, true];
    this.isTableDataValid = [false, false];
  }

  ngOnInit() {
    // Initialize only table 1 with table index
    this.initTableData(0);
  }

  initTableData(id){
    let promise;
    let filterObject;
    switch(id){
      case 0:
        filterObject = this.getFilterObject();
        promise = this._tableService.getFlightReleasedTableData(filterObject).toPromise();
        break;
      case 1:
        promise = this._tableService.getFlightScheduledTableData().toPromise();
        break;
      default:
        filterObject = this.getFilterObject();
        promise = this._tableService.getFlightReleasedTableData(filterObject).toPromise();
        break;
    }
    promise.then(
      (data) => {
        this.resetTableData(data, id);
        this.isTableDataLoading[id] = false;
        this.isTableDataValid[id] = true;
      },
      (error) => { 
        console.log(error);
        this.isTableDataLoading[id] = false;
        this.isTableDataValid[id] = false;
      }
    );
  }

  resetTableData(data, id:number){
    this.dataSource[id] = new MatTableDataSource(data);
    if(id==0){
      this.dataSource[id].sort = this.releasedTableChild.sort;
      this.dataSource[id].paginator = this.releasedTableChild.paginator;
    }else if(id==1){
      this.dataSource[id].sort = this.scheduledTableChild.sort;
      this.dataSource[id].paginator = this.scheduledTableChild.paginator;
    }
  } // resetTableDataEnd

  getFormattedDate(date:Date):string{
    return date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate();
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

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    switch(tabChangeEvent.index){
      case 0:
        this.showFilter = true;
        this.initTableData(0);
        break;
      case 1:
        this.showFilter = false;
        this.initTableData(1);
        break;
      default:
        this.showFilter = true;
        break;
    }
  }

  resetFilter(){
    this.filterOrigin = "";
    this.filterDestination = "";
    this.filterFlightNo = "";
    this.filterLegNo = "";
    this.filterStartDate = new Date();
    this.filterEndDate = new Date();
    // call iff filterObject is set
    this.initTableData(0);
  }

}