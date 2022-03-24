import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';


class HomePage extends Component {  
  mapHandler = (event) => {
    const stateName = event.target.dataset.name
    console.log('state:',stateName)
    const stateStyle = event.target.style

    this.props.history.push(`/states/${stateName}`);

  };

  statesFilling = () => {
    const { posts, currentUser} = this.props;
    
    let states = [];
    posts.map(post => {
      console.log(post)
      if (post.user === currentUser.id) {
      states.push(post.stateName)
      }
      console.log(states)
    })

    const res = states.reduce((acc, state) => {
       acc[state] = {
        fill: "#c8808c"
      };
      return acc;
    }, {})
    return res


  }


  render() {
    const { posts } = this.props;
    if (!posts) {
      return null;
    }
    
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

        {/* <div className="btn">
          <Link to="/states/CA"><button>CA</button></Link>
        </div> */}

        <footer className="footer">
            <div>
                <p id="footer_text">Copyright ©2022</p>

            </div>
        </footer>
      </div>
           
    );
  }
}

export default HomePage;
