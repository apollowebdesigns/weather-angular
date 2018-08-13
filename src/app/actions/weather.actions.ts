import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Weather } from './../models/weather.model';

export const ADD_WEATHER       = '[TUTORIAL] Add';
export const REMOVE_WEATHER    = '[TUTORIAL] Remove';

export class AddWeather implements Action {
    readonly type = ADD_WEATHER;

    constructor(public payload: Weather) {}
}

export class RemoveWeather implements Action {
    readonly type = REMOVE_WEATHER;

    constructor(public payload: number) {}
}

export type Actions = AddWeather | RemoveWeather;
