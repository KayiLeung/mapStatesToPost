import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user.id,
  users: Object.values(state.entities.users)
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);