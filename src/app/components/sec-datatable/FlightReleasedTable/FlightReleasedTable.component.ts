import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-FlightReleasedTable',
  templateUrl: './FlightReleasedTable.component.html',
  styleUrls: ['./FlightReleasedTable.component.css']
})
export class FlightReleasedTableComponent implements OnInit {

  @ViewChild(MatSort) rfsort: MatSort;
  @ViewChild(MatPaginator) rfpaginator: MatPaginator;
  
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
  public rfrowPerPage:number[];
  @Input()
  public rfisTableDataLoading:boolean;
  @Input()
  public rfisTableDataValid:boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
