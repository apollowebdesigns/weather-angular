import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAveragedata from './averagedata.reducer';

export interface ProductsState {
  averagedata: fromAveragedata.AveragedataState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  averagedata: fromAveragedata.reducer
};


export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// pizzas state
export const getAveragedataState = createSelector(
  getProductsState,
  (state: ProductsState) => state.averagedata
);


export const getAllAveragedata = createSelector(getAveragedataState, fromAveragedata.getAveragedata);
export const getAllAveragedataLoaded = createSelector(getAveragedataState, fromAveragedata.getAveragedataLoaded);
export const getAllAveragedataLoading = createSelector(getAveragedataState, fromAveragedata.getAveragedataLoading);
