import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import Dashboard from "./views/Dashboard/Dashboard";
import SignIn from "./views/SignIn/SignIn";
import Home from "./views/Home/Home";
import {TodoApp} from "./views/TodoApp/TodoApp";
import GlobalStyle from "./GlobalStyles";


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={TodoApp} path="/todoapp" exact />
        </Switch>
    </Router>
    </>
    )
};
