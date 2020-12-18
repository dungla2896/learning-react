import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchMovieReducer } from './search-reducer';

const configMoviePersist = {
  key: 'search-movie',
  storage,
  whitelist: ['dataMovies','keywords'], // muon luu state gi cua reducer
  //blacklist: ['loading','error'] // khong can luu
}

const rootReducer = combineReducers({
  searchMovie: persistReducer(configMoviePersist, searchMovieReducer)
});
export default rootReducer;