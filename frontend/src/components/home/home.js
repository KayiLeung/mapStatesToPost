import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { AiFillFire, FaFire, ImFire, RiFireFill, MdLocalFireDepart } from 'react-icons/fa'


class HomePage extends Component {  
  mapHandler = (event) => {
    const stateName = event.target.dataset.name
    const stateStyle = event.target.style
    this.props.USAStates.forEach(USAState => {

      if (stateName === USAState.name) {
        this.props.history.push(`/USAStates/${USAState._id}`);
      }
    })
    
  };

  statesFilling = () => {
    const { posts, currentUser} = this.props;
    
    let states = [];
    posts.map(post => {

      if (post.user === currentUser.id) {
      states.push(post.stateName)
      }
    })

    const res = states.reduce((acc, state) => {
       acc[state] = {
        fill: "#3ca023"
      };
      return acc;
    }, {})
    return res
  }

  componentDidMount() {
    this.props.fetchStates()
  }


  render() {
    const { posts, USAStates } = this.props;

    if (!posts || !USAStates) {
      return null;
    }

    return (
      <div className="home">
        <NavBarContainer />
        
        <hr className="hr-top"/>

        <main className="main">
          <div className="content">
            <div className="top">
              <div className="home-map">
                <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
              </div>
              <div className="placehold">
                Trending <FaFire/>
              </div>
            </div>
            <div className= "scroller">
              <PostsIndexContainer posts={posts} maxPosts={12}/>
            </div>
          </div>
        </main>

        <hr className="hr-bottom"/>
        {/* <div className="btn">
          <Link to="/states/CA"><button>CA</button></Link>
        </div> */}

        <footer className="footer">
            <div>
                <p id="footer_text">Copyright ??2022
                <br/>
                Favicon courtesy of <a href="https://www.vecteezy.com/" target="_blank" className="footer-link">Vecteezy</a>
                </p>
            </div>
        </footer>
      </div>
           
    );
  }
}

export default HomePage;
