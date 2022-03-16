import React from 'react';
import { Link } from 'react-router-dom';

class PostCreateForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = this.props.newPostcard;
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handlePositionInput = this.handlePositionInput.bind(this);
  }

  handlePositionInput(position) {
    this.setState({
      lat: position.lat,
      lng: position.lng,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {


    return(
      <div className="postcard-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="back-btn">
            <Link to={`/`}>Back to Map</Link>
            <p></p>
          </div>
          <h1>Create New Post</h1>
          <label>Title
            <input 
              type="text"
              onChange={this.update('title')}
               />
          </label>
          <label>Date
            <input 
              type="date"
              onChange={this.update('date')}
             />
          </label>
          <label>Description
            <textarea 
              onChange={this.update('body')}
              
              rows="6"
              cols="50" />
          </label>
        <label>Image</label>
        <button>Upload</button>
          <input 
            onClick={this.handleSubmit}
            type="submit" 
            value="Create Post" />
          <Link className="cancel-btn" to={`/`}>Cancel</Link>
        </form>

      </div>
    )
  }
}

export default PostCreateForm;