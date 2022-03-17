import React from 'react';
import { Link } from 'react-router-dom';
import './post_create_form.css';


class PostCreateForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      caption: "",
      newPost: ""
  }
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let post = {
      caption: this.state.caption
    };

    this.props.createPost(post); 
    this.setState({caption: ''})
    
  }

  update() {
    return e => this.setState({
      caption: e.currentTarget.value
    });
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
                      <input type="textarea"
                        value={this.state.caption}
                        onChange={this.update()}
                        placeholder="Write your caption..."
                      />
          </label>
          </div>

          <label>Date

          </label>

        <label>Image</label>
        <button>Upload</button>

          <input type="submit" value="Create Post" />

          <Link className="cancel-btn" to={`/`}>Cancel</Link>
        </form>

      </div>
    )
  }
}

export default PostCreateForm;