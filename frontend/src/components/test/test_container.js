import { connect } from 'react-redux';
import Test from "./test"
import { fetchPosts } from '../../actions/post_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts.all)
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, null)(Test);