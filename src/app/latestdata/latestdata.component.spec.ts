import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestdataComponent } from './latestdata.component';

describe('LatestdataComponent', () => {
  let component: LatestdataComponent;
  let fixture: ComponentFixture<LatestdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
