import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';

// export default combineReducers({
//   errors: SessionErrorsReducer
// });

const ErrorsReducer = combineReducers({
  errors: SessionErrorsReducer
});

export default ErrorsReducer;