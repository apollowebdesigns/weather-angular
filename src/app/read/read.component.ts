import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Weather } from './../models/weather.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  weathers: Observable<Weather[]>;

  constructor(private store: Store<AppState>) {
    this.weathers = store.select('weather');
  }

  ngOnInit() {
  }

}
