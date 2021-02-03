import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
              display:false
          }
      }],
      yAxes: [{
          gridLines: {
              display:false
          }   
      }]
    }
  };

  @Input()
  public barChartLabels;
  public barChartType: ChartType ='horizontalBar';
  public barChartLegend = true;
  @Input()
  public barChartData: ChartDataSets[];
  public chartColors: Array<any>= [
    {
      backgroundColor: '#01BAEF',
      borderColor: 'rgba(225,255,255,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: 'orange',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];
  public showChart:boolean = false;

  constructor() { 
  }

  ngOnInit() {
    this.showChart = true;
  }

}
