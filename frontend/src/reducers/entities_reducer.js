import { combineReducers } from "redux";
import CommentsReducer from "./comments_reducer"

const EntitiesReducer = combineReducers({
    comments: CommentsReducer
});

export default EntitiesReducer;

// not sure if we need an entities reducer but it is one way to stay more organized i guess