import { createSelector } from 'reselect';

const movieSearchSelector = state => state.searchMovie;

export const resultMovieReselect = createSelector(
  movieSearchSelector,
  item => item.dataMovies.results
);
export const totalResults = createSelector(
  movieSearchSelector,
  item => item.dataMovies.total_results
);
export const totalPages = createSelector(
  movieSearchSelector,
  item => item.dataMovies.total_pages
);

export const loadingReselect = createSelector(
  movieSearchSelector,
  item => item.loading
)

export const nameMovieReselect = createSelector(
  movieSearchSelector,
  item => item.keywords
)
export const getCurrentPage = createSelector(
  movieSearchSelector,
  item => item.dataMovies.page
)