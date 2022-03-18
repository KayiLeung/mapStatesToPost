import React, { Component } from 'react';
import './home.css';
import USAMap from "react-usa-map";
import PostsIndex from '../posts/posts_index'; 

// import { Link } from 'react-router-dom';


class HomePage extends Component {
  mapHandler = (event) => {
    // alert(event.target.dataset.name);
    let statesName = event.target.dataset.name
    this.props.history.push("/states/stateId");
    
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
      <div className="home">
        

           
        <div className="home_body">
          <div className="home_container">
            <div className="home_map">
              <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
            </div>
            <div className="home_index">
              {/* <PostsIndex posts={this.props.post} /> */}
            </div>
          </div>
        </div>

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
