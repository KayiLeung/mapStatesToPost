import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchPost, updatePostPhotos, deletePost, deletePostPhoto } from '../../actions/post_actions';

import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
//   const post = state.entities.posts[ownProps.match.params.postId];
//   return ({
//     currentUser: state.session.user,
//     postId: ownProps.match.params.postId,
//     post
//   });
}


const mapDispatchToProps = (dispatch) => {  
  return ({
    // fetchPostcard: (postcardId) => dispatch(fetchPostcard(postcardId)),
    // updatePostcardPhotos: (postcardId, photos) => (
    //   dispatch(updatePostcardPhotos(postcardId, photos))
    // ),
    // deletePostcard: (tripId, postcardId) => (
    //   dispatch(deletePostcard(tripId, postcardId))
    // ), 
    // deletePostcardPhoto: (postcardId, imageUrl) => (
    //   dispatch(deletePostcardPhoto(postcardId, imageUrl))
    // ),
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostShow));