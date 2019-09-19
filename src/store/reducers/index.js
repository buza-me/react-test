import { combineReducers } from 'redux';
import sharedReducer from './sharedReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  sharedReducer,
  dataReducer,
});

 export default rootReducer;