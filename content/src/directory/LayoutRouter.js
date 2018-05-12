import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
//form the website layout here.
import Test from '../componenets/Test'

class LayoutRouter extends React.Component {
//   componentDidMount() {
//     require("../theme-scripts/app.config");
//     require("../theme-scripts/app");
//   }

  render() {
    return (
      <div className="wrapper">
        {/* <Header /> */}
    <Test/>
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
