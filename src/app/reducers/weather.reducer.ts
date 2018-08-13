import { Action } from '@ngrx/store';
import { Weather } from './../models/weather.model';
import * as WeatherActions from './../actions/weather.actions';

const initialState: Weather = {
    temperature: '0',
    pressure: 'http://google.com',
    humidity: '9'
};

export function reducer(state: Weather[] = [initialState], action: WeatherActions.Actions) {

    switch (action.type) {
        case WeatherActions.ADD_WEATHER:
            return [...state, action.payload];
        default:
            return state;
    }
}
