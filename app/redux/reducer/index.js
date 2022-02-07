import {combineReducers} from 'redux';
import error from './error';
import appState from './appState';
export default combineReducers({
  error,
  appState
});
