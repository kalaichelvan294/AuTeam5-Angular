import { FlightScheduledTableComponent } from './components/sec-datatable/FlightScheduledTable/FlightScheduledTable.component';
import { FlightReleasedTableComponent } from './components/sec-datatable/FlightReleasedTable/FlightReleasedTable.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { Card2Component } from './components/cards/card2/card2.component';
import { CardListComponent } from './components/sec-card-list/card-list.component';
import { DatatableComponent } from './components/sec-datatable/datatable.component';
import { CardComponent } from './components/cards/card/card.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataAnalysisComponent } from './components/dataAnalysis/data-analysis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardChartComponent } from './components/sec-card-chart/card-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DataAnalysisComponent,
    Card2Component,
    CardComponent,
    DatatableComponent,
    CardChartComponent,
    CardListComponent,
    BarChartComponent,
    FlightReleasedTableComponent,
    FlightScheduledTableComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
