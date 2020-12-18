import * as types from './types';

export const getData = () => ({
  type: types.GET_DATA_PRODUCTS
});

export const startGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading
});
export const stopGetData = (loading) => ({
  type: types.STOP_GET_DATA,
  loading
});
export const getDataSuccess = (products) => ({
  type: types.GET_DATA_SUCCESS,
  products
});
export const getDataFailure = (error) => ({
  type: types.GET_DATA_FAILURE,
  error
});