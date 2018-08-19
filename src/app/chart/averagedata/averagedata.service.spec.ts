import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Injectable, Injector} from '@angular/core';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';

import AveragedataService from './averagedata.service';

describe('AveragedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveragedataService]
    });
    this.injector = Injector.create([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http
    ]);
    this.heroService = this.injector.get(HeroService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should be created', inject([AveragedataService], (service: AveragedataService) => {
    expect(service).toBeTruthy();
  }));
});
