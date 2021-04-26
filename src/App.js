import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
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
      const component = views[view];
      generated_routes.push(
        isPrivate ?
          <PrivateRoute path={`/${path}`} key={route}  component={component}/>
          : <UnauthenticatedRoute path={`/${path}`}  key={route} component={component}/>
      );
    }
    return generated_routes;
  }

  const wrapLayout = () => {
    const generated_routes = generateRoutes(AppRoutes)
    const mySwitch = <Switch>{generated_routes}</Switch>
    if (isLoggedIn) return <AppLayout>{mySwitch}</AppLayout>
    return <AuthLayout>{mySwitch}</AuthLayout>
  }


  return <Router>

    {wrapLayout()}

  </Router>
}

export default App;