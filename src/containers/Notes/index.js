import { connect } from "react-redux";
import {Notes, AddEditNote} from '../../components';
import {addNote} from './action';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapActionsToProps = {
  addNote
};

export const NotesCtnr =  connect(mapStateToProps)(Notes);

export const AddEditNoteCtnr = connect(mapStateToProps, mapActionsToProps)(AddEditNote);