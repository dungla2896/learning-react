import { combineReducers } from 'redux';
import { productReducer } from '../pages/home/reducers/product-reducer';
import { cartReducer } from '../pages/cart/reducers/cart-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { connectRouter } from 'connected-react-router';
import { loginReducer } from '../pages/login/reducers/login-reducer';//../pages/login/reducers/login-reducer
import { tokenReducer } from '../pages/login/reducers/token-reducer';

const configPersistToken = {
  key: 'token-persist',
  storage,
  whitelist:['token'],
}
const configPersistCart = {
  key: 'cart-persist',
  storage,
  whitelist:['cartItems','sumMoney','countItem']
}


const rootReducer = (history) => combineReducers({
  productReducer,
  cartReducer: persistReducer(configPersistCart, cartReducer),
  router: connectRouter(history),
  auth: persistReducer(configPersistToken, tokenReducer),
  login: loginReducer,
});
export default rootReducer;