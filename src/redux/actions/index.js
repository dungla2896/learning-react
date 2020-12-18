import * as types from './types';

// dinh nghia hanh dong cua nguoi dung
export const incrementCounter = (val) => ({
  type: types.INCREMENT_COUNTER,
  val
});
export const decrementCounter = (val) => ({
  type: types.DECREMENT_COUNTER,
  val
})