import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_SET_CATEGORY
} from "../constants";
import axios from "axios";

// const base_url = "http://localhost:3001/products"

export const fetchProducts = (category = "") => {
  let url = `${process.env.REACT_APP_BASE_URL}/products`;
  if (category) {
    url += `?category=${category}`;
  }
  return (dispatch) => {
    dispatch(fetchProductsStart())
    axios.get(url)
      .then(response => {
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


