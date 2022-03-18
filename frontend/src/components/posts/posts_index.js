import React from 'react'; 
import PostIndexItem from './post_index_item';
import "./posts_index.css" 

class PostsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }
  
  render() {
    const { posts, comments, users } = this.props; 
  
    return (
      <ul className="post-container"> 
        {
          posts.map(post => (
            <PostIndexItem
              post={post}
              comments={comments}
              users={users}
              key={post._id}
            />
          ))
        }
      </ul>
    );
  }
}

export default PostsIndex; 