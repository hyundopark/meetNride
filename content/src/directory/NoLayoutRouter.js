import React from "react";
import { Route } from "react-router-dom";
import Register from "../components/Register"
import Login from "../components/Login";

const NoLayoutRouter = ({ match }) => {
  return (
    <React.Fragment>
      <div className="noLayout">
        <Route path={`${match.url}/register`} component={Register} />
        <Route path={`${match.url}/login`} component={Login} />
      </div>
    </React.Fragment>
  );
};

export default NoLayoutRouter;
