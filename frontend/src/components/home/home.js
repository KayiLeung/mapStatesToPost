import React from 'react';

class HomePage extends React.Component {
  
  
  render() {
      return (
        <div>
          <div className="header">
            <h1>Home</h1>
          </div>
          <div className="buttons">
            <div className="logout" onClick={this.props.logout}>Log out</div>
          </div>
        </div>
      );
    }
  }

export default HomePage;