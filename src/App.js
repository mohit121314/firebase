import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Data from "./Data";
import Form from "./Form";
import Addlead from "./Addlead";


export default class App extends Component {
  render() {
    return (

      <Router>
        <Route exact path="/" component={Data} />
        <Route exact path="/data/:id?" component={Form} render={props => <Form {...props} />} />
        <Route exact path="/form" component={Addlead} />
      </Router>

    );
  }
}
