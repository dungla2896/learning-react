import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './store/configStore';
import AppMovie from './pages/movie';
import { Spin } from 'antd';

const { store, persistor } = configStore({});

const Movies = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin/>}
        persistor={persistor}
      >
        <AppMovie />
      </PersistGate>
    </Provider>
  )
}
export default Movies;