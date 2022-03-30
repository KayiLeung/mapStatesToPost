import { connect } from 'react-redux';
import Test from "./test"
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts.all)
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(Test);