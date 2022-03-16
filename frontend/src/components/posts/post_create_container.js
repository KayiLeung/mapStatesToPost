import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { createPost } from '../../actions/postcard_actions';				
import PostCreateForm from './post_create_form';				

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.user;
  const postId = ownProps.match.params.postId;
  return({
    newPost: {
      title: "",
      body: "",
      images: []
    }
  });
}

const mapDispatchToProps = (dispatch) => ({
    // createPost: (post) => dispatch(createPost( post))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCreateForm));