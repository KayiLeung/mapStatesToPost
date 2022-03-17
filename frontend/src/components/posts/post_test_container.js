import { connect } from 'react-redux';
import PostTest from './post_test'
import { fetchComments } from '../../actions/comment_actions';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => ({

})

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(null, mDTP)(PostTest);