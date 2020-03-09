import React from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./components/onboarding/Register.js";
import Login from "./components/onboarding/Login.js";

function App() {
  if (window.location.pathname === "/") return <Register />;
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
