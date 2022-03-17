import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>

                <Link to={'/posts/new'}>Create Post</Link>
            </div>
        );
      } else {
        return (
            <div>
                
            </div>
        );
      }
  }

  render() {
      return (
        <div>
                <section className="nav_bar">
                <div className="nav_logo">
                    <Link to="/home">
                      <h1 id="nav_text">mapStatestoPost</h1>
                      </Link>
                </div>
                <div className="user_msg">
                Welcome back, User!
                </div>

                <div>
                  { this.getLinks() }
                </div>

                <div className={`nav_btn`}>

                    
                    <div className="drop-down-menu2">
                      <button className='drop-down-menu-bt'><a href="https://github.com/KayiLeung/mapStatesToPost">Github</a></button>
                        <div className='dropdown-content'>
                          <button className='db-item2'>Kayi Leung</button>
                          <button className='db-item2'>Sean Mackey</button>
                          <button className='db-item2'>Yao Xu</button>
                          <button className='db-item2'>Dean Ding</button>
                        </div>
                    </div>

                    <div className="drop-down-menu">
                      <button className='drop-down-menu-bt'>Dropdown</button>
                        <div className='dropdown-content'>
                          {/* <Link className='db-item' to={`/profile/${this.props.currentUser.id}`} style={{ textDecoration: 'none' }} >PROFILE</Link> */}
                          <button>Profile</button>
                          <button className='db-item' id='logout-bt' onClick={this.props.logout}>Logout</button>
                        </div>
                    </div>

                </div>
          </section>
        </div>
      );
  }
}

export default NavBar;