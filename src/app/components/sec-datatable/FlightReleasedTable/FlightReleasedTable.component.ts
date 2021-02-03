import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-FlightReleasedTable',
  templateUrl: './FlightReleasedTable.component.html',
  styleUrls: ['./FlightReleasedTable.component.css']
})
export class FlightReleasedTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input()
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
  @Input()
  public rowPerPage;
  @Input()
  public timeFilters;
  @Input()
  public isTableDataLoading:boolean;
  @Input()
  public isTableDataValid:boolean;

  constructor() {
   }

  ngOnInit() {
  }

  getFormattedDate(date:Date):string{
    return date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate();
  }

}
