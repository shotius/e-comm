import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  OPEN_ADD_PRODUCT_MODAL,
  CLOSE_ADD_PRODUCT_MODAL,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS
} from "../constants";
import axios from "axios";
import {notification} from "antd";

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
      .catch(error => {
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

export const addProduct = (productInfo) => {
  return dispatch => {
    dispatch(addProductStart())
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/products`, productInfo)
      .then(response => {
        dispatch(addProductSuccess())
      })
      .catch(error => {
        dispatch(addProductError(error));
      })
  }
}


const addProductStart = () => ({
  type: ADD_PRODUCT_START
})

const addProductSuccess = () => ({
  type: ADD_PRODUCT_SUCCESS
})

const addProductError = (error) => ({
  type: ADD_PRODUCT_FAIL,
  error
})

export const openAddProductModal = () => ({
  type: OPEN_ADD_PRODUCT_MODAL
})

export const closeAddProductModal = () => ({
  type: CLOSE_ADD_PRODUCT_MODAL
})

