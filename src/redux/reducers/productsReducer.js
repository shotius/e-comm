import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_SET_CATEGORY,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL
} from "../constants";

const initState = {
  products: [],
  productsFetchLoading: false,
  productsFetchError: null,
  currentCategory: "",
  deleteProductStart: false,
  deleteProductError: false
}

export default function productsReducer(state = initState, action) {
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
    case PRODUCTS_SET_CATEGORY:
      return {
        ...state,
        currentCategory: action.category
      }
    case PRODUCTS_FETCH_START:
      return {
        ...state,
        productsFetchLoading: true,
        productsFetchError: null
      }
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        productsFetchLoading: false,
        productsFetchError: null,
        products: action.products
      }
    case PRODUCTS_FETCH_FAIL:
      return {
        ...state,
        productsFetchLoading: false,
        productsFetchError: action.error
      }
    default:
      return state;
  }
}