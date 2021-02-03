import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-FlightScheduledTable',
  templateUrl: './FlightScheduledTable.component.html',
  styleUrls: ['./FlightScheduledTable.component.css']
})
export class FlightScheduledTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input()
  public dataSource;
  public tableColumns = [
    'flightNo', 
    'flightDate', 
    'legNo', 
    'scheduledIn',
    'scheduledOut'
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
