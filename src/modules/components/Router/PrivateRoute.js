import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = (props) => {
  const {component: Component, ...rest} = props;
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  return (
    <Route {...rest}>
      {() => {
        return isLoggedIn ? <Component /> : <Redirect to="/login" />
      }}
    </Route>
  )
}

export default PrivateRoute;