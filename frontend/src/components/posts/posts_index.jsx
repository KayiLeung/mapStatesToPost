import React from 'react'; 
import PostIndexItem from './post_index_item'; 

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { posts } = this.props; 
  
    return (
      <div className="trips-index">
        { posts.map((post, i) => <PostIndexItem key={i} post={post} />)  }
      </div>
    )
  }
}


export default PostsIndex; 