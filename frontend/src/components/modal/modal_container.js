import { connect } from "react-redux";
import Modal from './modal'
import { closeModal } from "../../actions/modal_actions";
import { removeErrors } from "../../actions/session_actions";
import { receiveComment } from "../../actions/comment_actions"

const mSTP = state => ({
    modal: state.ui.modal,
    commentId: state.ui.commentId
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors()),
    receiveComment: commentId => dispatch(receiveComment(commentId)),
});

export default connect(mSTP, mDTP)(Modal)