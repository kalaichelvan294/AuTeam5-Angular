import { CardTaskService } from './../../services/cardTask.service';
import { CardApiService } from 'src/app/services/cardApi.service';
import { BarChartApiService } from '../../services/barChartApi.service';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit {

  @Output()
  public cardData= [
    {
    cardTitle:"Departing within 1 hr",
    cardDataId : "depart1hr",
    cardContent:"-1",
    cardIcon:"flight"
    },
    {
      cardTitle:"Departing within 2 hrs",
      cardDataId : "depart2hr",
      cardContent:"-1",
      cardIcon:"flight"
    }
  ];
  public destination:string="";
  @Output()
  public chartLabels;
  @Output()
  public chartData;
  public isChartLoading = true;
  public isChartValid = false;
  barInputControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  public options:string[] = ['KAL', 'HIS', 'VVA', 'PSY', 'KUS', 'KAS'];

  constructor(
    private _barChartService: BarChartApiService, 
    private _cardService: CardApiService,
    private _cardTask: CardTaskService) { 
    this.getBarChartData();
    this.initCardContent();
  }

  ngOnInit() {
    this.barInputControl.setValue( this.options[0] );
    this.getAlternates( this.options[0] );
    this.filteredOptions = this.barInputControl.valueChanges
      .pipe( startWith(''), map(value => this._filter(value)) );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // Triggers when destination changed in barchart input
  getAlternates(dest){
    this.destination = dest;
    this.getBarChartData();
  }

  // call api for bar chart data
  getBarChartData(){
    this._barChartService.getBarChartContent(this.destination).subscribe(
      (cdata) => {
        this.chartData = [{ data: cdata["chartDataValues"], label: this.destination }];
        this.chartLabels = cdata["chartLabels"];
        if(this.chartLabels.length<=0){
          this.isChartValid = false;
        }else{
          this.isChartValid = true;
        }
        this.isChartLoading = false;
      },
      (error) => {
        console.log("card data Fetch error:"+error);
        this.isChartValid = false;
        this.isChartLoading = false;
      }
    );
  }

  // Initialize card data on page load
  initCardContent(){
    this._cardService.getCard2Content().subscribe(
      (data) => {
        Object.keys(data).forEach(key => { this._cardTask.assignCount(this.cardData, key, data[key]); });
        this._cardTask.assignDefault(this.cardData);
      },
      (error) => {
        console.log("card data Fetch error:"+error);
        this._cardTask.assignDefault(this.cardData);
      }
    );
  } // initCardContentEnd

}
