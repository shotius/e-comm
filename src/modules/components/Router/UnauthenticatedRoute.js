import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const UnauthenticatedRoute = (props) => {
    const { component: Component, ...rest } = props;
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

    return <Route {...rest}>
      {() => {
        return isLoggedIn ? <Redirect to="/" /> : <Component />
      }}
    </Route>
}

export default UnauthenticatedRoute;