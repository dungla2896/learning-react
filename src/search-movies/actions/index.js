import * as types from './types';

// dinh nghia cac action
export const searchMovie = (nameMovie, cPage = 1) => ({
  type: types.SEARCH_MOVIES,
  nameMovie,
  cPage
});

// dinh nghia cac action cua redux-saga
export const startSearchMovie = (loading) => ({
  type: types.START_SEARCH_MOVIES,
  loading
});
export const stopSearchMovie = (loading) => ({
  type: types.END_SEARCH_MOVIES,
  loading
});
export const searchMovieSuccess = (movies) => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  movies
});
export const searchMovieFail = (error) => ({
  type: types.SEARCH_MOVIES_FAIL,
  error
});