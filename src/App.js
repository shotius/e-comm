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

  const generateRoutes = (routes) => {
    let generated_routes = [];
    for (const route in routes) {
      const {path, view, isPrivate, exact} = routes[route];
      const component = views[view];
      generated_routes.push(
        isPrivate ?
        <PrivateRoute path={`/${path}`} key={route} exact={exact} component={component}/>
          : <UnauthenticatedRoute path={`/${path}`} exact={exact} key={route} component={component} />
      );
    }
    return generated_routes;
  }

  const wrapLayout = () => {
    const generated_routes = generateRoutes(AppRoutes)
    console.dir(generated_routes)
    // if (isLoggedIn) return <AppLayout>{generateRoutes(AppRoutes)}</AppLayout>
    // return <AuthLayout>{generateRoutes(AppRoutes)}</AuthLayout>
    return generated_routes
  }


  return <Router>
    <Switch>
      {wrapLayout()}
      <Route path="*">
        Error Page
      </Route>
    </Switch>
  </Router>
}

export default App;