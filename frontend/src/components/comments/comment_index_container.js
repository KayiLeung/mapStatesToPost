import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  comments: Object.values(state.entities.comments.all),
  postId: ownProps.postId
});

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mSTP, mDTP)(CommentIndex);