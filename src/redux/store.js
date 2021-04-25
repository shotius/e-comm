import authReducer from "./reducers/authReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  authReducer
})

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  {},
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

);