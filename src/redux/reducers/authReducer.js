import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_ERROR_CLEAR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOG_OUT,
  LOGIN_ERROR_CLEAR,
  UPDATE_USER_DETAILS
} from "../constants";
import jwt from "jsonwebtoken"

const initState = {
  isLoggedIn: !!localStorage.token,
  loginError: false,
  user: localStorage.token ? jwt.decode(localStorage.token) : null,
  token: localStorage.token,
  expirationDate: localStorage.expirationDate,
  userRegisterLoading: false,
  userRegisterError: null,
  userLoginError: false,
  userLoginLoading: false,
  userDetails: null,
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
     /******************** LOGIN *****************/
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
        expirationDate: action.expirationDate,
        isLoggedIn: true,
        user: action.user
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        userLoginError: action.error,
        userLoginLoading: false,
        isLoggedIn: false,
        token: ""
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        user: null,
        userDetails: null,
      }
    case LOGIN_ERROR_CLEAR:
      return {
        ...state,
        userLoginError: null
      }
    /******************** REGISTER *****************/
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
    case REGISTER_ERROR_CLEAR:
      return {
        ...state,
        userRegisterError: null
      }
    case UPDATE_USER_DETAILS:
      return {
        ...state, 
        userDetails: action.user
      }
    default:
      return state;
  }

};