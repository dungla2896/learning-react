import { take, put, call, fork, cancel, cancelled, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from '../actions/index';
import * as types from '../actions/types';
import * as api from '../../../services/login_service';

function* logoutSaga(){
  try{
    yield put(actions.logoutSucess());
    yield put(actions.removeTokenLogin(null));
    yield put(push('./login'))
  }catch(err){
    console.log(err);
  }
}

function* loginSaga(user, pass) {
  try {
    yield put(actions.startLogin(true));
    const response = yield call(api.loginUser, user, pass);
    if(response.hasOwnProperty('code') && response['code'] === 200){
      yield put(actions.loginSuccess(response));
      //luu token
      yield put(actions.saveTokenLogin(response['token_user']));
      yield put(actions.startLogin(false));
      // quay vao trang home
      yield put(push('/home'));
    } else {
      yield put(actions.loginError('username or password invalid !'));
    }
  } catch (error) {
    //yield put(actions.loginError(error));
    yield put(actions.loginError('Co loi xay ra, vui long thu lai'));
  } finally {
    // khong the ket noi toi api
    if(yield cancelled()){
      yield put(actions.loginCancelled({
        cod: 500,
        message: 'Sync cancelled!'
      }))
    }
  }
}
export function* logoutSagaFlowing(){
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga)
}
export default function* loginSagaFlowing() {
  while(true) {
    // thuc su se theo doi loginSaga khi co action cua user va lay ra du lieu nguoi dung nhap 
    const { user, pass } = yield take(types.LOGIN_REQUEST);
    // re nhanh theo doi loginSaga
    const taskLogin = yield fork(loginSaga, user, pass);
    //  khi neu co hanh dong logout hoac la login error thi dung hanh dong login lai
    // lay ra hanh dong logout va login error
    const act = yield take([types.LOGOUT_REQUEST, types.LOGIN_ERROR]);
    if(act.type === types.LOGOUT_REQUEST || act.type === types.LOGIN_ERROR){
      yield put(actions.startLogin(false));
      // huy hanh dong login
      yield cancel(taskLogin);
      // xoa token
      yield put(actions.removeTokenLogin(null));
      // mac dinh quay ve trang login
      yield put(push('/login'));
    }

  }

}