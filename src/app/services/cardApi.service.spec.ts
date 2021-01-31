/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardApiService } from './cardApi.service';

describe('Service: CardApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardApiService]
    });
  });

  it('should ...', inject([CardApiService], (service: CardApiService) => {
    expect(service).toBeTruthy();
  }));
});
