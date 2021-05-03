import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_SET_CATEGORY
} from "../constants";
import axios from "axios";


export const fetchProducts = (category = "", filters=null) => {
  let url = `${process.env.REACT_APP_BASE_URL}/products?_sort=id&_order=desc`;
  if (category) {
    url += `&category=${category}`;
  }
  if (filters) {
    url += `&price_gte=${filters.price[0]}&price_lte=${filters.price[1]}`
  }

  return (dispatch) => {
    dispatch(fetchProductsStart())
    axios.get(url)
      .then(response => {
        console.log(response, 'response')
        dispatch(fetchProductsSuccess(response.data))
        // dispatch(setCurrentCategory(category));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      })
  }
}

export const setCurrentCategory = (category) => ({
  type: PRODUCTS_SET_CATEGORY,
  category
})

export const fetchProductsStart = () => ({
  type: PRODUCTS_FETCH_START
})

export const fetchProductsSuccess = (products) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  products
})

export const fetchProductsError = (error) => ({
  type: PRODUCTS_FETCH_FAIL,
  error
})


