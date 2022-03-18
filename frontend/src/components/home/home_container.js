import { connect } from 'react-redux';
import HomePage from './home'
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    posts: Object.values(state.entities.posts.all)
});

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mDTP)(HomePage);