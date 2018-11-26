import React, { Component } from 'react';
import '../App.css';

class Portfolio extends Component {
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
          <p>About</p>
          <p>Resume</p>
          <p>Portfolio</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Portfolio;
