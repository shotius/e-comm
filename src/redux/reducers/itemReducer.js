import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  OPEN_ADD_PRODUCT_MODAL,
  CLOSE_ADD_PRODUCT_MODAL,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  SET_NOW_EDITING
} from "../constants";


const initState = {
  isModalOpen: false,
  addProductLoading: false,
  addProductError: null,
  editProductLoading: false,
  editProductError: null,
  nowEditing: null,
}

export default function itemReducer(state = initState, action) {
  switch (action.type) {
    case SET_NOW_EDITING:
      return {
        ...state,
        nowEditing: action.product
      }
    case EDIT_PRODUCT_START:
      return {
        ...state,
        editProductLoading: true,
        editProductError: null
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProductLoading: false,
        editProductError: null,
        nowEditing: null
      }
    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        editProductLoading: false,
        editProductError: action.error,
        nowEditing: null
      }
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