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
            newState.all.push(newState.new);
            return newState;
        case REMOVE_COMMENT:
            newState.all = newState.all.filter(comment => comment._id !== action.commentId);
            return newState
        default:
            return state;
    }
  };
  
  export default CommentsReducer;