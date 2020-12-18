import * as types from './types';

export const incrementCounter = (val) => ({
  type: types.INCREMENT_COUNTER,
  val
});

export const decrementCounter = (val) => ({
  type: types.DECREMENT_COUNTER,
  val
});