import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  public graph = {
    data: [
        {  x: [2, 5, 10], y:['VMM','XAI', 'NSI'], type: 'bar', marker: {color: 'orange'} },
    ],
    layout: {width: '100%', height: '100%', title: ''}
  };

  constructor() { }

  ngOnInit() {
  }

}
