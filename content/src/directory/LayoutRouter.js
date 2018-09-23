import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";
import Register from "../components/Register";
//form the website layout here.

class LayoutRouter extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="main" role="main">
            <Route exact path="/" component={Dashboard} />
            <Route path="/create-group" component={CreateGroup} />
            <Route path="/register" component={Register} />
        </div>
      </div>
    );
  }
}

export default LayoutRouter;
