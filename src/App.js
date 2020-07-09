import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.js";
import ProjectDetails from "./components/projects/ProjectDetails";
import Signin from "./components/auth/Signin.js";
import Signup from "./components/auth/Signup.js";
import CreateProject from "./components/projects/CreateProject.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
