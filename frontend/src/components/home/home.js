import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';


class HomePage extends Component {  
  mapHandler = (event) => {
    // let stateName = event.target.dataset.name
    // let stateString = JSON.stringify(stateName);

    this.props.history.push("/states/NY");
    
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
    const { posts } = this.props;
    return (
      <div className="home">
        <header className='navbar'>
          <NavBarContainer />
        </header>
        

        <main className="main">
            <div className="home_container">
              <div className="home_map">
                <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
              </div>
            <div className= "scroller">
              <section className="home_index">
                <PostsIndexContainer posts={posts}/>
              </section>
            </div>
            </div>
        </main>

        <div className="btn">
          <Link to="/states/CA"><button>CA</button></Link>
        </div>

        <footer className="footer">
            <div>
                <p id="footer_text">Copyright ©2022
                <br></br>
                Favicon courtesy of <a href="https://www.vecteezy.com/" target="_blank" className="footer-link">Vecteezy</a>
                </p>
            </div>
        </footer>
      </div>
           
    );
  }
}

export default HomePage;
