import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as types from '../actions/types';
import * as api from '../../../services/apiv2';

function* getDataSaga() {
  try {
    yield put(actions.startGetData(true));
    const data = yield call(api.getDataProducts);
    if(data){
      yield put(actions.getDataSuccess(data));
    } else {
      yield put(actions.getDataFailure({
        cod: 404,
        message: 'Not found data'
      }));
    }
    yield put(actions.stopGetData(false));
  } catch (err) {
    yield put(actions.getDataFailure(err));
  }
}

export function* watchGetDataSaga() {
  yield takeEvery(types.GET_DATA_PRODUCTS, getDataSaga);
}