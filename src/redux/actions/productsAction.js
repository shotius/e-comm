import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_SET_CATEGORY,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL
} from "../constants";
import axios from "axios";
import {notification} from "antd";

// const base_url = "http://localhost:3001/products"

export const deleteProduct = (id) => {
  return dispatch => {
    dispatch(deleteProductStart())
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
      .then(response => {
        dispatch(deleteProductSuccess())
        notification.success({
          message: 'The product was deleted'
        })
      })
      .catch(error =>{
        dispatch(deleteProductError(error))
        notification.error({
          message: 'Unable to delete product, please try again later!'
        })
      })
  }
}

const deleteProductStart = () => ({
  type: DELETE_PRODUCT_START
})

const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_FAIL,
  error
})

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS
})

export const fetchProducts = (category = "") => {
  let url = `${process.env.REACT_APP_BASE_URL}/products?_sort=id&_order=desc&`;
  if (category) {
    url += `category=${category}`;
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


