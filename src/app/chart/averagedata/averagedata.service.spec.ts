import { TestBed, inject } from '@angular/core/testing';

import AveragedataService from './averagedata.service';

describe('AveragedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveragedataService]
    });
  });

  it('should be created', inject([AveragedataService], (service: AveragedataService) => {
    expect(service).toBeTruthy();
  }));
});
