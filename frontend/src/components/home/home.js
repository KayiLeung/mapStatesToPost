import React, { Component } from 'react';
import './home2.css';
import USAMap, { defaultProps} from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';



class HomePage extends Component {  
  mapHandler = (event) => {
    // let stateName = event.target.dataset.name
    // let stateString = JSON.stringify(stateName);

    const stateName = event.target.dataset.name
    const stateStyle = event.target.style

    if (stateStyle.fill !== 'pink'){

      stateStyle.fill = 'pink'

      // states.push(`${stateName}`)
 
      } else {
      stateStyle.fill = '#D3D3D3'
      }
      
      // this.props.history.push(`/states/${stateName}`);
    // return (<Link to={`/states/${stateName}`}/>)


    // console.log(`/states/${stateName}`)
  };

  statesFilling = () => {
    // console.log(this.props.posts)
    const states = ['CA','NY', 'NJ']


    return (
      states.map((state) => ({
        [state]:  {
          fill: "#CC0000"
        }
      
      }))
    )
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
