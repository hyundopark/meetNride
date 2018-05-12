import React from "react";
import { Route } from "react-router-dom";
// import Register from "../containers/Register";
// import Login from "../containers/Login";

const NoLayoutRouter = ({ match }) => {
   return (
      <React.Fragment>
          <div>
              wtf
              </div>
             {/* <Route path={`${match.url}/register`} component={Register} />
             <Route path={`${match.url}/login`} component={Login} /> */}
      </React.Fragment>
   );
};

export default NoLayoutRouter;
