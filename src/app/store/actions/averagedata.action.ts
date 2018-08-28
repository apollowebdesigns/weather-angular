import { Action } from '@ngrx/store';
// import { Pizza } from "../../models/pizza.model";

// load averagedata
export const LOAD_OBSERVATIONS = '[Products] Load Observations';
export const LOAD_OBSERVATIONS_FAIL = '[Products] Load Observations Fail';
export const LOAD_OBSERVATIONS_SUCCESS = '[Products] Load Observations Success';

export class LoadObservations implements Action {
  readonly type = LOAD_OBSERVATIONS;
}

export class LoadObservationsFail implements Action {
  readonly type = LOAD_OBSERVATIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadObservationsSuccess implements Action {
  readonly type = LOAD_OBSERVATIONS_SUCCESS;
  constructor(public payload: any) {}
}


// action types
export type AveragedataAction = LoadObservations | LoadObservationsFail | LoadObservationsSuccess;
