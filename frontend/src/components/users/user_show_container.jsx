import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/post_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';				
import UserShow from './user_show';				


const mapStateToProps = (state, ownProps) => ({
  // user: state.entities.user, 
  // userId: ownProps.match.params.userId,  
  // posts: state.entities.posts, 
    
  users: Object.values(state.entities.users),
  comments: Object.values(state.entities.comments.all),
  posts: Object.values(state.entities.posts.all)
    
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)), 
  fetchPosts: () => dispatch(fetchPosts()),
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow);