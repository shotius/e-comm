import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_FETCH_SUCCESS,
  LOGOUT
} from "../constants";

const base_url = "http://localhost:3001"

export const registerUser = (user) => {
  console.log('registering user', user)
  return dispatch => {
    axios
      .post(`http://localhost:3001/register`, user)
      .then(({data}) => console.log(data))
      .catch(error => console.log(error.message))
  }
}

export const loginUser = (user) => {
  return dispatch => {
    axios
      .post(`${base_url}/login`, user)
      .then(({data}) => console.log(data))
      .catch(err => console.log(err))
  }
}

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