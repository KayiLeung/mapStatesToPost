import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'


class StateShow2 extends React.Component{
  constructor(props){
    super(props); 

    this.state = {
    }

  }

  componentDidMount() {
    // this.props.fetchPost(this.props.stateId)
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
            <div className="state_posts">
            <div className="post-items">
<div className="post-box">
  <div className="state-name"> 
    <h3>Alaska</h3>
  </div>

  <div className="post-pic">
    <img src={`https://mstp-dev.s3.amazonaws.com/1647597847656_Central-Park-Manhattan-New-York-City-apartment.jpeg`}/>
  </div>
  <br />
  
  <div className="post-body">
    <div className="body-top">
      <div className="username">
        deanding
      </div>

    </div>

    <div className="body-mid">
      <p className="caption">
      This is view of Central Park from my future penthouse in NYC.
      </p>

    </div>

    <div className="body-bot">
      <div className="date">
        March 18, 2022
      </div>

    </div>

  </div>
  <br/>
  
  <div className='comment-box'>
    <CommentIndexContainer postId={"6234591c17d01385c9f33310"}/>
    <CreateCommentContainer postId={"6234591c17d01385c9f33310"}/>
  </div>

</div>
</div>

            </div>
        </div>
      </div>
    )
  }
}


export default StateShow2; 

