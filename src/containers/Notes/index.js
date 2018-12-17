import { connect } from "react-redux";
import Notes from '../../components/Notes'

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(Notes);