import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './state_show.css';


class PostShow extends React.Component{
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
            <h1>New York</h1>
            <h1>Description</h1>
            <p>New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park. The Brooklyn Bridge connects Manhattan with the borough of Brooklyn. The iconic Statue of Liberty stands in New York Harbor. To the east, Long Island has beaches, the Montauk Lighthouse, the ritzy Hamptons and Fire Island. </p>
            <h1>Fun Facts</h1>
            <p>App Academy, a top coding bootcamp, have a campus in New York City.</p>
            </div>
            <div className="state_posts">
          </div>
        </div>
      </div>
    )
  }
}


export default PostShow; 

