import React, { Component } from 'react';
import './home.css';
import USAMap from "react-usa-map";
import { Link } from 'react-router-dom';


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

            <section className="nav_bar">
                <div className="nav_logo">
                    <Link to="/home">
                      <h1 id="nav_text">mapStatestoPost</h1>
                      </Link>
                </div>
                <div className="user_msg">
                Welcome back, User!
                </div>
                <div className={`nav_btn`}>

                    
                    <div className="drop-down-menu2">
                      <button className='drop-down-menu-bt'><a href="https://github.com/KayiLeung/mapStatesToPost">Github</a></button>
                        <div className='dropdown-content'>
                          <button className='db-item'>Kayi Leung</button>
                          <button className='db-item'>Sean Mackey</button>
                          <button className='db-item'>Yao Xu</button>
                          <button className='db-item'>Dean Ding</button>
                        </div>
                    </div>

                    <div className="drop-down-menu">
                      <button className='drop-down-menu-bt'>Dropdown</button>
                        <div className='dropdown-content'>
                          {/* <Link className='db-item' to={`/profile/${this.props.currentUser.id}`} style={{ textDecoration: 'none' }} >PROFILE</Link> */}
                          <button>Profile</button>
                          <button className='db-item' id='logout-bt' onClick={this.props.logout}>Logout</button>
                          <div className='comments'>
                            <Link to='/comments/'>
                              Comments
                            </Link>
                          </div> 
                        </div>
                    </div>

                </div>
          </section>

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
