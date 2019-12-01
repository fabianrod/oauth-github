import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import Github from '../../containers/Github';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/github" component={Github} />
      </Switch>
    </Router>
  );
}

export default App;
