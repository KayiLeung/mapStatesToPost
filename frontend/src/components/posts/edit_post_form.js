import React from 'react';
import { Link } from 'react-router-dom';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchPost(this.props.postId);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.post !== this.props.post){
            this.setState(this.props.post)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
      
    render() {
        if (!this.state) return null;
        return(
          <div className="post-create-container">
            <form onSubmit={this.handleSubmit}>
    
              <div className="back-btn">
                <Link to={`/`}>Back to Map</Link>
              </div>
    
              <h1>Edit Post</h1>
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
            
            {/* <label>Image</label>
                <input 
                  type="file"
                  onChange={e => this.setState({ photo: e.target.files[0] })}
                  value={this.state.photo} 
                 /> */}
    
              <input type="submit" value="Edit Post" />
    
              <Link className="cancel-btn" to={`/`}>Cancel</Link>
            </form>
    
          </div>
        )
    }
}

export default EditCommentForm;