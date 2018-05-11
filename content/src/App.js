import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LayoutRouter from "./LayoutRouter";
// import UserSignUpForm from "./components/UserSignUpForm";
import Users from "./components/Users"

class App extends Component {
  render() {
    return(
    // <UserSignUpForm/>
    <Users/>
    )
  }
}

export default App;
