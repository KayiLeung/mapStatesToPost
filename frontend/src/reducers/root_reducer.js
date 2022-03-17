import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_api_reducer';
import UIReducer from './ui_reducer';
import PostsReducer from './posts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
  posts: PostsReducer
});

export default RootReducer;