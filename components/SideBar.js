import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom"; 

class SideBar extends Component {
  render() {
    return (
      <header className="App-header pageNav">
        <div className="Logo SplashLogo faded">
          <div className="LogoShadow">
            RW
          </div>
          RW
        </div>
        <div className="App-NavBox">
          <NavLink to="/about" className="navItem">About</NavLink>
          <NavLink to="/resume" className="navItem">Resume</NavLink>
          <NavLink to="/portfolio"className="navItem">Portfolio</NavLink>
        </div>
      </header>
    );
  }
}

export default SideBar;