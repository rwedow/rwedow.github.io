import React, { Component } from "react";
import './App.css';
import {
  NavLink,
} from "react-router-dom";
 
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
            <NavLink to="/About" className="navItem">About</NavLink>
            <NavLink to="/resume" className="navItem">Resume</NavLink>
            <NavLink to="/portfolio" className="navItem">Portfolio</NavLink>
          </div>
        </header>
      </div>
    );
  }
}
 
export default Home;