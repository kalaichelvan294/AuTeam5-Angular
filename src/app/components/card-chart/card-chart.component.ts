import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit {

  public cardData= [
    {
    cardTitle:"Departing within 1 hr",
    cardDataId : "deprt1hr",
    cardContent:123,
    cardIcon:"flight"
    },
    {
      cardTitle:"Departing within 2 hrs",
      cardDataId : "deprt2hr",
      cardContent:123,
      cardIcon:"flight"
    }
  ];

  public destination:string;

  constructor() { }

  ngOnInit() {
  }

}
