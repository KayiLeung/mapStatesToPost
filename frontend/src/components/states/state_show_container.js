import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchPosts } from '../../actions/post_actions';

import StateShow from './state_show';

const mapStateToProps = (state, ownProps) => {
//   const post = state.entities.posts[ownProps.match.params.stateId];
//   return ({
//     currentUser: state.session.user,
//     stateId: ownProps.match.params.stateId,
//     post
//   });
}


const mapDispatchToProps = (dispatch) => {  
  return ({
    // fetchPost: (postcardId) => dispatch(fetchPostcard(stateId)),
    
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateShow));