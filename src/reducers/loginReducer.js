'use strict';
import * as types from '../constants/loginTypes';

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
}
/**
 *
 * reducer就是迎接 action 函数返回的线索的 "数据 真·处理函数"，
 * action 是"预处理"。
 * 行为在被action分门别类以后,reducer根据数据的类型,
 * 去执行不同的处理过程并返回新的state.
 */
export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN_DOING:
      return {
        ...state,
        status: '正在登陆',
        isSuccess: false,
        user: null,
      }
      break;
    case types.LOGIN_IN_DONE:
      return {
        ...state,
        status: '登陆成功',
        isSuccess: true,
        user: action.user,
      }
      break;
    case types.LOGIN_IN_ERROR:
      return {
        ...state,
        status: '登录出错',
        isSuccess: true,
        user: null,
      }
      break;
    default:
      console.log(state);
      return state;
  }
}
