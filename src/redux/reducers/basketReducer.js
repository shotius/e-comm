import {
    BASKET_ITEMS_GET_START,
    BASKET_ITEMS_GET_SUCCESS,
    BASKET_ITEMS_GET_FAIL
} from '../constants'

const initState = {
    products: [],
    basketItemsFetchLoading: false,
    baksetItemsFetchError: null
}

export default function basketReducer (state = initState, action) {
    switch(action.type) {
        case BASKET_ITEMS_GET_START:
      return {
        ...state,
        basketItemsFetchLoading: true,
        baksetItemsFetchError: null
      }
    case BASKET_ITEMS_GET_SUCCESS:
      return {
        ...state,
        basketItemsFetchLoading: false,
        baksetItemsFetchError: null,
        products: action.products
      } 
    case BASKET_ITEMS_GET_FAIL:
        return {
            ...state,
            basketItemsFetchLoading: false,
            baksetItemsFetchError: action.error    
        }
    default: 
        return state
    }
}