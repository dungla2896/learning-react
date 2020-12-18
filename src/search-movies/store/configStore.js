import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const configRootPersist = {
  key: 'root',
  storage,
  whitelist: ['searchMovie'] // name reducer trong combineReducers
}
const rootPersistReducer = persistReducer(configRootPersist, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const configStore = (loadState = {}) => {
  const store = createStore(
    rootPersistReducer,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
}
export default configStore;