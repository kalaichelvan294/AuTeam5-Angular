/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardTaskService } from './cardTask.service';

describe('Service: CardTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardTaskService]
    });
  });

  it('should ...', inject([CardTaskService], (service: CardTaskService) => {
    expect(service).toBeTruthy();
  }));
});
