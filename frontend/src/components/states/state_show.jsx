import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'


class StateShow extends React.Component{
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
            <h1 className="state_header">New York</h1>
            <h1 className="state_header">Description</h1>
            <p className="state_body">New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park. The Brooklyn Bridge connects Manhattan with the borough of Brooklyn. The iconic Statue of Liberty stands in New York Harbor. To the east, Long Island has beaches, the Montauk Lighthouse, the ritzy Hamptons and Fire Island. </p>
            <h1 className="state_header">Fun Facts</h1>
            <p className="state_body">App Academy, a top coding bootcamp, have a campus in New York City.</p>
            </div>
            <div className="state_posts">
            <ul className="post-container">
            <div className="post-items">
        <div className="post-box">
          <div className="state-name"> 
            <h3>New York</h3>
          </div>

          <div className="post-pic">
            <img src={`https://mstp-dev.s3.us-west-2.amazonaws.com/1647601757094_niagara.jpg`}/>
          </div>
          <br />
          
          <div className="post-body">
            <div className="body-top">
              <div className="username">
                DemoUser
              </div>

            </div>

            <div className="body-mid">
              <p className="caption">
                Breathtaking!
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
            <CommentIndexContainer postId={"62346861542bf6b6911df870"}/>
            <CreateCommentContainer postId={"62346861542bf6b6911df870"}/>
          </div>

        </div>
      </div>
            <div className="post-items">
              <div className="post-box">
                <div className="state-name"> 
                  <h3>New York</h3>
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
              </ul>
            </div>
            </div>
      </div>
    )
  }
}


export default StateShow; 

