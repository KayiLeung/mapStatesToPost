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
    console.log(this.props)
    debugger
    // console.log(props.match.params.id)

    this.handlePosts = this.handlePosts.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
    const localState = this.props.fetchState(this.props.stateId)
    console.log(`this is localstate from componetDidMount ${localState}`)
  }
  
  handlePosts() {
    const { posts, localState } = this.props;
    console.log(localState.name)
    // const statePosts = posts.filter(post => post.stateName === localState.name)
    // return statePosts;
  }
  
  render() {
    const { posts } = this.props;

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

