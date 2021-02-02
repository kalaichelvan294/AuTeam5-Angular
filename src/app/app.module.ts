import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { Card2Component } from './components/cards/card2/card2.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DatatableComponent } from './components/datatable/datatable.component';
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
import { CardChartComponent } from './components/card-chart/card-chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    DataAnalysisComponent,
    Card2Component,
    CardComponent,
    DatatableComponent,
    CardChartComponent,
    CardListComponent,
    BarChartComponent
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
    PlotlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
