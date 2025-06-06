import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "../Resume";
import Portfolio from "../Portfolio"; 
import About from "./About";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;