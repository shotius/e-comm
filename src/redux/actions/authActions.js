import axios from "axios";
import moment from "moment";
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
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
  LOG_OUT,
} from "../constants";
import {notification} from "antd";

const base_url = "http://localhost:3001";
let expirationTimeout = null;

export const registerUser = (user, callback) => {
  return (dispatch) => {
    dispatch(userRegisterStart());
    return axios
      .post(`http://localhost:3001/register`, user)
      .then(() => {
        dispatch(registerUserSuccess());
        callback();
      })
      .catch((error) => {
        dispatch(registerUserFail(error));
      })
  };
};

export const loginUser = (user, callback) => {
  return (dispatch) => {
    dispatch(userLoginStart());
    axios
      .post(`${base_url}/login`, user)
      .then(({ data }) => {
        dispatch(userLoginSuccess(data.accessToken));
        // callback()
      })
      .catch((error) => {
        dispatch(userLoginFail(error));
        // callback()
      });
  };
};
export const logOut = () => {
  return (dispatch) => {
    window.localStorage.clear();
    dispatch({
      type: LOG_OUT,
    });
  };
};

const userLoginStart = () => ({
  type: LOGIN_USER_START,
});

const userLoginSuccess = (token) => {
  return (dispatch) => {
    const expirationTime = 1000 * 60 * 60; // one hour
    const expirationDate = moment().valueOf() + expirationTime;

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("expirationDate", expirationDate);

    // log out user after one hour
    clearTimeout(expirationTimeout);
    expirationTimeout = setTimeout(() => {
      dispatch(logOut());
    }, expirationTime);

    // send token and expiration date to redux
    dispatch({
      type: LOGIN_USER_SUCCESS,
      token: token,
      expirationDate: expirationDate,
    });
  };
};

const userLoginFail = (error) => ({
  type: LOGIN_USER_FAIL,
  error,
});

const userRegisterStart = () => ({
  type: REGISTER_USER_START,
});

const registerUserFail = (error) => ({
  type: REGISTER_USER_FAIL,
  error,
});

const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginUserSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginUserError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});
