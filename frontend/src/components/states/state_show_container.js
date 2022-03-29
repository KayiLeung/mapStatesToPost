import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchState} from '../../actions/usaStates_actions'

import StateShow from './state_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    users: Object.values(state.entities.users),
    comments: Object.values(state.entities.comments.all),
    posts: Object.values(state.entities.posts.all),
    localState: state.entities.USAStates.all.key[ownProps.match.params.id]
  })
}


const mapDispatchToProps = (dispatch) => {  
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchState: id => dispatch(fetchState(id))

  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateShow));