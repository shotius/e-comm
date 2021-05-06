import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppRoutes} from "./const/app-routes";
import * as views from "./views"
import PrivateRoute from "./modules/components/Router/PrivateRoute";
import UnauthenticatedRoute from "./modules/components/Router/UnauthenticatedRoute";
import {useSelector} from "react-redux";
import AppLayout from "./modules/layout/AppLayout";
import AuthLayout from "./modules/layout/AuthLayout";
import Error from "./views/Error";


const App = () => {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const role = useSelector(state => state.authReducer.role)

  
  // return all routes then does not have any permission
  // and return routes that match client role
  const getAllowedRoutes = (routes) => {
    return  routes.filter(({ permission }) => {
        if (!permission) return true
        else if (permission === role) return true
    })
}

  // returns routes
  const generateRoutes = (routes) => {
    return routes.map(route => {
      const {path, view, isPrivate, exact} = route
      // views from view module
      const component = views[view];
      if (isPrivate) {
        return <PrivateRoute path={`/${path}`} exact={exact} key={route} component={component}/>
      } else {
        return <UnauthenticatedRoute path={`/${path}`} exact={exact} key={route} component={component}/>
      }
    })
  }

  // wraps routes in two different layouts 
  const wrapLayout = () => {
    const allowedRoutes = getAllowedRoutes(AppRoutes)
    // all routes are wrapped in switch
    const routesInSwitch = (
      <Switch>
        {generateRoutes(allowedRoutes)}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    )

    if (isLoggedIn)
      return (
        <AppLayout>{routesInSwitch}</AppLayout>
      )
    return (
      <AuthLayout>{routesInSwitch}</AuthLayout>
    )
  }


  return (
    <Router>
      {wrapLayout()}
    </Router>
  )
}

export default App;