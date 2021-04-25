import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppRoutes} from "./const/app-routes";
import * as views from "./views"
import PrivateRoute from "./modules/components/Router/PrivateRoute";
import UnauthenticatedRoute from "./modules/components/Router/UnauthenticatedRoute";


const App = () => {
  const generateRoutes = (routes) => {
    let generated_routes = [];
    for (const route in routes) {
      const {path, view, isPrivate} = routes[route];
      const component = views[view];
      generated_routes.push(isPrivate ?
        <PrivateRoute path={`/${path}`} key={route} component={component}/> : <UnauthenticatedRoute path={`/${path}`} key={route} component={component} />

      );
    }
    return generated_routes;
  }

  return <Router>
    <Switch>
      {generateRoutes(AppRoutes)}
      <Route path="*">
        Error Page
      </Route>
    </Switch>
  </Router>
}

export default App;