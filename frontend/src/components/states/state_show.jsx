import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'
import PostsIndexContainer from '../posts/posts_index_container';

import { MdTravelExplore } from 'react-icons/md'
import { RiChatSmileFill, RiRoadMapFill} from 'react-icons/ri'

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
  }
  
  handlePosts(res) {
    const {  posts } = this.props;
    const statePosts = posts.filter(post => post.stateName === res)
    return statePosts

  }


  
  render() {
    

    const { USAStates, stateId } = this.props;

    let res = ""

    USAStates.forEach(USAState => {
      if (USAState._id === stateId)
        res = USAState.name
    })

    let statesData = data();
    return (
      
      <div className="state-show-wrapper">
          <div className="state_container">
              <div className="state_info">
            <Link to={`/`}><RiRoadMapFill /> Back to Map </Link>

                <div>
                  <h1>{statesData[res].name}</h1>

                  <p>{statesData[res].description}</p>
                </div>
                
                <div>
                    <h2>Fun Fact of {statesData[res].name}</h2>
                  <p>{statesData[res].funFacts}</p>
                    <br />
              <a href={statesData[res].funFactsUrl} target="_blank"><RiChatSmileFill /> More fun facts!</a>
                  <br />
              <a href={statesData[res].travelUrl} target="_blank"><MdTravelExplore /> Travel Info</a>
                </div>

              </div>
              <div className='scrolling-wrapper'>
                {/* <div className='local_states_posts'> */}
                  <PostsIndexContainer posts={this.handlePosts(res)}/>
                {/* </div> */}
              </div>  
          
          </div>
      </div>
    )
  }
}


export default StateShow; 

