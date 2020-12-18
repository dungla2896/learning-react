import * as types from '../actions/types';

// tao state mac dinh
const initState = {
  count: 0
}
export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {...state, count: action.val + 1}
    case types.DECREMENT_COUNTER:
      return {...state, count: action.val - 1}
    default:
      return state;
  }
}