/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableApiService } from './tableApi.service';

describe('Service: TableApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableApiService]
    });
  });

  it('should ...', inject([TableApiService], (service: TableApiService) => {
    expect(service).toBeTruthy();
  }));
});
