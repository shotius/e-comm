import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_FETCH_SUCCESS,
  LOGOUT
} from "../constants";

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