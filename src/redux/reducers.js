
import { combineReducers } from "redux";
import NoteReducers  from '../container/Notes/reducers';

const AppReducer = combineReducers({
  NoteReducers
});

export default AppReducer;