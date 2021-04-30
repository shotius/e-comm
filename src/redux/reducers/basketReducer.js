import {
    BASKET_ITEMS_GET_START,
    BASKET_ITEMS_GET_SUCCESS,
    BASKET_ITEMS_GET_FAIL,
    BASKET_ITEM_DELETE_START,
    BASKET_ITEM_DELETE_SUCCESS,
    BASKET_ITEM_DELETE_FAIL
} from '../constants'

const initState = {
    products: [],
    basketItemsFetchLoading: false,
    baksetItemsFetchError: null,
    basketItemDeleteLoading: false,
    basketItemDeleteError: null,
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
    case BASKET_ITEM_DELETE_START: 
        return {
          ...state, 
          basketItemDeleteLoading: true,
          basketItemDeleteError: null
        }
    case BASKET_ITEM_DELETE_SUCCESS:
        return {
          ...state,
          basketItemDeleteError: null,
          basketItemDeleteLoading: false
        }
    case  BASKET_ITEM_DELETE_FAIL:
        return {
          ...state,
          basketItemDeleteLoading: false,
          basketItemDeleteError: action.error
        }
    default: 
        return state
    }
}