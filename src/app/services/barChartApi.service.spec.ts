/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarChartApiService } from './barChartApi.service';

describe('Service: BarChartApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarChartApiService]
    });
  });

  it('should ...', inject([BarChartApiService], (service: BarChartApiService) => {
    expect(service).toBeTruthy();
  }));
});
