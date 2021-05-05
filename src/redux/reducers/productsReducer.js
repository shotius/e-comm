import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_SET_CATEGORY,
  SET_TOTAL_COUNT
} from "../constants";

const initState = {
  products: [],
  productsFetchLoading: false,
  productsFetchError: null,
  currentCategory: "",
  deleteProductStart: false,
  deleteProductError: false,
  totalCount: 0
}

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count
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