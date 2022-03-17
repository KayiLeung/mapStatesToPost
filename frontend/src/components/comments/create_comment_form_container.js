import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        comment: { 
            body: '',
            post_id: 40,
            author_id: state.session.id 
        },
    }
};

const mDTP = dispatch => ({
    action: comment => dispatch(createComment(comment)),
});

export default connect(mSTP, mDTP)(CommentForm);