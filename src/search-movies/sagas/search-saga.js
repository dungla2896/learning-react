import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as actions from '../actions/index';
import * as api from '../services/api';

function* searchMovieSaga({ nameMovie, cPage }) {
  try {
    yield put(actions.startSearchMovie(true));
    const data = yield call(api.searchMovieByKeyword, nameMovie, cPage);
    if(data.results.length > 0) {
      data.keyword = nameMovie;
      yield put(actions.searchMovieSuccess(data));
    } else {
      yield put(actions.searchMovieFail({
        code : 404,
        message: "Not found data"
      }));
    }
    yield put(actions.stopSearchMovie(false));
  } catch (e) {
    yield put(actions.searchMovieFail(e));
  }
}

// theo doi action (ham ben tren no xu ly)
export default function* watchSearchMovieSaga(){
  yield takeLatest(types.SEARCH_MOVIES, searchMovieSaga);
}