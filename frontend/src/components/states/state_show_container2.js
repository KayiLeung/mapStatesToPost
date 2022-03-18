import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';

import StateShow2 from './state_show2';

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  comments: Object.values(state.entities.comments.all),
  posts: Object.values(state.entities.posts.all)
});


const mapDispatchToProps = (dispatch) => {  
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateShow2));