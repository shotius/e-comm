import axios from "axios";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_FETCH_SUCCESS,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  START_REGISTER_USER,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../constants";

const base_url = "http://localhost:3001"

export const registerUser = (user, callback) => {
  return dispatch => {
    dispatch(userRegisterStart())
    axios
      .post(`http://localhost:3001/register`, user)
      .then(() => {
        dispatch(registerUserSuccess())
        callback()
      })
      .catch(error => dispatch(registerUserFail(error)))
  }
}

export const loginUser = (user) => {
  return dispatch => {
    dispatch(userLoginStart())
    axios
      .post(`${base_url}/login`, user)
      .then(() => {
        dispatch(userLoginSuccess())
      })
      .catch(error => dispatch(userLoginFail(error)))
  }
}

const userLoginStart = () => ({
  type: LOGIN_USER_START
})

const userLoginSuccess = () => ({
  type: LOGIN_USER_SUCCESS
})

const userLoginFail = (error) => ({
  type: LOGIN_USER_FAIL,
  error
})

const userRegisterStart = () => ({
  type: START_REGISTER_USER
})

const registerUserFail = (error) => ({
  type: REGISTER_USER_FAIL,
  error
})

const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginUserSuccess = () => ({
  type: LOGIN_SUCCESS
})

export const loginUserError = (error) => ({
  type: LOGIN_ERROR,
  error
})

export const logout = () => ({
  type: LOGOUT
})