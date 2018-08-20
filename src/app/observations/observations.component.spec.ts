import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ObservationsComponent } from './observations.component';
import {Store, StoreModule} from '@ngrx/store';

describe('ObservationsComponent', () => {
  let component: ObservationsComponent;
  let fixture: ComponentFixture<ObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ObservationsComponent ],
      imports: [StoreModule.provideStore({ demoSlice })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
