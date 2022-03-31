import React from 'react';
import { Link } from 'react-router-dom'

import './navbar2.css'
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  openModal(){
    this.props.openModal('createpost');
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
    const { currentUser } = this.props;

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
                <p>Welcome back, {this.handleUser()}! </p>
              <div className='create_post' onClick={this.openModal}>Create Post</div>
              </div>
                <ul>
                <li className="drop-down-menu-1">
                  <a href="#" className="icon-home"><FaRegUserCircle /></a>
                  <ul className='user-dropdown'>
                  <Link to={`/users/${this.props.userId}`}>Profile</Link>
                    <button className='db-item' id='logout-bt' onClick={this.props.logout}>Logout</button>
                  </ul>
                </li>
              </ul>

                <ul>
                <li className="drop-down-menu-1">
                  <a href="#" className="icon-home"><FaGithub /></a>
                  <ul className='dropdown-content'>
                    <li><a href="https://github.com/KayiLeung/mapStatesToPost" target="_blank">map States To Post</a></li>
                    <li><a href="https://github.com/dingtianding" target="_blank">Dean Ding</a></li>
                    <li><a href="https://github.com/KayiLeung" target="_blank">Ka Yi Leung</a></li>
                    <li><a href="https://github.com/smackey15" target="_blank">Sean Mackey</a></li>
                    <li><a href="https://github.com/yuhmanashi" target="_blank">Yao Xu</a></li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li className="drop-down-menu-1">
                  <a href="#" className="icon-home"><FaLinkedin /></a>
                  <ul className='dropdown-content'>
                    <li><a href="https://www.linkedin.com/in/deanding/" target="_blank">Dean Ding</a></li>
                    <li><a href="https://www.linkedin.com/in/ka-yi-leung-9b0687a3/" target="_blank">Ka Yi Leung</a></li>
                    <li><a href="https://www.linkedin.com/in/sean-mackey123/" target="_blank">Sean Mackey</a></li>
                    <li><a href="https://www.linkedin.com/in/yaoxu03/" target="_blank">Yao Xu</a></li>
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