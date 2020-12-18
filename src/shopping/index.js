import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/store';
import { Skeleton, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router'
import {
  Switch,
  Route
} from "react-router-dom";

const { store, persistor, history } = configStore({});
const HomeComponent = lazy(() => import('./pages/home/index'));
const CartComponent = lazy(() => import('./pages/cart/index'));
const LoginComponent = lazy(() => import('./pages/login/index'));
const CheckOutComponent = lazy(() => import('./pages/checkout/index'));

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin />}
        persistor={persistor}
      >
        <ConnectedRouter history={history}>
          <Suspense
            fallback={<Skeleton active />}
          >
            <Switch>
              <Route path="/home">
                <HomeComponent/>
              </Route>
              <Route path="/cart">
                <CartComponent/>
              </Route>
              <Route path="/login">
                <LoginComponent/>
              </Route>
              <Route path="/checkout">
                <CheckOutComponent/>
              </Route>
              <Route exact path="/">
                <HomeComponent/>
              </Route>
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  )
}
export default ShoppingCart;