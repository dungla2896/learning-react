import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as types from '../actions/types';
import * as api from '../../../services/apiv2';

function* addCartSaga({ id }){
  try {
    yield put(actions.startAddCart(true));
    const response = yield call(api.getDataProductById, id);
    if(response){
      yield put(actions.addCartSuccess(response));
    } else {
      yield put(actions.addCartFailure({
        cod: 404,
        message: 'Not Found'
      }));
    }
    yield put(actions.finishedAddCart(true));
  } catch (e) {
    yield put(actions.addCartFailure(e));
  }
}

export default function* watchAddCartSaga(){
  yield takeEvery(types.ADD_CART, addCartSaga);
}