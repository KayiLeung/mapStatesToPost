import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.sessions
  };
};

const mapDispatchToProps = (dispatch) => ({
    signup: (user, userlogin) => dispatch(signup(user, userlogin)),
    closeModal: () => dispatch(closeModal()),
    openModal: form => dispatch(openModal(form))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);