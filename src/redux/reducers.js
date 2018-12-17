
import { combineReducers } from "redux";
import NoteReducers  from '../containers/Notes/reducers';

const AppReducer = combineReducers({
  notes: NoteReducers
});

export default AppReducer;