import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Login isLogged={true} />} exact />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
