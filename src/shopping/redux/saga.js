import { all, call } from 'redux-saga/effects';
import { watchGetDataSaga } from '../pages/home/saga/product-saga';
import cartSaga from '../pages/cart/saga/cart-saga';
import loginSaga from '../pages/login/saga/login-saga';
import { logoutSagaFlowing as logoutSaga} from '../pages/login/saga/login-saga';

export default function* rootSaga() {
  yield all([
    call(watchGetDataSaga),
    call(cartSaga),
    call(loginSaga),
    call(logoutSaga)
  ])
}