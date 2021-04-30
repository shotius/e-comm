import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  OPEN_ADD_PRODUCT_MODAL, CLOSE_ADD_PRODUCT_MODAL
} from "../constants";
import axios from "axios";

export const addProduct = (productInfo) => {
  return dispatch => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/products`, productInfo)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
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

