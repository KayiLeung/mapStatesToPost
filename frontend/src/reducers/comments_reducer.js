import { RECEIVE_COMMENTS, RECEIVE_POST_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
  
  const CommentsReducer = (state = { all: {}, post: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data;
            return newState;
        case RECEIVE_POST_COMMENTS:
            newState.user = action.comments.data;
            return newState;
        case RECEIVE_COMMENT:
            newState.new = action.comment.data
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.commentId]; //do i need a .data?
            return newState
        default:
            return state;
    }
  };
  
  export default CommentsReducer;