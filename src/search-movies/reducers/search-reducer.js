import * as types from '../actions/types';

const initState = {
  loading: false,
  dataMovies: [],
  error: null,
  keywords: ''
}

export const searchMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_SEARCH_MOVIES:
      return {...state, loading: action.loading}
    case types.END_SEARCH_MOVIES:
      return {...state, loading: action.loading}
    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        dataMovies: action.movies,
        error: null,
        keywords: action.movies.keyword
      }
    case types.SEARCH_MOVIES_FAIL:
      return {...state, dataMovies: [], error: action.error}
    default:
      return state;
  }
}