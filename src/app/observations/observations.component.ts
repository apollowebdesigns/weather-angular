import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Weather } from './../models/weather.model';
import * as WeatherActions from './../actions/weather.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addWeather(temperature, pressure, humidity) {
    this.store.dispatch(new WeatherActions.AddWeather({temperature: temperature, pressure: pressure, humidity: humidity}));
  }

  ngOnInit() {
  }

}
