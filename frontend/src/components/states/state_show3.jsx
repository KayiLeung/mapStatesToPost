import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'


class StateShow3 extends React.Component{
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
            <h1 className="state_header">California</h1>
            <h1 className="state_header">Description</h1>
            <p className="state_body">California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars.</p>
            <h1 className="state_header">Fun Facts</h1>
            <p className="state_body">Gas price is very expensive here.</p>
            </div>
            <div className="state_posts">
            
            </div>
            </div>
      </div>
    )
  }
}


export default StateShow3; 

