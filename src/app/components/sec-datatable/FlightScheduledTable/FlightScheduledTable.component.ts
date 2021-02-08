import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-FlightScheduledTable',
  templateUrl: './FlightScheduledTable.component.html',
  styleUrls: ['./FlightScheduledTable.component.css']
})
export class FlightScheduledTableComponent implements OnInit {
  @ViewChild(MatSort) sfsort: MatSort;
  @ViewChild(MatPaginator) sfpaginator: MatPaginator;

  @Input()
  public dataSource;
  public tableColumns = [
    'flightNo',
    'flightZDate',
    'legNo',
    'scheduledIn',
    'scheduledOut'
  ];

  @Input()
  public sfrowPerPage:number[];
  @Input()
  public sfisTableDataLoading:boolean;
  @Input()
  public sfisTableDataValid:boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
