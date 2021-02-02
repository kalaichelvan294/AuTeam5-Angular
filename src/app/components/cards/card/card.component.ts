import { CardApiService } from '../../../services/cardApi.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public card;

  constructor() { }
  
  ngOnInit() {
  }
}
