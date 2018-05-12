import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
//form the website layout here.

class LayoutRouter extends React.Component {
//   componentDidMount() {
//     require("../theme-scripts/app.config");
//     require("../theme-scripts/app");
//   }

  render() {
    return (
      <div className="wrapper">
        <Header />
    
        <div id="main" role="main">
          <React.Fragment>
            <Route exact path="/" component={Dashboard} />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default LayoutRouter;
