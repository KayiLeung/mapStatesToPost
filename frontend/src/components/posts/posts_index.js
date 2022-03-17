import React from 'react'; 
import PostIndexItem from './post_index_item'; 

class PostsIndex extends React.Component {
  render() {
    const { posts } = this.props; 
  
    return (
      <ul className="postcontainer"> 
        {
          posts.map(post => (
            <PostIndexItem
              post={post}
              // post_id={post_id}
              // user={user}
              // deletePost={deletePost}
              key={post._id}
            />
          ))
        }
      </ul>
    );
  }
}


export default PostsIndex; 