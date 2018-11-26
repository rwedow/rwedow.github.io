import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import './App.css';

import Home from './pages/Home.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About}/>
      </Router>, 
    document.getElementById('root'))
  }
}

export default App;
