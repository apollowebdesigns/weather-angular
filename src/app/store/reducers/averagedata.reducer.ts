import * as fromAveragedata from '../actions/averagedata.action';
// import {Pizza} from "../../models/pizza.model";

export interface AveragedataState {
  data: any[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: AveragedataState = {
  data: [],
  loaded: false,
  loading: false
};


export function reducer(
  state = initialState,
  action: fromAveragedata.AveragedataAction
): any {

  switch (action.type) {
    case fromAveragedata.LOAD_OBSERVATIONS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAveragedata.LOAD_OBSERVATIONS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromAveragedata.LOAD_OBSERVATIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getAveragedataLoading = (state: AveragedataState) => state.loading;
export const getAveragedataLoaded = (state: AveragedataState) => state.loaded;
export const getAveragedata = (state: AveragedataState) => state.data;
