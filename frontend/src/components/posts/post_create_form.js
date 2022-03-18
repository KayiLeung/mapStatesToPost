import React from 'react';
import { Link } from 'react-router-dom';
import './post_create_form.css';


class PostCreateForm extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  
  constructor(props) {
    super(props)

    this.state = {
      caption: "",
      photo: "",
      stateName: ""
  }
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();

    this.props.createPost(this.state); 
    
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
      <div className="post-create-container">
        <form onSubmit={this.handleSubmit}>

          <div className="back-btn">
            <Link to={`/`}>Back to Map</Link>
          </div>

          <h1>Create New Post</h1>
          <div>
            <label>Caption
            <textarea 
              onChange={this.update('caption')}
              value={this.state.caption}
              rows="6"
              cols="50" />
          </label>
          </div>

          <label>Date
            <input 
              type="date"
              onChange={this.update('date')}
              value={this.state.date}
              
             />
          </label>

        <label>Image</label>
            <input 
              type="file"
              // onChange={this.update('photo')}
              // value={this.state.photo} 
             />

          <input type="submit" value="Create Post" />

          <Link className="cancel-btn" to={`/`}>Cancel</Link>
        </form>

      </div>
    )
  }
}

export default PostCreateForm;