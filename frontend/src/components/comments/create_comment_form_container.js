import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        comment: { 
            body: '',
            post: '62307a9e5a6fc97cbf40b7ef',
            author: state.session.user 
        },
    }
};

const mDTP = dispatch => ({
    action: comment => dispatch(createComment(comment)),
});

export default connect(mSTP, mDTP)(CommentForm);