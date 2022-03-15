import { connect } from 'react-redux';
import HomePage from './home'
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mDTP)(HomePage);