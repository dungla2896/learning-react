import * as types from './types';

export const addPdToCart = (id) => ({
  type: types.ADD_CART,
  id
});

export const startAddCart = (status) => ({
  type: types.START_ADD_CART,
  status
});
export const finishedAddCart = (status) => ({
  type: types.FINISH_ADD_CART,
  status
});
export const addCartSuccess = (data) => ({
  type: types.ADD_CART_SUCCESS,
  data
});
export const addCartFailure = (error) => ({
  type: types.ADD_CART_FAILURE,
  error
});

export const deleteItemCart = (id) => ({
  type: types.DELETE_ITEM_CART,
  id
});
export const changeQtyCart = (id, qty) => ({
  type: types.CHANGE_QTY_CART,
  id,
  qty
});