import authReducer from "./reducers/authReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  authReducer
})

const enhancer = applyMiddleware(thunk)
export default createStore(rootReducer, composeWithDevTools(enhancer));