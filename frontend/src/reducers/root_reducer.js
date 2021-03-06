import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_api_reducer';
import UIReducer from './ui_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
});

export default RootReducer;