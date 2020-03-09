import React from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./components/onboarding/Register.js";
import Login from "./components/onboarding/Login.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
