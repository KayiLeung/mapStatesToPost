import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'
import './navbar2.css'
import { FaGithub, FaRegUserCircle } from 'react-icons/fa'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
                <Link to={'/posts/new'}>Create Post</Link>
        );
      } else {
        return (
            <div>
                
            </div>
        );
      }
  }

  handleUser() {
    const { userId, users } = this.props;
    let username;
    users.forEach(user => {
      if (userId === user._id) {
        username = user.username;
        return;
      }
    });
    return username;
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
            

            

            <div className={`nav_btn`}>
              <div className="user_msg">
                Welcome back, {this.handleUser()}!
              </div>

              <div className='create_post'>
                {this.getLinks()}
              </div>
                {/* <div className="drop-down-menu-1">
                  <button className='drop-down-menu-bt'>
                    Github
                    <a href="https://github.com/KayiLeung/mapStatesToPost">Github</a>
                  </button>
                    <div className='dropdown-content'>
                      <button className='db-item2'>Kayi Leung</button>
                      <button className='db-item2'>Sean Mackey</button>
                      <button className='db-item2'>Yao Xu</button>
                      <button className='db-item2'>Dean Ding</button>
                    </div>
                </div> */}
              <ul>
                <li class="drop-down-menu-1">
                  <a href="#" class="icon-home"><FaGithub /></a>
                  <ul className='dropdown-content'>


                    <li><a href="https://github.com/KayiLeung/mapStatesToPost">map States To Post</a></li>
                    <li><a href="https://github.com/dingtianding">Dean Ding</a></li>
                    <li><a href="https://github.com/KayiLeung">Ka Yi Leung</a></li>
                    <li><a href="https://github.com/smackey15">Sean Mackey</a></li>
                    <li><a href="">Yao Yu</a></li>
                  </ul>
                </li>
              </ul>

                {/* <div className="drop-down-menu-2">
                  <button className='drop-down-menu-bt'>Dropdown</button>
                    <div className='dropdown-content'>
                      <button>Profile</button>
                      <button className='db-item' id='logout-bt' onClick={this.props.logout}>Logout</button>
                    </div>
                </div> */}
              <ul>
                <li class="drop-down-menu-2">
                  <a href="#" class="icon-home"><FaRegUserCircle /></a>
                  <ul className='dropdown-content'>
                    <button>Profile</button>
                    <button className='db-item' id='logout-bt' onClick={this.props.logout}>Logout</button>
                  </ul>
                </li>
              </ul>

            </div>
          </section>
        </div>
      );
  }
}

export default NavBar;