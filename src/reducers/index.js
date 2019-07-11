'use strict';

import { combineReducers } from 'redux';
import loginIn from './loginReducer';
import counter from './counterReducer';

/**
 *可以通过 combineReducers(reducers) ,
 * 来实现对 state 管理的逻辑划分（多个 reducer）。
 */
const rootReducer = combineReducers({
  loginIn: loginIn,
  counter: counter,
});

export default rootReducer;
