import {PureComponent} from 'react';
import { connect } from "react-redux";
import {addNote, editNote, deleteNote} from './action';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = {
  addNote,
  editNote,
  deleteNote
};

class Notes extends PureComponent {
  render() {
    const {notes, addNote, editNote, deleteNote} = this.props;
    return this.props.children({notes, addNote, editNote, deleteNote});
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
