import {PureComponent} from 'react';
import { connect } from "react-redux";
import {addNote, editNote} from './action';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapActionsToProps = {
  addNote,
  editNote
};

class Notes extends PureComponent {
  render() {
    const {notes, addNote, editNote} = this.props;
    return this.props.children({notes, addNote, editNote});
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Notes);
