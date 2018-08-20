import { TestBed, inject } from '@angular/core/testing';
import {Injectable, Injector} from '@angular/core';


import AveragedataService from './averagedata.service';

describe('AveragedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveragedataService]
    });
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should be created', inject([AveragedataService], (service: AveragedataService) => {
    expect(service).toBeTruthy();
  }));
});
