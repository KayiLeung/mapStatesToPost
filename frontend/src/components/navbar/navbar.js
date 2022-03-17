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
                <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
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
                        </div>
                    </div>

                </div>
          </section>
        </div>
      );
  }
}

export default NavBar;