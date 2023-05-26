import React from "react";
import Home from "./home";
import { Route, Switch } from "react-router";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
const App = () => {
  return (
    <>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login" component={Login}></Route> 
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route component={Error}></Route>
      </Switch>
  
      </>
  );
};

export default App; 