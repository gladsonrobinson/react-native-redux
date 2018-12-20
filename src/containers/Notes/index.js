import {PureComponent} from 'react';
import { connect } from "react-redux";
import {addNote} from './action';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapActionsToProps = {
  addNote
};

class Notes extends PureComponent {
  render() {
    const {notes, addNote} = this.props;
    return this.props.children({notes, addNote});
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Notes);
