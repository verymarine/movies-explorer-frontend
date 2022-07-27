import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "./Movies/Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
  if (props.loggedIn === undefined) {
    return <Preloader />;
  }

  return (
    <Route>
      {() => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;
