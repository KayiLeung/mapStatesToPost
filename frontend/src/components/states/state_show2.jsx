import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css';
import PostsIndexContainer from '../posts/posts_index_container';


class StateShow2 extends React.Component{
  constructor(props){
    super(props); 

    this.handlePosts = this.handlePosts.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  handlePosts() {
    const { posts } = this.props;
    const alPosts = posts.filter(post => post.stateName === 'Alaska')
    return alPosts;
  }

  render() {

    return (
      
      <div className="state-show-wrapper">
          <div className="state_container">
            <div className="state_info">
            <Link to={`/`}>Back to Map</Link>
            <h1 className="state_header">Alaska</h1>
            <h1 className="state_header">Description</h1>
            <p className="state_body">Alaska is a state located in the Western United States on the northwest extremity of North America. A semi-exclave of the U.S., it borders the Canadian province of British Columbia and the territory of ...</p>
            <h1 className="state_header">Fun Facts</h1>
            <p className="state_body">It is cold.</p>
            </div>
            <div className='state_posts'>
              <PostsIndexContainer posts={this.handlePosts()}/>
            </div>
        </div>
      </div>
    )
  }
}


export default StateShow2; 

