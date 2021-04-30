import {
    BASKET_ITEMS_GET_START,
    BASKET_ITEMS_GET_SUCCESS,
    BASKET_ITEMS_GET_FAIL,
} from '../constants'
import axios from "axios";


export const fetchBasketProducts = () => {
    return dispatch => {
      dispatch(fetchBasketItemsStart())
      axios.get(`${process.env.REACT_APP_BASE_URL}/basket`)
        .then(({data}) => dispatch(fetchBasketItemsSuccess(data)))
        .catch(error => dispatch(fetchBasketItemsError(error)))
    }
  }
  
  const fetchBasketItemsStart = () => ({
    type: BASKET_ITEMS_GET_START
  })
  
  const fetchBasketItemsSuccess = (products) => ({
    type: BASKET_ITEMS_GET_SUCCESS,
    products
  })

  const fetchBasketItemsError = (error) => ({
      type: BASKET_ITEMS_GET_FAIL,
      error
  })