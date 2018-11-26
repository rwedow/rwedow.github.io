import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar.js';
 
class About extends Component {
  render() {
    return (
      <div className="App">
        <h1>About<br/>me</h1>
        <div className="bio">
          <p>I am a fourth year student at the University of Florida, majoring in Digital Arts and Sciences in the college of Engineering. I have completed two web development internships, and am beginning work on my senior project. The majority of my experience is in web development, however I am also interested in learning more about UI/UX. I am passionate about the environment, and I am interested in using software to better the planet.</p>
        </div>
        <SideBar />
      </div>
    );
  }
}

export default About;
