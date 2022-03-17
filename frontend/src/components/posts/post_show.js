import React from 'react'; 
import { Link } from 'react-router-dom'; 
// import './posts.scss';


class PostShow extends React.Component{
  constructor(props){
    super(props); 

    this.state = {
    }

  }

  componentDidMount() {
    // this.props.fetchPost(this.props.postId)
  }






  render() {
    const { post, currentUser } = this.props; 
    

    const errors = this.state.errors ? (
      <ul role="list" className="errors">
        {
          this.state.errors.map(err => (
            <li>{err}</li>
          ))
        }
      </ul>
    ) : null; 





    return (
      <div className="post-show-wrapper">
        <header>
          <section>
            <Link to={`/`}>Back to Map</Link>
            <h1>{"user.state"}</h1>
            <h1>{"post.title"}</h1>
            <p>{"post.body"}</p>
          </section>
          <aside>
          </aside>
        </header>
        { errors }
        <main>
          <ul role="list">
                Pictures.map
          </ul>
        </main>
      </div>
    )
  }
}


export default PostShow; 

