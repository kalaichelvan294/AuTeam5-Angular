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
  myControl = new FormControl();
  public filteredOptions: Observable<string[]>;
  public options:string[] = ['VMM', 'HIS', 'VVA', 'PSY', 'KUS', 'KAS'];

  constructor(private _barChartService: BarChartApiService, private _cardService: CardApiService) { 
    this.getBarChartData();
    this.initCardContent();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe( startWith(''), map(value => this._filter(value)) );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getAlternates(dest){
    this.destination = dest;
    this.getBarChartData();
  }

  getBarChartData(){
    let promise = this._barChartService.getBarChartContent(this.destination).toPromise();
    promise.then( 
      (cdata) => {
        this.chartData = [{ data: cdata["chartDataValues"], label: this.destination }];
        this.chartLabels = cdata["chartLabels"];
        if(this.chartLabels.length<=0){
          this.isChartValid = false;
        }else{
          this.isChartValid = true;
        }
        this.isChartLoading = false;
        // console.log("load completed: ",this.isChartLoading, this.chartData);
      },
      (error) => {
        console.log("card data Fetch error:"+error);
        this.isChartValid = false;
        this.isChartLoading = false;
        // console.log("error load completed: ",this.isChartLoading, this.chartData);
      }
    );
  }

  initCardContent(){
    let promise = this._cardService.getCard2Content().toPromise();
    promise.then( 
      (data) => {
        // console.log(data);
        Object.entries(data).map((key, i)=> { this.assignCount(key[0], key[1]); });
        this.assignDefault();
      },
      (error) => {
        console.log("card data Fetch error:"+error);
        this.assignDefault();
      }
    );
  } // initCardContentEnd
  
  // Assign card data counts with cardId and cardDataId
  assignCount(cardId:string, count:number){
    for(let i=0; i < this.cardData.length; i++ ){
      if(this.cardData[i].cardDataId == cardId){
        this.cardData[i].cardContent = count.toString();
        break;
      }
    }
  }
  
  // Assign remaining card data counts to 0 to stop loading
  assignDefault(){
    for(let i=0; i < this.cardData.length; i++ ){
      if(this.cardData[i].cardContent == '-1'){ this.cardData[i].cardContent = '0'; }
    }
  }


}
