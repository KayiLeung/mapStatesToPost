import React, { Component } from 'react';
import './home.css';
import USAMap from "react-usa-map";
// import { Link } from 'react-router-dom';


class HomePage extends Component {
  mapHandler = (event) => {
    // alert(event.target.dataset.name);
    let statesName = event.target.dataset.name
    this.props.history.push("/posts/new");
    
  };

  statesFilling = () => {
    // currentUser.states.map |state|{
    // "state": {
    //   fill: "green",
    // }}

    // stateObject[state.name] = {fill: “green”}
    
    return {
      "NJ": {
        fill: "green",
      },
      "NY": {
        fill: "green"
      },
      "CA": {
        fill: "green"
      },
      "AK": {
        fill: "green"
      }
    };
  };

  render() {
    return (
      <div className="App">

           

        <div className="map">
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />

        </div>
        {/* <div className="svg">   
        <svg width="250" height="175">
         <defs>
       		  <clipPath id="myCircle">
               <circle cx="125" cy="70" r="50" fill="#FFFFFF" />
            </clipPath>
         </defs>
         <image width="250" height="175" href="https://www.tutorialspoint.com/videotutorials/images/coding_ground_home.jpg" clip-path="url(#myCircle)" />
          </svg>
        </div> */}

        <section className="footer">
            <div className="footer_copyright">
                  <p id="footer_text">Copyright ©2022</p>
            </div>
        </section>

      




        
      </div>
      
      
    );
  }
}

export default HomePage;
