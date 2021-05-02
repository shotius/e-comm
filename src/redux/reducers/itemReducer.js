import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  OPEN_ADD_PRODUCT_MODAL, CLOSE_ADD_PRODUCT_MODAL, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL
} from "../constants";


const initState = {
  isModalOpen: false,
  addProductLoading: false,
  addProductError: null
}

export default function itemReducer(state=initState, action) {
  switch (action.type) {
    case DELETE_PRODUCT_START:
      return {
        ...state,
        deleteProductStart: true,
        deleteProductError: null
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteProductStart: false,
        deleteProductError: null
      }
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        deleteProductStart: false,
        deleteProductError: action.error
      }
    case OPEN_ADD_PRODUCT_MODAL:
      return {
        ...state,
        isModalOpen: true
      }
    case CLOSE_ADD_PRODUCT_MODAL:
      return {
        ...state,
        isModalOpen: false
      }
    case ADD_PRODUCT_START:
      return {
        ...state,
        addProductLoading: true,
        addProductError: null
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductLoading: false,
        addProductError: null
      }
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        addProductLoading: false,
        addProductError: action.error
      }
    default:
      return state;
  }
}