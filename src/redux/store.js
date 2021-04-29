import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
  cartReducer
})

const enhancer = applyMiddleware(thunk)
export default createStore(rootReducer, composeWithDevTools(enhancer));