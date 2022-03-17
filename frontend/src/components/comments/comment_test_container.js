import { connect } from 'react-redux';
import CommentTest from './comment_test'
import { fetchComments } from '../../actions/comment_actions';

const mSTP = state => ({

});

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments())
});


export default connect(null, mDTP)(CommentTest);