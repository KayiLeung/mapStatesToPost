import { connect } from 'react-redux';
import HomePage from './home'
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchStates, fetchState} from '../../actions/states_actions';

const mapStateToProps = state => {

    return{
    loggedIn: state.session.isAuthenticated,
    posts: Object.values(state.entities.posts.all),
    currentUser: state.session.user,
    states: Object.values(state.entities.states)
}};

const mDTP = dispatch => {
    debugger
    return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout()),
    fetchStates: () => dispatch(fetchStates()),
    fetchState: stateId => dispatch(fetchState(stateId))
    }
};

export default connect(mapStateToProps, mDTP)(HomePage);