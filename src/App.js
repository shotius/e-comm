import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => {
  return <Router>
    <Switch>
      <Route path="/home">
        Home Page
      </Route>
      <Route path="/about">
        About Page
      </Route>
    </Switch>
  </Router>
}

export default App;