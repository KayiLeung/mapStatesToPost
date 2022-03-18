import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndex from '../posts/posts_index'; 
import NavbarContainer from '../navbar/navbar_container';
// import { Link } from 'react-router-dom';


class HomePage extends Component {
  mapHandler = (event) => {
    // alert(event.target.dataset.name);
    let statesName = event.target.dataset.name
    this.props.history.push("/posts/new");
    
  };

  statesFilling = () => {
    
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
        <header className='navbar'>
          <NavbarContainer/>
        </header>
        

        <main className="main">
            <div className="home_container">
              <div className="home_map">
                <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
              </div>
              <div className="home_index">
                {/* <PostsIndex posts={this.props.post} /> */}
              </div>
            </div>
        </main>

        <footer className="footer">
                <p id="footer_text">Copyright ©2022</p>
        </footer>
      </div>
      
      
    );
  }
}

export default HomePage;
