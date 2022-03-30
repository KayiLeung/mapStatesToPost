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
    const formData = new FormData();

    formData.append('caption', this.state.caption);
    formData.append('stateName', this.state.stateName);


    if (this.state.photo){
      formData.append('photo', this.state.photo);
    }

    this.props.createPost(formData)

    this.props.history.push(`/`)
    
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
          {/* <label>State</label>
            <input 
              type="text"
              onChange={this.update('stateName')}
              value={this.state.stateName}
             /> */}
          <select>
            <option value="AK">Alaska</option>
            <option value="HI">Hawaii</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
          </select>
          <label>Date</label>
            <input 
              type="date"
              onChange={this.update('date')}
              value={this.state.date}
              
             />
          

        <label>Image</label>
            <input 
              type="file"
              onChange={e => this.setState({ photo: e.target.files[0] })}
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