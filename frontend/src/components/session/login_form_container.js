import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessions
  };
};

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);