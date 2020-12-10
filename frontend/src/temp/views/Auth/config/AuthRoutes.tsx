import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SignUp, Login } from "../../Auth/components";
export const AuthRoutes = () => {
  return (
  <Switch>
    <Route exact={true}  path="/auth/login" component={Login} />
    <Route exact={true}  path="/auth/signup" component={SignUp} />
    <Redirect to="/auth/login" from="/auth" />
  </Switch>
)};