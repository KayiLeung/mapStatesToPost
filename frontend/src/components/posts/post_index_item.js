import React from 'react'; 
import { Link } from 'react-router-dom'; 

const PostIndexItem = ({ post }) => {

  return (
    <div className="trips-index-item" id={`trip-item-${post._id}`}>
      <section>
        <Link to={`/posts/${post._id}`}>
          <h2>{post.user}</h2>
        </Link>
          <p>{post.caption}</p>
      </section>

      <div>
        <ul role="list">
          {/* <li>{trip.photoTiles[0] ? ( <img src={trip.photoTiles[0]} alt={"Postcard photo tile"}/> ) : null}</li> */}
        </ul>
      </div>
    </div>
  )
  
}

export default PostIndexItem; 