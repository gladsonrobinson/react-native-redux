
import { combineReducers } from "redux";
import NoteReducers  from '../containers/Notes/reducers';

const AppReducer = combineReducers({
  NoteReducers
});

export default AppReducer;