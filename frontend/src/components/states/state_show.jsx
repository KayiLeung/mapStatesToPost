import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'
import PostsIndexContainer from '../posts/posts_index_container';

import data from '../../data/usa-map-dimensions'


class StateShow extends React.Component{
  constructor(props){
    super(props); 
    this.handlePosts = this.handlePosts.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
    // this.props.fetchState(this.props.stateId)
  }
  
  handlePosts(res) {
    const {  posts } = this.props;
    const statePosts = posts.filter(post => post.stateName === res)
    return statePosts

  }


  
  render() {
    

    const { USAStates, stateId } = this.props;
    // console.log(`this is show page: ${USAState}`)

    // if (!USAState) {
    //   return null
    // }
    let res = ""

    USAStates.forEach(USAState => {
      if (USAState._id === stateId)
        res = USAState.name
    })

    console.log(res)

    let statesData = data();
    debugger
    return (
      
      <div className="state-show-wrapper">
          <div className="state_container">
            <div className="state_info">
            <Link to={`/`}>Back to Map</Link>
            <h1>{statesData[res].name}</h1>

              {statesData[res].description}
           
            <div>
                <h2>Fun Facts of {statesData[res].name}</h2>
                {statesData[res].funFacts}
                <br />
              <a href={statesData[res].funFactsUrl} target="_blank">more fun facts! </a>
              <a href={statesData[res].travelUrl} target="_blank">Travel Info</a>
              
            </div>

            </div>
          </div>
          <div className='state_posts'>
          <PostsIndexContainer posts={this.handlePosts(res)}/>
          </div>
          
      </div>
    )
  }
}


export default StateShow; 

