import { all, call } from 'redux-saga/effects';
import searchMovieSaga from './search-saga';

export default function* rootSaga(){
  yield all([
    call(searchMovieSaga),
    // neu co nhieu saga nua thi call o day
  ])
}