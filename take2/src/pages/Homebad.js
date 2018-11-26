import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume"; 

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo SplashLogo">
            <div className="LogoShadow">
              RW
            </div>
            RW
          </div>
          <div className="App-NavBox">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
