import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as averagedataActions from '../actions/averagedata.action';
import { of } from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import * as averageDataService from '../../chart/averagedata/averagedata.service';

@Injectable()
export class AveragedataEffects {
  constructor(
    private actions$: Actions,
    private averagedataService: averageDataService.default
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(averagedataActions.LOAD_OBSERVATIONS)
    .pipe(
      switchMap(() => {
        return this.averagedataService.getAverageData().pipe(
          map(averagedata => new averagedataActions.LoadObservationsSuccess(averagedata)),
          catchError(error => of(new averagedataActions.LoadObservationsFail(error)))
        );
      }));
}
