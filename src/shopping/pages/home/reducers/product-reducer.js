import * as types from '../actions/types';

const initState = {
  loadingPd: false,
  errorPd: null,
  dataProduct: []
}

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_GET_DATA:
      return {
        ...state,
        loadingPd: action.loading
      }
    case types.STOP_GET_DATA:
      return {...state, loadingPd: action.loading}
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        errorPd: null,
        dataProduct: action.products
      }
    case types.GET_DATA_FAILURE:
      return {...state, errorPd: action.error, dataProduct: []}
    default:
      return state;
  }
}