import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppRoutes} from "./const/app-routes";
import * as views from "./views"
import PrivateRoute from "./modules/components/Router/PrivateRoute";
import UnauthenticatedRoute from "./modules/components/Router/UnauthenticatedRoute";
import {useSelector} from "react-redux";
import AppLayout from "./modules/layout/AppLayout";
import AuthLayout from "./modules/layout/AuthLayout";


const App = () => {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  // returns routes
  const generateRoutes = (routes) => {
    let generated_routes = [];
    for (const route in routes) {
      const {path, view, isPrivate} = routes[route];
      // views from view module
      const component = views[view];
      // all routes are here
      generated_routes.push(
        isPrivate ?
          <PrivateRoute path={`/${path}`} key={route} component={component}/>
          : <UnauthenticatedRoute path={`/${path}`} key={route} component={component}/>
      );
    }
    return generated_routes;
  }

  // wraps routes in two different layouts 
  const wrapLayout = () => {
    const generated_routes = generateRoutes(AppRoutes)
    const routesInSwitch = <Switch>
      {generated_routes}
      <Route path="*">
        Error Component
      </Route>
    </Switch>

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