import {
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL
} from "../constants"

const initState = {
  addToCartLoading: false,
  addToCartError: null,
  inCart: []
}

export default function cartReducer(state=initState, action) {
  switch (action.type) {
    case ADD_TO_CART_START:
      return {
        ...state,
        addToCartLoading: true,
        addToCartError: null
      }
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        addToCartError: null,
        addToCartLoading: false,
        inCart: action.data
      }
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        addToCartLoading: false,
        addToCartError: action.error
      }
    default:
      return state;
  }
}