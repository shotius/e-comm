import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOG_OUT
} from "../constants";

// const initState = {
//   isLoggedIn: !!localStorage.token,
//   token: localStorage.token,
//   expirationDate: localStorage.expirationDate,
//   idToken: null,
//   loginError: false,
//   loginLoading: true,
//   user: null,
//   userLoading: true
// }

const initState = {
  isLoggedIn: false,
  token: "",
  expirationDate: 0,
  loginError: false,
  loginLoading: true,
  user: null,
  userLoading: true,
  userRegisterLoading: false,
  userRegisterError: null,
  expiraitondate: null,
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginError: false,
        loginLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: true,
        expirationDate: action.expirationDate,
        token: action.token
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
        loginLoading: false
      }
    case LOGOUT:
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: false
      }
    case REGISTER_USER_START:
      return {
        ...state, 
        userRegisterLoading: true,
        userRegisterError: null
      }
    case REGISTER_USER_SUCCESS: 
      return {
        ...state, 
        userRegisterLoading: false,
        userRegisterError: null
      }
    case REGISTER_USER_FAIL:
      return {
        ...state,
        userRegisterError: action.error,
        userRegisterLoading: false
      }
    case LOGIN_USER_START:
      return {
        ...state, 
        userLoginError: null,
        userLoginLoading: true
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userLoginLoading: true,
        userLoginError: null,
        token: action.token,
        expirationDate: action.expirationDate
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        userLoginError: action.error,
        userLoginLoading: false
      }
    case LOG_OUT:
      return {
        ...state
        // need to fill out
      }
    default:
      return state;
  }

};