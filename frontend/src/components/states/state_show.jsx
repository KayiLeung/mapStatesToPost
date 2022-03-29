import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'
import PostsIndexContainer from '../posts/posts_index_container';

import '../../data/usa-map-dimensions'


class StateShow extends React.Component{
  constructor(props){
    super(props); 

    this.handlePosts = this.handlePosts.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
    this.props.fetchState(this.props.match.params.stateId)
  }
  
  handlePosts() {
    const { posts } = this.props;
    const statePosts = posts.filter(post => post.stateName === 'New York')
    return statePosts;
  }
  
  render() {
    const { localState} = this.props
    console.log(localState)
    return (
      
      // <div className="state-show-wrapper">
      //     <div className="state_container">
      //       <div className="state_info">
      //       <Link to={`/`}>Back to Map</Link>
           
      //       </div>
      //     </div>
      //     <div className='state_posts'>
      //       <PostsIndexContainer posts={this.handlePosts()}/>
      //     </div>
      // </div>
      <h1>This is a states show page</h1>
    )
  }
}


export default StateShow; 

