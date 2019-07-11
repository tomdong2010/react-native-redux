'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

/**
 *
 *
 * 因为这个asyncSayActionCreator返回的不是一个action
 * ，而是一个function。这个返回值无法被reducer识别。
 * 这时候需要在action和reducer之间架起一座桥梁
 */
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store;
}
