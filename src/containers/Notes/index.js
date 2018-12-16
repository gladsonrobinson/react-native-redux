import { connect } from "react-redux";
import Notes from '../../components/Notes'

const mapStateToProps = store => ({
  notes: store.notes
});

export default connect(mapStateToProps)(Notes);