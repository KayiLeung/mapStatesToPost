import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchComments } from '../../actions/comment_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts.all),
    comments: Object.values(state.entities.comments.all),
    users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(PostsIndex);