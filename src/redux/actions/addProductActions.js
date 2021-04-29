import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  OPEN_ADD_PRODUCT_MODAL, CLOSE_ADD_PRODUCT_MODAL
} from "../constants";
import axios from "axios";

const addProduct = (productInfo) => {
  return dispatch => {
    // dispatch(addProductStart());
    console.log('addProductAction')
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

