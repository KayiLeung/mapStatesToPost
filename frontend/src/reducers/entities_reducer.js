import { combineReducers } from "redux";
import CommentsReducer from "./comments_reducer"
import PostsReducer from "./posts_reducer";
import UsersReducer from "./users_reducer";
import StatesReducer from "./states_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    states: StatesReducer
});

export default EntitiesReducer;