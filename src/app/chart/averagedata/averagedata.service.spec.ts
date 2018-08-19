import { TestBed, inject, MockBackend } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';

import AveragedataService from './averagedata.service';

describe('AveragedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveragedataService],
    { provide: XHRBackend, useClass: MockBackend }
    });
  });

  it('should be created', inject([AveragedataService], (service: AveragedataService) => {
    expect(service).toBeTruthy();
  }));
});
