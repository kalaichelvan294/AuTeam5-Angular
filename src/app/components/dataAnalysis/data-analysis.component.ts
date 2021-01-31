import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent implements OnInit {

  public cards = [
    {
      cardTitle:"Domestic",
      cardHint:"last hour",
      cardIcon:"flight"
    },
    {
      cardTitle:"International",
      cardHint:"last hour",
      cardIcon:"flight_takeoff"
    },
    {
      cardTitle:"Iterations",
      cardHint:"last hour",
      cardIcon:"loop",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
