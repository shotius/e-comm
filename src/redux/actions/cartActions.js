import {
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL
} from "../constants"


export const addToCartStart = () => ({
  type: ADD_TO_CART_START
})

export const addToCartSuccess = () => ({
  type: ADD_TO_CART_SUCCESS
})

export const addToCartFail = (error) => ({
  type: ADD_TO_CART_FAIL,
  error
})