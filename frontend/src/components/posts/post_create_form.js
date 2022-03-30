import React from 'react';
import { Link } from 'react-router-dom';
import './post_create_form.css';


class PostCreateForm extends React.Component{
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
    const formData = new FormData();

    formData.append('caption', this.state.caption);
    formData.append('stateName', this.state.stateName);


    if (this.state.photo){
      formData.append('photo', this.state.photo);
    }

    this.props.createPost(formData).then(this.props.closeModal());
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
          <label>State</label>
            <input 
              type="text"
              onChange={this.update('stateName')}
              value={this.state.stateName}
             />
        <label>Image</label>
            <input 
              type="file"
              onChange={e => this.setState({ photo: e.target.files[0] })}
              // value={this.state.photo} 
             />

          <input type="submit" value="Create Post" />

          <button onClick={this.props.closeModal}>Cancel</button>
        </form>

      </div>
    )
  }
}

export default PostCreateForm;