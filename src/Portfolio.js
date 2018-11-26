import React, { Component } from "react";
import ReactPlayer from "react-player";
import SideBar from './components/SideBar.js';
 
class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <div class="portfolio">
          <div class="portItem">
            <h2>Mega Triangle Warrior</h2>
            <p>Arcade Game, Made in Processing with Java, Spring 2016</p>
            {/* <ReactPlayer
              url={[{src:'images/TriMov1.mp4'}]}
              width='700'
              height='400'
            /> */}
            <video width="700" height="400" controls>
              <source src="images/TriMov1.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="portItem">
          <h2>Sprout</h2>
          <p>Based on CubeRunner, Made in Processing with Java, Spring 2016 (Made with James Safko and Victor Gonzalez)</p>
          <p>
            <video width="700" height="400" controls>
              <source src="images/SproutVid1.mp4" type="video/mp4" />
            </video>
          </p>
          </div>
          <div class="portItem">
            <h2>Light Speed</h2>
            <p>A Typing Game, Made in Processing with Java, Spring 2016</p>
            <video width="700" height="400" controls>
              <source src="images/LightVid1.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="portItem">
            <h2>Lily Pads</h2>
            <p>Music Game, Made in Processing with Java, Spring 2016</p>
            <p>
              <video width="700" height="400" controls>
                <source src="images/lilypad.mp4" type="video/mp4" />
              </video>
            </p>
          </div>
        </div>
        <SideBar />
      </div>
    );
  }
}
 
export default Portfolio;