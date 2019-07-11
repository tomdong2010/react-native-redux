import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

import App from './container/App';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
        /**
         * Provider这个模块是作为整个App的容器
         * 就是使得原组件变得可以接受Redux的store作为props.
         *
         * 在 Redux 应用中，只允许有一个 store 对象，
         * 管理应用的 state.可以理解为一个存放APP内所有组件的state的仓库.
         * 可以通过 combineReducers(reducers) ,
         * 来实现对 state 管理的逻辑划分（多个 reducer）。
         */
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
