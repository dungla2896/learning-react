import * as typeAction from '../actions/types';

const initState = {
  count: 0
}

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case typeAction.INCREMENT_COUNTER:
      return {...state, count: action.val + 1}
    case typeAction.DECREMENT_COUNTER:
      return {...state, count: action.val - 1}
    default:
      return state;
  }
}