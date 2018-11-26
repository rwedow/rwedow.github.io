import React, { Component } from 'react';
import '../App.css';

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <header className="pageNav">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="Logo SplashLogo">
            <div className="LogoShadow">
              RW
            </div>
            RW
          </div>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
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

export default Resume;
