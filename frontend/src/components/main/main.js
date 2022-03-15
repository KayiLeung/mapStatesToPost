import React from 'react';
import './main.css'

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.openSignupForm = this.openSignupForm.bind(this)
  }

  openLoginForm(){
    this.props.openModal('login');
  }

  openSignupForm(){
    this.props.openModal('signup');
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>mapStateToPosts</h1>
        </div>
        <div className="buttons">
          <div className="login button" onClick={this.openLoginForm}>Log in</div>
          <div className="signup button" onClick={this.openSignupForm}>Signup</div>
        </div>
      </div>
    );
  }
}

export default MainPage;