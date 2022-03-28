import React from 'react'; 
import { Link } from 'react-router-dom'; 

import PostsIndexContainer from '../posts/posts_index_container';
import NavBarContainer from '../navbar/navbar_container';
import './user_show.css';


class UserShow extends React.Component {
  constructor(props) {
    super(props); 
    
    this.handlePosts = this.handlePosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  handlePosts() {
    const { posts } = this.props;
    const userPosts = posts.filter(post => post.user === '6233393a2cd57d9429a9a15c')
    return userPosts;
  }

  render() {
    const { posts, user, currentUser } = this.props; 

    return (
      <div className="user_show_container">
        <header className='navbar'>
          <NavBarContainer />
        </header>
 
          <div className="user_details">
            <h1>User Journal Page</h1>
        

            <div className='user_posts'>
                <PostsIndexContainer posts={this.handlePosts()}/>
            </div>
        </div>
        
      </div>
    )
  }


}; 

export default UserShow; 