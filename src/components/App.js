import React from "react";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
