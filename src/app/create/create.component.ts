import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Weather } from './../models/weather.model';
import * as WeatherActions from './../actions/weather.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(temperature, pressure, humidity) {
    this.store.dispatch(new WeatherActions.AddWeather({temperature: temperature, pressure: pressure, humidity: humidity}));
  }

  ngOnInit() {
  }

}
