import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import ButtonComponent from './components/button';
import ResultComponent from './components/result';

const AppRedux = () => {
  return(
    <Provider store={store}>
      <ResultComponent/>
      <ButtonComponent type="increment"> + </ButtonComponent>
      <ButtonComponent type="decrement"> - </ButtonComponent>
    </Provider>
  )
}
export default React.memo(AppRedux);